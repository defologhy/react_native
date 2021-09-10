<?php

namespace App;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class AuthM extends Model
{
	public static function get_token(){
		return DB::table('token')->select('value')->first();
		
	}
	public static function login($username){

		$adminCount = DB::table('admin')->where('username', '=', $username)->count();
		$usersCount = DB::table('users')->where('username', '=', $username)->count();

		if ($adminCount > 0) {

			$adminData = DB::table('admin')->select('id', 'nik', 'name', 'jk', 'agama', 'alamat', 'notelp', 'username', 'password')->where('username', '=', $username)->first();

			return $adminData;

		}else if($usersCount > 0){

			$usersData = DB::table('users')->select('id', 'nis', 'name', 'jk', 'agama', 'alamat', 'notelp', 'foto', 'berkas', 'status', 'alasan_tolak', 'username', 'password')->where('username', '=', $username)->first();

			return $usersData;

		}else{
			
			return 'not exist';
			
		}
		
	}
}