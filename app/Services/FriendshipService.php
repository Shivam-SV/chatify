<?php

namespace App\Services;
use App\Repositories\FriendshipRepository;

class FriendshipService extends BaseService{

    public function __construct(FriendshipRepository $repo){
        $this->repo = $repo;
    }
}
