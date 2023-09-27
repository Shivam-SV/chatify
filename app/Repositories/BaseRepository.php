<?php

namespace App\Repositories;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

abstract class BaseRepository{

    protected $model;

    public function getModelName() : string {
        $explodedClassName = explode('/', $this->model);
        return end($explodedClassName);
    }

    public function store(array|Request $prepared) : Response{
        try{
            if($this->model->create($prepared)){
                return $this->response(__('response.insert', ['model' => $this->getModelName()]), 'success');
            }
        }catch(Exception $th){
            return $this->response(message: __('error.error'),type: 'error',statusCode: 500,errorMsg: $th->getMessage());
        }
    }

    public function update(array|Request $prepared,int $id) : Response{
        try{
            if($this->model->find($id)->update($prepared)){
                return $this->response(__('response.update', ['model' => $this->getModelName()]), 'success');
            }
        }catch(Exception $th){
            return $this->response(message: __('error.error'),type: 'error',statusCode: 500,errorMsg: $th->getMessage());
        }
    }

    public function delete(int $id) : Response{
        try{
            if($this->model->find($id)->delete){
                return $this->response(__('response.delete', ['model' => $this->getModelName()]), 'success');
            }
        }catch(Exception $th){
            return $this->response(message: __('error.error'),type: 'error',statusCode: 500,errorMsg: $th->getMessage());
        }
    }

    public function response(string $message, string $type, array $content = [], int $statusCode = 200, string|null $errorMsg = null) : Response{
        return response(array_merge([
            'message' => $message,
            'type' => $type
        ], !empty($content) ? $content : [], $errorMsg ? ['error' => $errorMsg] : []), $statusCode);
    }
}
