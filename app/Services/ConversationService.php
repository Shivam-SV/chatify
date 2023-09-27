<?php

namespace App\Services;
use App\Repositories\ConversationRepository;

class ConversationService extends BaseService{

    public function __construct(ConversationRepository $repo){
        $this->repo = $repo;
    }
}
