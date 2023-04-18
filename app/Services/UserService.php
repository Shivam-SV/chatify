<?php

namespace App\Services;

use Exception;
use Throwable;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
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
            $authenticationMethod = preg_match_all("/[0-9]+/",$validatedRequest->user_name) ? 'phone' : (filter_var($validatedRequest->user_name, FILTER_VALIDATE_EMAIL) ? 'email' : 'user_name');

            #checks if the user is already logged in or not
            if(!auth()->check()){
                if(User::where($authenticationMethod,$validatedRequest->user_name)->first()){
                    if(Auth::attempt([$authenticationMethod => $validatedRequest->user_name, 'password' => $validatedRequest->password])){
                        return $this->repo->message(200,'success',['name' => 'responses.welcome','values' => ['user' => auth()->user()->name]],1,null,['user' => auth()->user()]);
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
                return User::with('friends')->find($userId);
            }
            throw new ModelNotFoundException('auth user does not exist');
        }catch(ModelNotFoundException $th){
            return $this->repo->message(400,'error',['name' => 'responses.model_not_found','values' => ['model' => $this->repo->getModelName()]],5,$th->getMessage());
        }
    }

}
