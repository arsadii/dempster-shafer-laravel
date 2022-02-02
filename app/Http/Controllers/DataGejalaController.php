<?php

namespace App\Http\Controllers;

use App\Models\Gejala;
use Illuminate\Http\Request;

class DataGejalaController extends Controller
{
    public function index()
    {
        return inertia('DataGejala', [
            'datagejala'=> Gejala::paginate(10) 
        ]);
    }

    public function insert(Request $request)
    {
        $request->validate([
            'kode' => ['required'],
            'nama_gejala' => ['required'],
        ]);
        

        Gejala::create([
            'kode' => $request->kode,
            'nama_gejala' => $request->nama_gejala,
            
        ]);

        return back()->with([
            'title' => 'Berhasil',
            'type' => 'success',
            'message' => 'Data berhasil tersimpan!'
        ]);
    }


    public function hapus(Request $request)
    {
        Gejala::where('id', $request->id)->delete();

        return back()-> with([
            'title'=> 'Berhasil',
            'type'=>'success',
            'message'=> 'Data Berhasil Dihapus!'
        ]);
    }

    public function edit(Request $request)
    {
        Gejala::where('id', $request->id)->update([
            'kode' => $request->kode,
            'nama_gejala' => $request->nama_gejala,
            
        ]);

        return back()->with([
            'title' =>'Berhasil',
            'type' => 'success',
            'message' => 'Data Berhasil Diubah!'

        ]);
    }
        public function cari ($cari){
            $gejala = Gejala::where('kode', 'LIKE', '%'. $cari. '%')->orWhere('nama_gejala','LIKE','%'. $cari . '%')->get();
            return $gejala; 
        }
    } 