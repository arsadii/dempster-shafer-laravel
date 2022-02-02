<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function index()
    {
        return inertia('Login');
    }

    public function tes()
    {
        // return 'ini adalah data';
        return User::all();
    }

    public function ceklogin(Request $request)
    {
        $user = User::where('username', $request->username)->first();
        
        if(!$user){
            throw ValidationException::withMessages([
                'failed' => 'Username tidak terdaftar!'
            ]);
        }

        if (Auth::attempt($request->only('username','password'))){
            session()->regenerate();
            if ($user->hasRole('admin')){
                return redirect('/dashboard');
            } else{
                return redirect('/userdashboard');
            }
            
        };
    
        throw ValidationException::withMessages([
            'failed'=> 'Password Salah!'
        ]);
    }

    public function logout(){
       Auth::logout();
       return redirect('/login') ;
    }
}
