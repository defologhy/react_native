<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnJwtUsersAdmin extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('jwt')->nullable()->after('password');
        });
        Schema::table('admin', function (Blueprint $table) {
            $table->string('jwt')->nullable()->after('foto');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('jwt');
        });
        Schema::table('admin', function (Blueprint $table) {
            $table->dropColumn('jwt');
        });
    }
}
