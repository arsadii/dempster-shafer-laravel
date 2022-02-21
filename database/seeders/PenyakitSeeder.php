<?php

namespace Database\Seeders;

use App\Models\Penyakit;
use Illuminate\Database\Seeder;

class PenyakitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $penyakit = [
        //     [
        //         'nama_penyakit' => 'Busuk Batang',
        //         'keterangan' => '',
        //         'kode' => 'P1'
        //     ],
        //     [
        //         'nama_penyakit' => 'Antraknosa',
        //         'keterangan' => 'jamur',
        //         'kode' => 'P2'
        //     ],
        //     [
        //         'nama_penyakit' => 'Bercak Cokelat Pada Buah',
        //         'keterangan' => 'jamur',
        //         'kode' => 'P3'
        //     ],
        //     [

        //         'nama_penyakit' => 'Busuk Pangkal Batang',
        //         'keterangan' => 'jamur',
        //         'kode' => 'P4'
        //     ],
        //     [

        //         'nama_penyakit' => 'Karat Merah',
        //         'keterangan' => 'jamur',
        //         'kode' => 'P5'
        //     ],

        // ];

        $penyakit = [
            [

                'nama_penyakit' => 'IHHNV',
                'keterangan' => 'Pada udang yang usianya masih muda cenderung dapat terjangki runt-deformity ayndrome yang sering ditandai dengan tidak stabilnya pertumbuhan pada udang, terhambatnya pembentukan kerapas pada udang, dan udang akan berenang keatas permukaan air tenang lalu kemudian berputar-putar dan tenggelam ke dasar kolam. Penyakit ini menyerang pada udang tetapi tidak sampai menimbulkan kematian.',
                'saran' => '-Pemilihan  benur yang bebas dari IHHNV atau berstandar SPV(Specific Pathogen Free) dan
                -Menjaga kualitas air kolam selama proses pembudidayaan.',
                'kode' => 'P1'
            ],
            [
                'nama_penyakit' => 'Yellow Head Virus',
                'keterangan' => 'Ciri dari penyakit ini adalah cephalothorax yang berwarna kekuningan dan membengkak, ekor udang yang berawarna kemerahan dan penurunan nafsu makan.',
                'saran' => '-Memantau PH air agar tetap kondisi optimal sehingga udang tidak mengalami stress.
                -Pemilihan benur udang yang terhindar dari virus.
                -Apabila udang telah terjangkit penyakit ini maka kolam harus diberikan klorin 30 ppm untuk membunuh carier potensial atau pembawa virus penyakit.',
                'kode' => 'P2',
            ],
            [
                'nama_penyakit' => 'TSV',
                'keterangan' => 'Jenis udang yang sering terjangkit virus ini adalah udang muda atau udang 0.15-5g/1-45 hari. Ciri-ciri udang yang terinfeksi pada bagian kipas ekor yang berawarna kemerahan, saluran pencernaannya akan kosong serta kulit/cangkang pada udang juga akan menjadi lembek dan mati saat terjadi pergantian kulit atau yang dikenal dengan nama molting.',
                'saran' => '-Pemilihan benur udang yang SPF(Specific Pathogen Free)
                -Menjaga kualitas air pada kolam budidaya
                -Menyediakan pakan alami dan berkualitas dan
                - Melakukan panen tepat waktu guna menghindari kematian massal atau sering disebut mortalitas.',
                'kode' => 'P3',
            ],
            [
                'nama_penyakit' => 'Infectious Myonecrosis Virus',
                'keterangan' => 'Ciri dari penyakit ini mengalami kerusakan jaringan sehingga terjadi perubahan tubuh menjadi putih kapas, warna udang yang cenderung pucat, kemudian ekor udang yang nampak kemerahan, penurunan nafsu makan hingga mengalami kematian. Penyebabnya dikarenakan perubahan suhu dan salinitas atau tingkat kadar garam pada air. Untuk vaksin pengobatan pada penyakit ini belum tersedia sehingga yang dapat dilakukan petani adalah melakukan pencegahan.',
                'saran' => '-Pemilihan benur SPF(Specific Pathogen Free)
                -Mengurangi kepadatan tebar benur tanpa oksigen
                -Memperketat sistem biosekuriti seperti contoh pembalikan tanah tambak
                -Pengeringan kolam tambak selama 14 hari
                -Pemberian klorin yang telah dinetralkan agar klorin tidak berubah menjadi racun yang dapat membunuh udang.
                -Jika menggunakan klorin, haruslah dibilas keluar dari tambak dengan mengalirkan air  kedalam kolam tambak sambil airnya ikut dibuang.
                -Melakukan penyaringan air dan diberikan plankton dan probiotik yang berguna untuk menghindari serangan penyakit.
                -Memasang jaring atau jala guna menghindari agen pembawa seperti kepiting, ikan dan lainnya.
                -Kemudian melakukan pemanenan bertahap.',
                'kode' => 'P4',
            ],
            [
                'nama_penyakit' => 'Enterocytozon Hepatopenaei',
                'keterangan' => 'Ciri dari penyakit ini adalah melambatnya pertumbuhan udang, perubahan warna putih pada punggung udang khususnya dibagian pencernaan sehingga udang mengalami berak putih. Penyakit ini sering disebut dengan White Feces Disease atau kotoran putih. Untuk pengobatan pada penyakit ini belum tersedia sehingga yang dapat dilakukan oleh petani adalah melakukan pencegahan.',
                'saran' => '-Meningkatkan Manajemen biosekuriti atau pembalikan tanah tambak
                -Pengeringan kolam selama 14 hari
                -Menjaga kualitas air agar tetap bersih dan
                -Mengunrangi jumlah padat tebar benur udang.',
                'kode' => 'P5',
            ],
            [
                'nama_penyakit' => 'Covert Mortality Disease',
                'keterangan' => 'Ciri-ciri penyakit ini adalah udang akan tenggelam kedasar kolam, saluran
                pencernaan berubah menjadi warna kecoklatan, kulit/cangkang pada udang
                akan menjadi lembek, perut pada udang menjadi kosong dan warna otot perut
                pada udang berubah menjadi pudar. Covert mortality disease disebabkan oleh
                nodavirus',
                'saran' => 'Untuk pencegahan maupun pengobatannya belum ada ditemukan
                tapi yang dapat dilakukan oleh pembudidaya untuk sekarang adalah melakukan
                pencegahan dengan cara memisahkan udang yang terjangkit dan yang tidak
                terjangkit atau pembudidaya bisa melakukan panen dini guna menghindari
                kerugian yang cukup besar',
                'kode' => 'P6',
            ],
            [
                'nama_penyakit' => 'Acute Hepatopancreatic Necrosis Disease( AHPND)',
                'keterangan' => 'Ciri-ciri dari penyakit AHPND adalah kulit/cangkang udang menjadi lembek,
                kosongnya saluran pada pencernaan udang dan hepatopankreas akan mengecil
                dan berwarna pucat dan hepatopankreas timbul bitnik hitam kemudian udang
                akan mati menjelang hari ke-10. Penyakit AHPND disebabkan oleh Vibrio
                parahaemolyticus (Vp AHPND)',
                'saran' => 'untuk pencegahan dapat dilakukan
                dengan penggunaan benur SPF(specific pathogen free), treatment air sebelum
                masuk kolam tambak, pembudidaya juga harus menjaga kualitas air pada kolam
                tambak agar tetap bersih, menambah pasokan udara/oksigen guna
                meningkatkan kapasistas energi. Dan untuk pengobatan pada penyakit AHPND
                belum ditemukan',
                'kode' => 'P7',
            ],
            [
                'nama_penyakit' => 'Infeksi Hepatobacter Penaei(Necrotising Hepatopancreatitis)',
                'keterangan' => 'Ciri dari penyakit ini adalah udang menglami kelesuan, penurunan nafsu
                makan, hepatopankreas berhenti berkembang, saluran pencernaan kosong,
                pertumbuhan dan berat pada udang tidak stabil, kulit/cangkang udang menjadi
                lembek, insang udang berwarna hitam. Deteksi dini pada infeksi klinis
                hepatobacter penaei penting untuk pengobatan agar potensi penularan penyakit
                ini dapat dicegah.',
                'saran' => 'Penggunaan indukan bebas patogen spesifik (SPF) merupakan tindakan 
                27
                pencegahan untuk pengendaliannya dapat menggunakan antibiotik,
                oxytetracycline dan florfenicol, untuk pengobatan terbaik saat ini adalah dengan
                pemberian pakan obat setiap 8 jam selama 10 hari terutama jika infeksi penyakit
                hepatobacter penaei terdeteksi pada fase awal',
                'kode' => 'P8',
            ]
        ];
        Penyakit::insert($penyakit);
    }
}
