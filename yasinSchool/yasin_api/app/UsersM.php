<?php

namespace App;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class UsersM extends Model
{
	public static function get_all(){
		return DB::table('users')->select('id','nis', 'name' ,'jk', 'agama', 'alamat', 'notelp',  'jurusan',  'foto', 'berkas', 'status', 'alasan_tolak', 'username', 'password', 'jwt')->get();

	}
	public static function by_id($id){
		return DB::table('users')->select('id','nis', 'name' ,'jk', 'agama', 'alamat', 'notelp',  'jurusan',  'foto', 'berkas', 'status', 'alasan_tolak', 'username', 'password', 'jwt')->where('id', '=', $id)->first();
		
	}
}