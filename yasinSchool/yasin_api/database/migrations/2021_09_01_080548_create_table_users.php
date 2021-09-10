<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nis');
            $table->string('jk');
            $table->string('agama');
            $table->string('alamat');
            $table->string('notelp');
            $table->string('jurusan');
            $table->string('foto');
            $table->string('berkas');
            $table->string('status');
            $table->string('alasan_tolak');
            $table->string('username');
            $table->string('password');
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
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
}
