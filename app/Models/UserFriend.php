<?php

namespace App\Models;

use Illuminate\Validation\Rule;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserFriend extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'friend_id',
        'relation'
    ];

    public static $UserRelations = ['stranger','friend','best friend','family'];

    static public function rules()
    {
        return [
            'user_id' => 'required|integer',
            'friend_id' => 'required|integer',
            'relation' => ['nullable',Rule::in(self::$UserRelations)]
        ];
    }
}
