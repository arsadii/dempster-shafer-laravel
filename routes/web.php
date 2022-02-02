<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DataAturanController;
use App\Http\Controllers\DataClientController;
use App\Http\Controllers\DataGejalaController;
use App\Http\Controllers\DataPenyakitController;
use App\Http\Controllers\DempsterController;
use App\Http\Controllers\DiagnosaController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\User\UserDashboardController;
use App\Http\Controllers\User\UserProfilController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index']);

Route::get('/login', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'ceklogin']);

Route::get('/Register', [RegisterController::class, 'index']);
Route::post('/Register', [RegisterController::class, 'daftarakun']);

Route::get('datadiri', [DataClientController::class, 'datadiri']);

Route::get('/hasil', function () {
    return Inertia::render('HasilDiagnosa');
});

Route::middleware('auth')->group(function () {
    Route::middleware(['role:admin'])->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index']);

        Route::get('/datapenyakit', [DataPenyakitController::class, 'index']);
        Route::post('/insertpenyakit', [DataPenyakitController::class, 'insert']);
        Route::post('/editpenyakit', [DataPenyakitController::class, 'edit']);
        Route::post('hapuspenyakit', [DataPenyakitController::class, 'hapus']);

        Route::get('/datagejala', [DataGejalaController::class, 'index']);
        Route::post('insertgejala', [DataGejalaController::class, 'insert']);
        Route::post('editgejala', [DataGejalaController::class, 'edit']);
        Route::post('hapusgejala', [DataGejalaController::class, 'hapus']);

        Route::get('/dataaturan', [DataAturanController::class, 'index']);
        Route::post('insertaturan', [DataAturanController::class, 'insert']);
        Route::post('editaturan', [DataAturanController::class, 'edit']);
        Route::post('hapusaturan', [DataAturanController::class, 'hapus']);

        Route::get('/dataclient', [DataClientController::class, 'index']);
        Route::post('/insertclient', [DataClientController::class, 'insert']);
        Route::post('/editclient', [DataClientController::class, ' edit']);
        Route::post('/hapusclient', [DataClientController::class, 'hapus']);

        Route::get('/admin', [AdminController::class, 'index']);
        Route::post('/editadmin', [AdminController::class, 'edit']);
        Route::post('insertadmin', [AdminController::class, 'insert']);
        Route::post('hapusadmin', [AdminController::class, 'hapus']);
    });
    Route::middleware(['role:user'])->group(function () {
        Route::get('/userdashboard', [UserDashboardController::class, 'index']);
        Route::get('/diagnosa', [DiagnosaController::class, 'index']);
        Route::post('/diagnosa', [DempsterController::class, 'diagnosa']);
        Route::get('/profil', [UserProfilController::class, 'index']);
        Route::post('/editprofil', [UserProfilController::class, 'edit']);
    });

    Route::post('/logout', [LoginController::class, 'logout']);
});
