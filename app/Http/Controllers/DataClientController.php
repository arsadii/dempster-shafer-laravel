<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;

class DataClientController extends Controller
{
    public function index()
    {
        return inertia('DataClient', [
            'dataclient' => Client::get()
        ]);
    }

    public function datadiri()
    {
        return inertia('User/DataDiri');
    }
}
