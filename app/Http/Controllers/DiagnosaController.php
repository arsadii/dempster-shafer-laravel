<?php

namespace App\Http\Controllers;

use App\Models\Gejala;
use Illuminate\Http\Request;

class DiagnosaController extends Controller
{
    public function index()
    {
        return inertia('Diagnosa', [
            'datagejala'=> Gejala::get()
        ]);
    }
}