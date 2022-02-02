<?php

namespace App\Http\Controllers;

use App\Models\Gejala;
use Illuminate\Http\Request;
use stdClass;

class DempsterController extends Controller
{

    public function tes()
    {
        $object = new stdClass();

        $object2 = new stdClass();

        $object2->name = array();

        $object2->name = 'akmal';

        $object->name = array();

        $object->name[] = $object2;
        $object->name[] = 'arfan';

        return $object;
    }

    public function dempster(Request $request)
    {
        $nilai_konflik = [];
        $m_selanjutnya = [];
        $aturan_gejala = $this->getData($request->gejala);

        // return $aturan_gejala;

        $himpunan_irisan =  $this->get_irisan($aturan_gejala[0]["himpunan"][0], $aturan_gejala[1]["himpunan"][0]);

        // return $himpunan_irisan;

        $mass_function_1 = $this->mass_function_1($aturan_gejala[0], $aturan_gejala[1], $himpunan_irisan);

        // return $mass_function_1;

        array_push($m_selanjutnya, $mass_function_1["hasil"]);
        array_push($nilai_konflik, $mass_function_1["konflik"]);

        return [
            'm_selanjutnya' => $m_selanjutnya,
            'nilai_konflik' => $nilai_konflik
        ];
    }

    function getData($gejala) // mengambil data dari database
    {
        $index = 0;
        foreach ($gejala as $id_gejala) { // Mengambil gejala dari database
            $data_gejala = Gejala::where('id', $id_gejala)->with(['aturan', 'aturan.penyakit'])->first();
            $index_penyakit = 0;

            // Mengatur data agar lebih terstruktur
            foreach ($data_gejala->aturan as $data_aturan) {
                $aturan[$index]["himpunan"][0][$index_penyakit]["id"] = $data_aturan->penyakit->id;
                $aturan[$index]["himpunan"][0][$index_penyakit]["nama_penyakit"] = $data_aturan->penyakit->nama_penyakit;
                $aturan[$index]["himpunan"][0][$index_penyakit]["keterangan"] = $data_aturan->penyakit->keterangan;
                $aturan[$index]["himpunan"][0][$index_penyakit]["saran"] = $data_aturan->penyakit->saran;
                $aturan[$index]["himpunan"][0][$index_penyakit]["kode"] = $data_aturan->penyakit->kode;
                $aturan[$index]["himpunan"][0][$index_penyakit]["value"] = $data_gejala->aturan[0]->bobot;
                $index_penyakit++;
            }
            $aturan[$index]["himpunan"][1][0]["id"] = 'θ';
            $aturan[$index]["himpunan"][1][0]["value"] = round(1 - $data_gejala->aturan[0]->bobot, 2);
            $aturan[$index]["nama_gejala"] = $data_gejala->nama_gejala;
            $aturan[$index]["kode_gejala"] = $data_gejala->kode;
            $aturan[$index]["value"] = $data_gejala->aturan[0]->bobot;
            $aturan[$index]["value_invert"] = round(1 - $data_gejala->aturan[0]->bobot, 2);
            $index++;
        }
        // $aturan[$index][1][0]["id"] = ['θ'];

        return $aturan;
    }

    function mass_function_1($m_col, $m_row, $irisan) // menghitung nilai bobot
    {
        $himpunan_hasil = null;
        $nilai_konflik = [];
        $densitas_baru = $m_col["value"] * $m_row["value"];
        if ($irisan) {
            $data = [
                'penyakit' => $irisan,
                'densitas' => round($densitas_baru, 4),
            ];
            $himpunan_hasil = $data;
        } else {
            $data = [
                'penyakit' => "konflik",
                'densitas' => round($densitas_baru, 4),
            ];
            $himpunan_hasil = $data;
            array_push($nilai_konflik, round($densitas_baru, 4));
        }


        return [
            'hasil' => $himpunan_hasil,
            'konflik' => $nilai_konflik
        ];
    }

    function get_irisan(array $data1, array $data2) // mencari irisan
    {
        $result = [];
        for ($i = 0; $i < count($data1); $i++) {
            for ($j = 0; $j < count($data2); $j++) {
                if ($data1[$i]['id'] == $data2[$j]['id']) {
                    array_push($result, $data1[$i]);
                }
            }
        }

        return $result;
    }
}
