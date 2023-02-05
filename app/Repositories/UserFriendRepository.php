<?php

namespace App\Repositories;

use App\Models\UserFriend;

class UserFriendRepository extends BaseRepository{

    public function __construct(UserFriend $model)
    {
        $this->model = $model;
    }
}
