<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function index()
    {
        return inertia('Register');
    }

    public function daftarakun(Request $request)
    {
        $request->validate([
            'fullname' => ['required', 'min:5'],
            'username' => ['unique:users,username'],
            'email' => ['email'],
            'password' => ['required']
        ]);

        $user = User::create([
            'name' =>$request->fullname,
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request ->password),
        ]);

        $user->assignRole('user');

        return redirect('/login')->with([
            'title' => 'Berhasil',
            'type' => 'success',
            'message' => 'Pendaftaran berhasil. Silahkan Masuk!'
        ]);
    }
}
