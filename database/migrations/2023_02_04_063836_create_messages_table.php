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
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('sender_id');
            $table->unsignedBigInteger('receiver_id');
            $table->longText('message');
            $table->unsignedBigInteger('reply_to_id')->nullable();
            $table->boolean('is_deleted')->default(0);
            $table->enum('message_status',['sending','sent','received','seen']);
            $table->timestamps();
            $table->foreign('sender_id')->on('users')->references('id');
            $table->foreign('receiver_id')->on('users')->references('id');
            $table->foreign('reply_to_id')->on('messages')->references('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('messages');
    }
};
