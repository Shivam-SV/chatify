<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserFriendController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

/**
 * Routes only for authentication purpose and registeration of user purpose
 */
Route::group(['module' => 'api:authentication','prefix' => 'v1','as' => 'api.v1.'],function(){
    Route::post('/register',[UserController::class,'registerNewUser']);
    Route::post('/login',[UserController::class,'login']);
    Route::post('/auth/{id}/generate-token',[UserController::class, 'generateToken']);
});

Route::group(['module' => 'api','prefix' => 'v1','as' => 'api.v1.', 'middleware' => 'auth:sanctum'],function(){
    Route::get('/user/{id}/profile',[UserController::class, 'profile']);
    Route::get('user/{id}/myfriends', [UserFriendController::class, 'myFriends']);
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
