<?php

namespace App\Http\Controllers;

use App\UsersM;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersC extends Controller
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
        $data = UsersM::get_all();

        return response()->json($data, 200);
    }
    public function getbyid($id){
        $data = UsersM::by_id($id);

        return response()->json($data, 200);
    }
    public function save(Request $request){

        try{
            // json_decode(file_get_contents('php://input'), true);

            // $str = json_decode(file_get_contents('php://input'), true);
            // $ext = $str['foto']['file']['type'];
            // $e = explode("/",$ext);
            // $ext = $e[1];
            // $filename = md5(time()).'.'.$ext;
            // $path = '../public/assets/pendaftar/'.$filename;
            // file_put_contents($path,$str['foto']['file']['fileName']);

            $nama_foto = $_FILES['foto']['name'];
            $get_ekstensi_foto = substr(strrchr($nama_foto, "."), 1);
            $get_onlynamefoto = base64_encode(strstr($nama_foto, '.', true));
            $get_namafoto = $get_onlynamefoto.".".$get_ekstensi_foto;
            $x_foto = explode('.', $nama_foto);
            $ekstensi_foto = strtolower(end($x_foto));
            $ukuran_foto = $_FILES['foto']['size'];
            $file_tmp_foto = $_FILES['foto']['tmp_name'];

            $nama_berkas = $_FILES['berkas']['name'];
            $get_ekstensi_berkas = substr(strrchr($nama_berkas, "."), 1);
            $get_onlynameberkas = base64_encode(strstr($nama_berkas, '.', true));
            $get_namaberkas = $get_onlynameberkas.".".$get_ekstensi_berkas;
            $x_berkas = explode('.', $nama_berkas);
            $ekstensi_berkas = strtolower(end($x_berkas));
            $ukuran_berkas = $_FILES['berkas']['size'];
            $file_tmp_berkas = $_FILES['berkas']['tmp_name'];

            $dirUpload = "../public/assets/pendaftar/";
            $dirUploadBerkas = "../public/assets/pendaftar/berkas/";

            move_uploaded_file($file_tmp_foto, $dirUpload.$get_onlynamefoto.".".$get_ekstensi_foto);
            move_uploaded_file($file_tmp_berkas, $dirUploadBerkas.$get_onlynameberkas.".".$get_ekstensi_berkas);
         
            DB::table('users')->insert([
                'nis' => $request->input('nis'),
                'name' => $request->input('name'),
                'jk' => $request->input('jk'),
                'agama' => $request->input('agama'),
                'alamat' => $request->input('alamat'),
                'notelp' => $request->input('notelp'),
                'jurusan' => $request->input('jurusan'),
                'foto' => $get_onlynamefoto.".".$get_ekstensi_foto,
                'berkas' => $get_onlynameberkas.".".$get_ekstensi_berkas,
                'status' => 'Proses',
                'alasan_tolak' => '',
                'username' => $request->input('username'),
                'password' => Hash::make($request->input('password')),
                'jwt' => NULL
            ]);

            return response()->json(['message' => 'success'], 201);

        } catch (\Exception $e) {

           return response()->json(['message' => 'failed '.$e], 409);

        }

        
    }
    public function update(Request $request, $id){

        try{

            DB::table('users')
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

            DB::table('users')->where('id', '=', $id)->delete();

             return response()->json(['message' => 'success'], 201);

        } catch (\Exception $e) {

           return response()->json(['message' => 'failed'], 409);

        }
    }
}