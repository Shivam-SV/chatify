<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('nick_name')->nullable();
            $table->string('user_name')->nullable();
            $table->enum('profile_type',['image','blob'])->default('blob');
            $table->string('profile_color')->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->unsignedInteger('phone')->nullable();
            $table->date('date_of_birth')->nullable();
            $table->longText('bio')->nullable();
            $table->string('password');
            $table->string('password_hint');
            $table->boolean('use_nick_name_as_primary')->default(0);
            $table->boolean('status')->nullable();
            $table->timestamp('status_changed_at')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
