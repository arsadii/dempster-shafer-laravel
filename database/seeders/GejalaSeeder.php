<?php

namespace Database\Seeders;

use App\Models\Gejala;
use Illuminate\Database\Seeder;

class GejalaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $gejala = [
        //     [
        //         'nama_gejala' => 'Menyerang tanaman muda vanili usia 3-4 tahun',
        //         'kode' => 'G1',
        //     ],
        //     [
        //         'nama_gejala' => ' Batang vanili mengeriput',
        //         'kode' => 'G2',
        //     ],
        //     [
        //         'nama_gejala' => 'Warna batang vanili berubah menjadi cokelat',
        //         'kode' => 'G3',
        //     ],
        //     [
        //         'nama_gejala' => 'Sekeliling batang vanili menghitam ',
        //         'kode' => 'G4',
        //     ],
        //     [
        //         'nama_gejala' => 'Terdapat bercak cokelat muda kekuningan pada ujung daun
        //         vanili',
        //         'kode' => 'G5',
        //     ],
        //     [
        //         'nama_gejala' => 'Terdapat bercak cokelat yang meluas ke semua bagian daun
        //         vanili ',
        //         'kode' => 'G6',
        //     ],
        //     [
        //         'nama_gejala' => ' Daun vanili mengering atau mati',
        //         'kode' => 'G7',
        //     ],
        //     [
        //         'nama_gejala' => 'Terdapat bercak cokelat tua pada buah vanili yang membesar',
        //         'kode' => 'G8',
        //     ],
        //     [
        //         'nama_gejala' => 'Warna buah vanili berubah menjadi
        //         hitam ',
        //         'kode' => 'G9',
        //     ],
        //     [
        //         'nama_gejala' => 'Buah vanili menjadi mengering atau mati',
        //         'kode' => 'G10',
        //     ],
        //     [
        //         'nama_gejala' => 'Pangkal batang vanili berair',
        //         'kode' => 'G11',
        //     ],
        //     [
        //         'nama_gejala' => 'Pangkal batang vanili berwarna cokelat tua kehitaman',
        //         'kode' => 'G12',
        //     ],
        //     [
        //         'nama_gejala' => 'Terdapat bulu miselium berwarna putih di pangkal batang
        //         vanili
        //         ',
        //         'kode' => 'G13',
        //     ],
        //     [
        //         'nama_gejala' => 'Terdapat bercak kecil berbetuk kepingan pada daun vanili',
        //         'kode' => 'G14',
        //     ],
        //     [
        //         'nama_gejala' => 'Bagian tengah bercak pada daun mengering atau berlubang',
        //         'kode' => 'G15',
        //     ],
        //     [
        //         'nama_gejala' => 'Bagian pinggir bercak pada daun terus melebar hingga
        //         diameter 2cm',
        //         'kode' => 'G16',
        //     ],

        // ];

        $gejala = [
            [
                'nama_gejala' => 'Pertumbuhan dan berat pada udang tidak stabil/lambat',
                'kode' => 'G1',
            ],
            [
                'nama_gejala' => 'Terhambatnya pembentukan karapas/cangkang udang',
                'kode' => 'G2',
            ],
            [
                'nama_gejala' => 'Berenang keatas permukaan air',
                'kode' => 'G3',
            ],
            [
                'nama_gejala' => 'Cephalothorax pada udang berwarna kuning dan membengkak',
                'kode' => 'G4',
            ],
            [
                'nama_gejala' => 'Penurunan nafsu makan',
                'kode' => 'G5',
            ],
            [
                'nama_gejala' => 'Ekor udang nampak kemerahan',
                'kode' => 'G6',
            ],
            [
                'nama_gejala' => 'Saluran pencernaan akan kosong',
                'kode' => 'G7',
            ],
            [
                'nama_gejala' => 'Kulit/cangkang udang menjadi lembek',
                'kode' => 'G8',
            ],
            [
                'nama_gejala' => 'Terjadi pergantian kulit/molting',
                'kode' => 'G9',
            ],
            [
                'nama_gejala' => 'Tubuh udang berwarna putih dan pucat',
                'kode' => 'G10',
            ],
            [
                'nama_gejala' => 'Punggung udang khususnya bagian pencernaan berwarna putih/berak putih',
                'kode' => 'G11',
            ],
            [
                'nama_gejala' => 'Udang tenggelam kedasar kolam',
                'kode' => 'G12',
            ],
            [
                'nama_gejala' => 'Saluran pencernaan berubah menjadi coklat',
                'kode' => 'G13',
            ],
            [
                'nama_gejala' => 'Perut pada udang menjadi kosong',
                'kode' => 'G14',
            ],
            [
                'nama_gejala' => 'Warna otot perut pada udang berubah menjadi pudar',
                'kode' => 'G15',
            ],
            [
                'nama_gejala' => 'Hepatopankreas akan mengecil dan berwarna pucat',
                'kode' => 'G16',
            ],
            [
                'nama_gejala' => 'Hepatopankreas timbul bintik hitam',
                'kode' => 'G17',
            ],
            [
                'nama_gejala' => 'Insang udang berwarna hitam',
                'kode' => 'G18',
            ],
            [
                'nama_gejala' => 'Udang mengalami kelusuan',
                'kode' => 'G19',
            ],
            [
                'nama_gejala' => 'Hepatopankreas berhenti berkembang',
                'kode' => 'G20',
            ],

        ];

        Gejala::insert($gejala);
    }
}
