<?php

namespace App\Repositories;

use Carbon\Exceptions\InvalidDateException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use PDOException;
use RuntimeException;
use Throwable;

abstract class BaseRepository{

    protected $model;

    protected $priorities = [1,2,3,4,5,6];

    public function getModelName()
    {
        $ClassNameWithNameSpace = explode('\\',get_class($this->model));
        return end($ClassNameWithNameSpace);;
    }

    public function store($prepared)
    {
        try{
            if($prepared){
                if($this->model->create($prepared)){
                    return $this->message(200,'success',['name' => 'responses.inserted','values' => ['model' => $this->getModelName()]]);
                }
                throw new PDOException('Can not insert the data, May be connect with database is lost');
            }
            throw new RuntimeException('data is empty in request');
        }catch(PDOException $exp){
            return $this->message(400,'error',['name' => 'responses.server_error'],2,$exp->getMessage());
        }catch(RuntimeException $exp){
            return $this->message(500,'error',['name' => 'responses.empty_request'],3,$exp->getMessage());
        }catch(Throwable $th){
            return $this->message(500,'error',['name' => 'responses.unknown_error'],5,$th->getMessage());
        }
    }

    public function update($prepared, $id)
    {
        try{
            if($prepared){
                if($record = $this->model->find($id)){
                    if($record->update($prepared))
                        return $this->message(200,'success',['name' => 'responses.updated','values' => ['model' => $this->getModelName()]]);
                    throw new PDOException('Can not update the data, May be connect with database is lost');
                }
                throw new ModelNotFoundException('requested record not found in the database');
            }
            throw new RuntimeException('data is empty in request');
        }catch(ModelNotFoundException $exp){
            return $this->message(400,'error',['name' => 'responses.model_not_found','values' => ['model' => $this->getModelName()]],5,$exp->getMessage());
        }catch(PDOException $exp){
            return $this->message(400,'error',['name' => 'responses.server_error'],2,$exp->getMessage());
        }catch(RuntimeException $exp){
            return $this->message(500,'error',['name' => 'responses.empty_request'],3,$exp->getMessage());
        }catch(Throwable $th){
            return $this->message(500,'error',['name' => 'responses.unknown_error'],5,$th->getMessage());
        }
    }

    public function delete($id)
    {
        try{
            if($id && !empty($id)){
                $record = is_array($id) ? $this->model->whereIn('id',$id) : $this->model->find($id);
                if($record){
                    if($record->delete())
                        return $this->message(200,'success',['name' => 'responses.deleted','values' => ['model' => $this->getModelName()]]);
                    throw new PDOException('Can not delete the requested record, May be connect with database is lost');
                }
                throw new ModelNotFoundException('requested record not found in the database');
            }
            throw new RuntimeException('specified id is empty or null');
        }catch(ModelNotFoundException $exp){
            return $this->message(400,'error',['name' => 'responses.model_not_found','values' => ['model' => $this->getModelName()]],5,$exp->getMessage());
        }catch(RuntimeException $exp){
            return $this->message(500,'error',['name' => 'responses.empty_request'],3,$exp->getMessage());
        }catch(Throwable $th){}
    }

    public function query()
    {
        return $this->model->query();
    }

    public function message($statusCode,$messageType, $messageKey,$priority = 1,$actualError = null, $extraContent = [])
    {
        $response = [
            'status' => $messageType,
            'statusBool' => $statusCode == 200 ? true : false,
            'message' => __("{$messageKey['name']}",array_key_exists('values',$messageKey) ? $messageKey['values'] : []),
            'messageKey' => $messageKey['name'],
            'messageReplacers' =>array_key_exists('values',$messageKey) ? $messageKey['values'] : [],
            'priority' => in_array($priority,$this->priorities) ? $priority : 1,
            'errorBool' => ($statusCode != 200 && $actualError != null) ? true : false,
            'error' => $actualError
        ];

        return response($response,$statusCode);
    }
}
