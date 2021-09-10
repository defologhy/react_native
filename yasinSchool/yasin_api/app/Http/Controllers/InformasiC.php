<?php

namespace App\Http\Controllers;

use App\InformasiM;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InformasiC extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function getall(){
        $data = InformasiM::get_all();

        return response()->json($data, 200);
    }
    public function getbyid($id){
        $data = InformasiM::by_id($id);

        return response()->json($data, 200);
    }
    public function save(Request $request){

        try{

            DB::table('informasi')->insert([
                'judul' => $request->input('judul'),
                'deksripsi' => $request->input('deksripsi')
            ]);

            return response()->json(['message' => 'success'], 201);

        } catch (\Exception $e) {

           return response()->json(['message' => 'failed'], 409);

        }

        
    }
    public function update(Request $request, $id){

        try{

            DB::table('informasi')
            ->where('id', $id)
            ->update(
                [
                    'judul' => $request->input('judul'),
                    'deksripsi' => $request->input('deksripsi')
                ]
            );

            return response()->json(['message' => 'success'], 201);

        } catch (\Exception $e) {

           return response()->json(['message' => 'failed'], 409);

        }

    }
    public function delete($id){

        try{

            DB::table('informasi')->where('id', '=', $id)->delete();

             return response()->json(['message' => 'success'], 201);

        } catch (\Exception $e) {

           return response()->json(['message' => 'failed'], 409);

        }
    }
}