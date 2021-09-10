<?php

namespace App;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class InformasiM extends Model
{
	public static function get_all(){
		return DB::table('informasi')->select('id','judul','deksripsi', 'foto')->get();

	}
	public static function by_id($id){
		return DB::table('informasi')->select('id','judul','deksripsi', 'foto')->where('id', '=', $id)->first();
		
	}
}