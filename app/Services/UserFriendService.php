<?php

namespace App\Services;

use App\Repositories\UserFriendRepository;
use App\Http\Resources\UserFriendsResource;
use App\Models\User;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use RuntimeException;
use Throwable;

class UserFriendService extends BaseService{

    public function __construct(UserFriendRepository $repo)
    {
        $this->repo = $repo;
    }

    public function listAllFriends($userId, $relation = null)
    {
        try{
            if($userId){
                $friends = $this->repo->query()->where('user_id',$userId)->when($relation, function($query) use($relation){
                    return $query->where('relation',$relation);
                });

                return UserFriendsResource::collection($friends->get());
            }
            throw new ModelNotFoundException('specified user does not exist or user id is null');
        }catch(ModelNotFoundException $th){
            return $this->repo->message(400,'error',['name' => 'responses.model_not_found','values' => ['model' => $this->repo->getModelName()]],5,$th->getMessage());
        }
    }

    public function listFriend($userId, $friendId)
    {
        try{
            if($userId){
                $friend = $this->repo->query()->where('user_id',$userId)->where('friend_id',$friendId);
                return UserFriendsResource::collection($friend->get());
            }
            throw new RuntimeException('specified user does not exist or user id is null');
        }catch(Throwable $th){
            return $this->repo->message(400,'error',['name' => 'responses.model_not_found','values' => ['model' => $this->repo->getModelName()]],5,$th->getMessage());
        }
    }

    public function newFriend($validatedRequest)
    {
        $response = $this->store($validatedRequest);
        if($response->status() == 200){
            return $this->repo->message(200,'success',['name' => 'responses.friend_added','values' => ['model' => $this->repo->getModelName()]]);
        }
        return $response;
    }

    public function deleteFriend($userId, $friendId)
    {
        try{
            if($userId && $friendId){
                $isMultiple = is_array($friendId) ? true : false;
                $userFriendId = $this->repo->query()->where('user_id',$userId)->{$isMultiple ? 'whereIn' : 'where'}('friend_id',$friendId)->select('id')->get();
                if($userFriendId){
                    if($this->delete($userFriendId)){
                        return $this->repo->message(200,'success',['name' => 'responses.friends_removed','values' => ['model' => $this->repo->getModelName()]]);
                    }
                }
                throw new Exception('Can not find the records to delete');
            }
            throw new RuntimeException('Request does not have proper details');
        } catch(RuntimeException $th){
            return $this->repo->message(400,'warning',['name' => 'responses.broken_request','values' => ['model' => $this->repo->getModelName()]],5,$th->getMessage());
        } catch(Throwable $th){
            return $this->repo->message(400,'warning',['name' => 'responses.unknown_error','values' => ['model' => $this->repo->getModelName()]],5,$th->getMessage());
        }
    }
}
