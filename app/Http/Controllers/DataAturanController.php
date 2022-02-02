<?php

namespace App\Http\Controllers;

use App\Models\Aturan;
use App\Models\Gejala;
use App\Models\Penyakit;
use Illuminate\Http\Request;

class DataAturanController extends Controller
{
    public function index()
    {
        return inertia('DataAturan', [
            'dataaturan' => Aturan::with(['penyakit', 'gejala'])->paginate(10),
            'datapenyakit' => Penyakit::orderBy('nama_penyakit', 'ASC')->get(),
            'datagejala' => Gejala::orderBy('nama_gejala', 'ASC')->get(),
        ]);
    }

    public function insert(Request $request){
        $request->validate([
            'id_penyakit' => ['required'],
            'id_gejala' => ['required'],
            'bobot' => ['required']
        ]); 

        Aturan::create([
            'id_penyakit' => $request->id_penyakit,
            'id_gejala' => $request->id_gejala,
            'bobot' => $request->bobot,
        ]);

        return back()-> with([
            'title'=> 'Berhasil',
            'type'=>'success',
            'message'=> 'Data Berhasil Disimpan!'
        ]);
    }

    public function hapus(Request $request)
    {
        Aturan::where('id', $request->id)->delete();

        return back()-> with([
            'title'=> 'Berhasil',
            'type'=>'success',
            'message'=> 'Data Berhasil Dihapus!'
        ]);
    }
    public function cari ($cari){
        $aturan = Aturan::with(['gejala', 'penyakit'])->where('nama_penyakit', 'LIKE', '%'. $cari. '%')->orWhere('nama_gejala','LIKE','%'. $cari . '%')->orWhere('bobot','LIKE','%'. $cari . '%')->get();
        return $aturan;
        // $aturan = Aturan::with(['gejala', function ($query){
        //     return $query->where('nama_gejala','%a%');
        // }])->get();
        // return $aturan;
    }
}