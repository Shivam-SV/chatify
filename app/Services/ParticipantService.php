<?php

namespace App\Services;
use App\Repositories\ParticipantRepository;

class ParticipantService extends BaseService{

    public function __construct(ParticipantRepository $repo){
        $this->repo = $repo;
    }
}
