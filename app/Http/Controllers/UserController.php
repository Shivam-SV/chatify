<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\UserService;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserLoginRequest;
use App\Http\Requests\RegisterUserRequest;

class UserController extends Controller
{
    /**
     * Holds an instance of UserService via dependency injection
     *
     * @var \App\Services\UserService
     */
    protected $service;

    /**
     * Basic Constructor of the controller with it dependencies injected on it
     *
     */
    public function __construct(UserService $service)
    {
        $this->service = $service;
    }

    /**
     * Register a new User
     *
     * @param \App\Http\Requests\RegisterUserRequest $request
     *
     * @return \Illuminate\Http\Response
     */
    public function registerNewUser(RegisterUserRequest $request)
    {
        return $this->service->register($request);
    }

    public function login(UserLoginRequest $request)
    {
        return $this->service->loginUser($request);
    }

    public function logout()
    {
        return $this->service->logoutUser();
    }

    public function profile(Request $request, $id)
    {
        $userId = $id ? $id : ($request->userId ? $request->userId : (auth()->check() ? auth()->id() : null));
        return $this->service->UserDetails($userId);
    }

    public function generateToken($id, Request $request)
    {
        return $this->service->generateApiToken($id);
    }

    public function findFrined(Request $request)
    {
        $keyword = $request->keyword;
        $userId = $request->userId;
        return $this->service->findUserByKeyword($keyword, $userId);
    }
}
