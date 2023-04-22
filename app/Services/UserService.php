<?php

namespace App\Services;

use Exception;
use Throwable;
use App\Models\User;
use RuntimeException;
use Illuminate\Support\Facades\DB;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\UserFriendsResource;
use App\Models\UserFriend;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class UserService extends BaseService{

    /**
     * Basic Construtor With its dependancies
     */
    public function __construct(UserRepository $repo)
    {
        $this->repo = $repo;
    }

    public function register($validatedRequest)
    {
        DB::beginTransaction();
        $response = $this->store($validatedRequest);
        if($response->status() == 200){
            DB::commit();
            return $this->repo->message(200,'success',['name' => 'responses.registered','values' => ['model' => $this->repo->getModelName()]]);
        }
        return $response;
    }

    public function prepareRequest($validatedRequest)
    {
        // dd($validatedRequest);
        $prepared = $validatedRequest->all();
        $prepared['password'] = Hash::make($prepared['password']);
        $prepared['password_hint'] = $validatedRequest->password_confirmation;
        return $prepared;
    }

    public function loginUser($validatedRequest)
    {
        try{
            # determine the authentication method by which the user authenticated. Possible types (phone, email, user_name)
            $authenticationMethod = filter_var($validatedRequest->user_name, FILTER_VALIDATE_INT) ? 'phone' : (filter_var($validatedRequest->user_name, FILTER_VALIDATE_EMAIL) ? 'email' : 'user_name');

            #checks if the user is already logged in or not
            if(!auth()->check()){
                if(User::where($authenticationMethod,$validatedRequest->user_name)->first()){
                    if(Auth::attempt([$authenticationMethod => $validatedRequest->user_name, 'password' => $validatedRequest->password])){
                        return $this->repo->message(200,'success',['name' => 'responses.welcome','values' => ['user' => auth()->user()->first_name]],1,null,['user' => auth()->user()]);
                    }
                    throw new Exception('Incorrect password');
                }
                throw new ModelNotFoundException("{$authenticationMethod} is incorrect, please check the {$authenticationMethod}");
            }
            throw new AuthorizationException('user is already logged in');
        }catch(AuthorizationException $th){
            return $this->repo->message(400,'error',['name' => 'auth.already_login'],5,$th->getMessage());
        }catch(ModelNotFoundException $th){
            return $this->repo->message(400,'warning',['name' => 'auth.failed'],5,$th->getMessage());
        }catch(Throwable $th){
            return $this->repo->message(400,'warning',['name' => 'auth.password'],5,$th->getMessage());
        }
    }

    public function logoutUser()
    {
        try{
            if(auth()->check()){
                if(auth()->logout()){
                    return $this->repo->message(200,'success',['name' => 'auth.logout']);
                }
                throw new Exception('unknown_error');
            }
            throw new Exception('already_logout');
        }catch(Throwable $th){
            return $this->repo->message(400,'warning',['name' => "auth.{$th->getMessage()}"],5);
        }
    }

    public function UserDetails($userId)
    {
        try{
            if($userId){
                $user = User::with('friends')->find($userId);
                return $this->repo->message(200,'success',['name' => 'auth.user_found'],5,null, ['user' => $user]);
            }
            throw new ModelNotFoundException('auth user does not exist');
        }catch(ModelNotFoundException $th){
            return $this->repo->message(400,'error',['name' => 'responses.model_not_found','values' => ['model' => $this->repo->getModelName()]],5,$th->getMessage());
        }
    }

    public function generateApiToken($userId)
    {
        try{
            $user = User::findOrFail($userId);
            $token = $user->createToken('chattify-user-'.$userId);
            return $this->repo->message(200, 'success',['name' => 'auth.token_generated'], 2, null, ['token' => $token->plainTextToken]);
        }catch(ModelNotFoundException $err){
            return $this->repo->message(400,'error',['name' => 'responses.model_not_found','values' => ['model' => $this->repo->getModelName()]],5,$err->getMessage());
        }
    }

    public function findUserByKeyword($keyword, $userId = null)
    {
        try{
            if($keyword){
                $users = User::where('first_name','LIKE', "%$keyword%")
                    ->orWhere('last_name','like',"%$keyword%")
                    ->orWhere('user_name',"like","%$keyword%")
                    ->orWhere('phone',"like","%$keyword%")
                    ->orWhere('email',"like","%$keyword%")
                    ->orWhere('nick_name',"like","%$keyword%")->get();
                if($userId){
                    $friendsId = UserFriend::where('user_id', $userId)->whereIn('friend_id', $users->pluck('id'))->select('id')->get();
                    $users = $users->map(function($user) use($friendsId){
                        $user->is_friend = $friendsId->has($user->id) ? true : false;
                        return $user;
                    });
                }
                return UserFriendsResource::collection($users);
            }
            throw new RuntimeException('specified user does not exist or user id is null');
        }catch(Throwable $th){
            return $this->repo->message(400,'error',['name' => 'responses.model_not_found','values' => ['model' => $this->repo->getModelName()]],5,$th->getMessage());
        }
    }
}
