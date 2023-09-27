<?php

namespace App\Repositories;

use App\Models\Friendship;

class FriendshipRepository extends BaseRepository{

    public function __construct(Friendship $model){
        $this->model = $model;
    }
}
