<?php

namespace App\Services;
use Illuminate\Support\Facades\DB;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Auth;

class  UserService extends BaseService{

    public function __construct(UserRepository $repo){
        $this->repo = $repo;
    }

    public function register($validatedRequest) {
        DB::beginTransaction();
        $response = $this->repo->store($validatedRequest->only('name', 'email', 'phone', 'password'));
        if ($response->getStatusCode()){
            DB::commit();
            return $this->repo->response(__('auth.registed'), 'success');
        }else return $response;
    }

    public function login($validatedRequest){
        $inputs = [
            filter_var($validatedRequest->username, FILTER_VALIDATE_EMAIL) ? 'email' : 'username' => $validatedRequest->username,
            'password' => $validatedRequest->password
        ];
        if(Auth::attempt($inputs)){
            $authToken = auth()->user()->createToken('authToken');
            return $this->repo->response(__('auth.logged_in', ['name' => auth()->user()->first_name]), 'success', content: ['auth' => ['authToken' => $authToken->plainTextToken, 'name' => auth()->user()->name]]);
        }
    }
}
