<?php

namespace App\Http\Controllers;

use App\Models\Penyakit;
use Illuminate\Http\Request;

class DataPenyakitController extends Controller
{
    public function index()
    {
        return inertia('DataPenyakit', [
            'datapenyakit' => Penyakit::paginate(10)
        ]);
    }

    public function insert(Request $request)
    {
        $request->validate([
            'kode' => ['required'],
            'nama_penyakit' => ['required'],
            'keterangan' => ['required'],
            'saran' => ['required'],
        ]);

        if($request->file('gambar')[0]) {
            Penyakit::create([
                'nama_penyakit' => $request->nama_penyakit,
                'keterangan' => $request->keterangan,
                'saran' => $request->saran,
                'kode' => $request->kode,
                'gambar' => $request->file('gambar')[0]->store('gambar')
            ]);
        } else {
            Penyakit::create([
                'nama_penyakit' => $request->nama_penyakit,
                'keterangan' => $request->keterangan,
                'saran' => $request->saran,
                'kode' => $request->kode,
            ]);
        }

        return back()->with([
            'title' => 'Berhasil',
            'type' => 'success',
            'message' => 'Data berhasil tersimpan!'
        ]);
    }
    public function hapus(Request $request)
    {
        Penyakit::where('id', $request->id)->delete();

        return back()->with([
            'title' => 'Berhasil',
            'type' => 'success',
            'message' => 'Data Berhasil Dihapus!'
        ]);
    }

    public function edit(Request $request)
    {
        if($request->file('gambar')[0]){
            Penyakit::where('id', $request->id)->update([
                'kode' => $request->kode,
                'nama_penyakit' => $request->nama_penyakit,
                'keterangan' => $request->keterangan,
                'saran' => $request->saran,
                'gambar' => $request->file('gambar')[0]->store('gambar')
            ]);
        } else {
            Penyakit::where('id', $request->id)->update([
                'kode' => $request->kode,
                'nama_penyakit' => $request->nama_penyakit,
                'keterangan' => $request->keterangan,
                'saran' => $request->saran,
            ]);
        }
        
        return back()->with([
            'title' =>'Berhasil',
            'type' => 'success',
            'message' => 'Data Berhasil Diubah!'

        ]);
    }

    public function cari ($cari){
        $penyakit = Penyakit::where('kode', 'LIKE', '%'. $cari. '%')->orWhere('nama_penyakit','LIKE','%'. $cari . '%')->get();
        return $penyakit; 
    }
} 
