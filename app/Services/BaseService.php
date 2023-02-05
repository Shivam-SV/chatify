<?php

namespace App\Services;

abstract class BaseService{

    protected $repo;

    public function store($validatedRequest, $id = null)
    {
        $prepared = $validatedRequest;
        if(method_exists($this,'prepareRequest')){
            $prepared = $this->prepareRequest($validatedRequest);
        }

        if($this->repo){
            return $id ? $this->repo->update($prepared,$id) : $this->repo->store($prepared);
        }
    }

    public function delete($id)
    {
        return $this->repo->delete($id);
    }

    /**
     * Prepares the request data to accomplish the database insertion or updation
     */
    public function prepareRequest($validatedRequest)
    {
        return $validatedRequest->all();
    }
}
