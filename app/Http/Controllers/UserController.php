<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Services\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct(
        protected UserService $service
    ){

    }

    public function registerUser(Request $request){
        # validating the user
        $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|email|unique:users,email',
            'phone' => 'required|numeric',
            'password' => 'required|min:6'
        ]);

        return $this->service->register($request);
    }

    public function loginUser(Request $request){
        # validating the user

        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        return $this->service->login($request);
    }
}
