<?php

use App\Http\Controllers\DataAturanController;
use App\Http\Controllers\DataClientController;
use App\Http\Controllers\DataGejalaController;
use App\Http\Controllers\DataPenyakitController;
use App\Http\Controllers\DempsterController;
use App\Http\Controllers\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/tesuser', [LoginController::class, 'tes']);
Route::get('/caripenyakit/{cari}', [DataPenyakitController::class, 'cari']);
Route::get('/carigejala/{cari}', [DataGejalaController::class, 'cari']);
Route::get('/cariaturan/{cari}', [DataAturanController::class, 'cari']);
Route::get('/cariclient/{cari}', [DataClientController::class, 'cari']);

Route::post('/tes', [DempsterController::class, 'dempster']);
