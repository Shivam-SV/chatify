<?php

namespace App\Services;
use Illuminate\Support\Facades\DB;
use App\Repositories\UserRepository;

class  UserService extends BaseService{

    public function __construct(UserRepository $repo){
        $this->repo = $repo;
    }

    function register($validatedRequest) {
        DB::beginTransaction();
        $response = $this->repo->store($validatedRequest->only('name', 'email', 'phone', 'password'));
        if ($response->getStatusCode()){
            DB::commit();
            return $this->repo->response(__('auth.registed'), 'success');
        }else return $response;
    }
}
