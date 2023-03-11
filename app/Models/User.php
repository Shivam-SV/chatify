<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Validation\Rule;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'nick_name',
        'user_name',
        'profile_type',
        'profile_color',
        'email_verified_at',
        'email',
        'phone',
        'date_of_birth',
        'password',
        'password_hint',
        'bio',
        'use_nick_name_as_primary',
        'status',
        'status_changed_at'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Possible type of profile
     * image = it should be an image
     * blob = show an blob containing first letter with background of 'profile_color'
     *
     * @var array<string>
     */
    public $profileTypes = ['image','blob'];

    public static function Rules($request){
        if(request()->isMethod('PUT')){
            return [
                'first_name' => 'alpha|regex:/[A-Za-z]+/g',
                'last_name' => 'alpha|regex:/[A-Za-z]+/g',
                'nick_name' => 'nullable|alpha|regex:/[A-Za-z]+/g',
                'user_name' => 'alpha|regex:/[A-Za-z_-.,$%^&()=+|]+/',
                'profile_type' => 'nullable',
                'profile_color' => 'nullable|string',
                'email_verified_at' => 'nullable|date',
                'email' => ['email',Rule::unique('users','email')->ignore($request->user_id)],
                'phone' => ['nullable','numeric',Rule::unique('users','phone')->ignore($request->user_id)],
                'date_of_birth' => ['nullable','date'],
                'password' => ['string','confirmed'],
                'bio' => ['nullable','string'],
                'use_nick_name_as_primary' => ['nullable','boolean'],
            ];
        }else if(request()->isMethod('POST')){
            return [
                'first_name' => ['required','alpha','regex:/[A-Za-z]+/'],
                'last_name' => ['required','alpha','regex:/[A-Za-z]+/'],
                'nick_name' => ['nullable','alpha','regex:/[A-Za-z]+/'],
                'user_name' => ['nullable','alpha','regex:/[A-Za-z_-.,$%^&()=+|]+/'],
                'profile_type' => 'nullable',
                'profile_color' => 'nullable|string',
                'email_verified_at' => 'nullable|date',
                'email' => ['required','email',Rule::unique('users','email')->ignore($request->user_id)],
                'phone' => ['nullable','numeric',Rule::unique('users','phone')->ignore($request->user_id)],
                'date_of_birth' => ['nullable','date'],
                'password' => ['required','string','confirmed'],
                'bio' => ['nullable','string'],
                'use_nick_name_as_primary' => ['nullable','boolean'],
            ];
        }
    }

    static public function AuthenticationRules()
    {
        return [
            'user_name' => 'required|string|regex:/[A-za-z0-9.-_!@  ]+/g',
            'password' => 'required|string'
        ];
    }

    public function friends()
    {
        return $this->hasManyThrough(User::class,UserFriend::class,'user_id','id');
    }
}
