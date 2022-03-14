<?php

namespace App\Http\Controllers;

use App\Models\Purchase;
use App\Models\Sales;
use Illuminate\Support\Facades\DB;

class ChartsController extends Controller
{
    public function getDataSales()
    {
        $salesMonth = [];
        $sales = Sales::select('total', DB::raw('MONTHNAME(date_sales) as month'))
            ->where(DB::raw('YEAR(date_sales)'), date('Y'))->Where("status", "COMPLETADO")->orderBy('date_sales', 'Asc')->get();

        foreach ($sales as $value) {
            $month = array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
            $month_EN = array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
            $nameMonth = str_replace($month_EN, $month, $value->month);
            if (!isset($salesMonth[$nameMonth])) {
                $salesMonth[$nameMonth] = intval($value->total);
            } else {
                $salesMonth[$nameMonth] += intval($value->total);
            }
        }
        return $salesMonth;
    }

    public function getDataPurchases()
    {
        $salesMonth = [];
        $sales = Purchase::select('total', DB::raw('MONTHNAME(date_purchase) as month'))
            ->where(DB::raw('YEAR(date_purchase)'), date('Y'))->Where("status", "COMPLETADO")->orderBy('date_purchase', 'Asc')->get();

        foreach ($sales as $value) {
            $month = array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
            $month_EN = array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
            $nameMonth = str_replace($month_EN, $month, $value->month);
            if (!isset($salesMonth[$nameMonth])) {
                $salesMonth[$nameMonth] = intval($value->total);
            } else {
                $salesMonth[$nameMonth] += intval($value->total);
            }
        }
        return $salesMonth;
    }
}
