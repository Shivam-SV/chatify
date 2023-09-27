<?php

namespace App\Repositories;
use App\Models\Conversation;

class ConversationRepository extends BaseRepository{

    public function __construct(Conversation $model){
        $this->model = $model;
    }
}
