<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserProfilController extends Controller
{
    public function index()
    {
        return inertia('User/Profil');
    }

    public function edit(Request $request)
    {
        $request->validate([
            'name' => ['required'],
            'username' => ['required'],
            'email' => ['required'],
        ]);

        if($request->password){
            if($request->file('gambar')) {
                User::where('id', $request->id)->update([
                    'name' => $request->name,
                    'username' => $request->username,
                    'email' => $request->email,
                    'password' => Hash::make($request->password),
                    
                ]);
            } else {
                User::where('id', $request->id)->update([
                    'name' => $request->name,
                    'username' => $request->username,
                    'email' => $request->email,
                    'password' => Hash::make($request->password),
                ]);
            }
            
        } else if (!$request->password) {
            if($request->file('gambar')) {
                User::where('id', $request->id)->update([
                    'name' => $request->name,
                    'username' => $request->username,
                    'email' => $request->email,
                    
                ]);
            } else {
                User::where('id', $request->id)->update([
                    'name' => $request->name,
                    'username' => $request->username,
                    'email' => $request->email,
                ]);
            }
        }
       

        return back()->with([
            'title' =>'Berhasil',
            'type' => 'success',
            'message' => 'Data Berhasil Diubah!'

        ]);
    }
}
