<?php

namespace App\Repositories;

use App\Models\Message;

class MessageRepository extends BaseRepository{

    public function __construct(Message $model){
        $this->model = $model;
    }
}
