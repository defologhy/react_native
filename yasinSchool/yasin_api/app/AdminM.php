<?php

namespace App;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class AdminM extends Model
{
	public static function get_all(){
		return DB::table('admin')->select('id','nik','jk', 'agama', 'alamat', 'notelp', 'username', 'password', 'jwt')->get();

	}
	public static function by_id($id){
		return DB::table('admin')->select('id','nik','jk', 'agama', 'alamat', 'notelp', 'username', 'password', 'jwt')->where('id', '=', $id)->first();
		
	}
}