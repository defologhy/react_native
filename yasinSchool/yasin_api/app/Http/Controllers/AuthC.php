<?php

namespace App\Http\Controllers;

use App\AuthM;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AuthC extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function get_token(){

        $data = AuthM::get_token();

        return response()->json($data, 200);

    }
    public function login(Request $request){

        $data = AuthM::login($request->input('username'));
        if($data == 'not exist'){

            return response()->json(['message' => 'failed', 'data' => null], 409);

        }else{

            if(!Hash::check($request->input('password'), $data->password)) {

                return response()->json(['message' => 'failed', 'data' => null], 409);

            }else{

                return response()->json(['message' => 'success', 'data' => $data], 200);

            }

        }
        
    }
}