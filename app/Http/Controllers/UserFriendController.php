<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\UserFriendService;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserFriendRequest;

class UserFriendController extends Controller
{

    protected $service;

    public function __construct(UserFriendService $service)
    {
        $this->service = $service;
    }

    /**
     * List out all the friends of the user
     *
     * @param int $request->userId
     * @param string|null $request->relation
     * @param int|null $request->friendId
     *
     * @return \App\Http\Resources\UserFriendsResource
     */
    public function myFriends(Request $request, $id)
    {
        $userId = $id ? $id : ($request->userId ? $request->userId : (auth()->check() ? auth()->id() : null));
        return !$request->friendId ? $this->service->listAllFriends($userId,$request->relation) : $this->service->listFriend($userId, $request->friendId);
    }

    /**
     *  Adds a new friend to the friend list
     */
    public function addFriend(UserFriendRequest $request)
    {
        return $this->service->newFriend($request);
    }

    /**
     * Removes the listed friends
     *
     * @param int $request->userId
     * @param array|int $request->friendId
     *
     * @return \Illuminate\Http\Response
     */
    public function removeFriend(REquest $request)
    {
        $userId = $request->userId ? $request->userId : (auth()->check() ? auth()->id() : null);
        return $this->service->deleteFriend($userId, $request->friendId);
    }
}
