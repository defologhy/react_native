<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('admin')->truncate();
        DB::table('token')->truncate();
        DB::table('users')->truncate();

        $pool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    	DB::table('admin')->insert([
    		'nik'=>'16217261',
            'name'=>'Administrator',
    		'jk'=>'Laki-Laki',
    		'agama'=>'Islam',
    		'alamat'=>'Sukabumi, Indonesia',
    		'notelp'=>'0815261251',
            'username' => 'admin',
            'password' => Hash::make('admin'),
            'foto'=>'person.jpg'
        ]);

        DB::table('token')->insert([
            'value'=>substr(str_shuffle(str_repeat($pool, 5)), 0, 64)
        ]);

        DB::table('users')->insert([
            'nis'=>'123345',
            'name'=>'Rostamela',
            'jk'=>'Perempuan',
            'agama'=>'Islam',
            'alamat'=>'Sukabumi, Indonesia',
            'notelp'=>'0815261251',
            'jurusan'=>'Fiqih',
            'foto'=>'person.jpg',
            'berkas'=>'person.jpg',
            'status'=>'Proses',
            'alasan_tolak'=>'',
            'username' => 'users',
            'password' => Hash::make('users')
        ]);
    }
}
