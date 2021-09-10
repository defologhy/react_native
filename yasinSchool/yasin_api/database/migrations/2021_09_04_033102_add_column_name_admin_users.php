<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnNameAdminUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('name')->nullable()->after('nis');
        });
        Schema::table('admin', function (Blueprint $table) {
            $table->string('name')->nullable()->after('nik');
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
            $table->dropColumn('name');
        });
        Schema::table('admin', function (Blueprint $table) {
            $table->dropColumn('name');
        });
    }
}
