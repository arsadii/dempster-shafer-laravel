<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aturan extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function penyakit() {
        return $this->belongsTo('App\Models\Penyakit', 'id_penyakit');
    }

    public function gejala() {
        return $this->belongsTo('App\Models\Gejala', 'id_gejala');
    }
}
