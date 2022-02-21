<?php

namespace App\Http\Controllers;

use App\Models\Gejala;
use Illuminate\Http\Request;

class DempsterController extends Controller
{

    public function dempster(Request $request)
    {
        $request->validate([
            'gejala' => 'required',
        ]);

        $aturan_gejala = $this->getAturan($request->gejala);

        if (count($aturan_gejala) < 2) {
            return "Gejala minimal 2";
        } else if (count($aturan_gejala) >= 2) {
            $resultMassFunction = $this->mass_function_1($aturan_gejala[0], $aturan_gejala[1]);
            $startGejala = 2;

            for ($i = $startGejala; $i < count($aturan_gejala); $i++) {
                $resultMassFunction = $this->mass_function_1($aturan_gejala[$startGejala], $resultMassFunction);
            }

            $result = $resultMassFunction;
        }

        return $result;
    }

    /**
     * method getAturan
     * untuk mengambil data aturan di database
     * 
     * @param array $gejala
     * 
     * @return object $aturan_gejala
     */

    function getAturan($gejala)
    {
        foreach ($gejala as $index => $id_gejala) {
            $data_gejala = Gejala::where('id', $id_gejala)->with(['aturan', 'aturan.penyakit'])->first();


            foreach ($data_gejala->aturan as $index_penyakit => $data_aturan) {
                $aturan[$index][0]["penyakit"][$index_penyakit] = $data_aturan->penyakit->id;
            }

            $aturan[$index][0]["bobot"] = $data_gejala->aturan[0]->bobot;
            $aturan[$index][0]["conflict"] = 0;

            $aturan[$index][1]["penyakit"] = ['θ'];
            $aturan[$index][1]["bobot"] = round(1 - $data_gejala->aturan[0]->bobot, 2);
            $aturan[$index][1]["conflict"] = 0;
        }

        return $aturan;
    }

    /**
     * method mass_function_1
     * adalah perhitungan mass_function dalam tabel, untuk mengetahui himpunan hasil get_irisan
     * @param  array $m_col [himpunan1]
     * @param  array $m_row [himpunan2]
     * 
     * @return array
     */

    function mass_function_1($m_col, $m_row)
    {
        $result = [];
        foreach ($m_col as $data_col) {
            foreach ($m_row as $data_row) {
                $irisan = $this->getIrisan($data_col, $data_row);
                array_push($result, $irisan);
            }
        }

        $conflict = $this->countConflict($result);

        $result = $this->finalizeResult($result, $conflict);

        return $result;
    }

    /**
     * method getIrisan
     * untuk mencari irisan antara 2 himpunan
     * 
     * @param array $data1 [himpunan 1]
     * @param array $data2 [himpunan 2]
     * 
     * @return array $result [irisan antara 2 himpunan]
     */

    function getIrisan(array $data1, array $data2)
    {
        $irisan = [];
        for ($i = 0; $i < count($data1["penyakit"]); $i++) {
            for ($j = 0; $j < count($data2["penyakit"]); $j++) {
                if ($data1["penyakit"][$i] == $data2["penyakit"][$j]) {
                    array_push($irisan, $data1["penyakit"][$i]);
                }
            }
        }

        if (count($irisan) <= 0) {
            $result1 = $this->getNotTeta($data1["penyakit"]);
            $result2 = $this->getNotTeta($data2["penyakit"]);

            if (count($result1) > 0) {
                $result["penyakit"] = $result1;
            } else if (count($result2) > 0) {
                $result["penyakit"] = $result2;
            }
        } else {
            $result["penyakit"] = $irisan;
        }

        $result["bobot"] = round($data1["bobot"] * $data2["bobot"], 2);
        $result["conflict"] = 0;

        return $result;
    }

    /**
     * method countConflict
     * untuk menghitung jumlah konflik
     * 
     * @param array $array [array data]
     * @return int $result
     */

    public function countConflict($array)
    {
        $result = 0;
        foreach ($array as $data) {
            $result = $result + $data["conflict"];
        }

        return $result;
    }

    /**
     * method finalizeResult
     * untuk menghitung himpunan akhir dari Mass mass_function_1
     * 
     * @param array $dataSet [himpunan data]
     * @param int $conflict [nilai konflik]
     * 
     * @return array $result
     */

    public function finalizeResult($dataSet, $conflict)
    {
        $result = null;
        foreach ($dataSet as $index => $data) {
            $result[$index]["penyakit"] = $data["penyakit"];
            $result[$index]["bobot"] = $data["bobot"] / (1 - $conflict);
            $result[$index]["conflict"] = 0;
        }

        return $result;
    }

    /**
     * method isTeta
     * untuk mengecek apakah ada teta atau tidak
     * 
     * @param array $data [himpunan yang ingin dicek]
     * @return boolean
     */

    public function isTeta($data)
    {
        if (in_array('θ', $data)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * method getNotTeta
     * untuk mengambil data yang bukan teta
     * 
     * @param array $data [himpunan yang ingin dicek]
     * @return array
     */

    public function getNotTeta($data)
    {
        $not_teta = [];
        foreach ($data as $index => $penyakit) {
            if ($penyakit != 'θ') {
                array_push($not_teta, $penyakit);
            }
        }

        return $not_teta;
    }
}
