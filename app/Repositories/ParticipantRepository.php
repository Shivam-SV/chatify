<?php

namespace App\Repositories;

use App\Models\Participant;

class ParticipantRepository extends BaseRepository{

    public function __construct(Participant $model){
        $this->model = $model;
    }
}
