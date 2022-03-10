<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Sales;
use App\Models\Client;
use App\Models\Product;
use Barryvdh\DomPDF\PDF;
use App\Models\SalesDetail;
use Illuminate\Http\Request;

class SalesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sales = Sales::query()->select("*")->orderBy('id', 'desc')->paginate(10);
        $sales->load('client');
        return Inertia::render('Sales/Index', ['sales' => $sales]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $clients = Client::select('id', 'name')->get();
        $products = Product::select('id', 'name', 'stock', 'sales_price', 'image')->where('stock', '>', 0)->get();
        return Inertia::render('Sales/Create', ['clients' => $clients, 'products' => $products]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'num_sales' => 'required',
            'total' => 'required',
            'client_id' => 'required',
            'products' => 'required'
        ]);

        $sale = Sales::create([
            'num_sales' => $data['num_sales'],
            'total' => $data['total'],
            'status' => 'PENDIENTE',
            'client_id' => $data['client_id'],
            'user_id' => auth()->user()->id
        ]);
        $products = $data['products'];

        foreach ($products as $product) {
            $salesDetail = new SalesDetail();
            $salesDetail->sales_id = $sale->id; //id de la compra
            $salesDetail->product_id = $product['id'];
            $salesDetail->amount  = $product['amount'];
            $salesDetail->sales_price = $product['sales_price'];
            $salesDetail->save();
        }

        return redirect('/sales')->with('message', 'Venta añadida');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Sales  $sales
     * @return \Illuminate\Http\Response
     */
    public function show(Sales $sale)
    {
        $sale->load('client');
        $saleDetails = SalesDetail::query()->join('products', 'sales_details.product_id', 'products.id')
            ->join('categories', 'products.category_id', 'categories.id')
            ->select(
                'products.image',
                'products.name as product',
                'products.sales_price',
                'sales_details.amount',
                'categories.name as category'
            )
            ->where('sales_details.sales_id', $sale->id)
            ->get();
        return Inertia::render('Sales/Show', ['sale' => $sale, 'saleDetails' => $saleDetails]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Sales  $sales
     * @return \Illuminate\Http\Response
     */
    public function edit(Sales $sales)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Sales  $sales
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Sales $sales)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Sales  $sales
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sales $sale)
    {
        $sale->delete();
        return redirect('/sales')->with('message', 'Venta borrada');
    }

    /**
     *
     */
    public function updateState(Request $request, $id)
    {
        $sale = Sales::find($id);
        $sale->status = $request['state'];
        $sale->save();
        return redirect('/sales')->with('message', 'Estado de la venta editada');
    }


    /**
     *
     */
    public function generatepdf(Sales $sale)
    {
        $pdf = app('dompdf.wrapper');
        $sale->load('client');
        $saleDetails = SalesDetail::query()->join('products', 'sales_details.product_id', 'products.id')
            ->join('categories', 'products.category_id', 'categories.id')
            ->select(
                'products.image',
                'products.name as product',
                'products.sales_price',
                'sales_details.amount',
                'categories.name as category'
            )
            ->where('sales_details.sales_id', $sale->id)
            ->get();

        $pdf = \PDF::loadView('pdf.sales', ['sale' => $sale, 'saleDetails' => $saleDetails]);
        return $pdf->download('detalle_venta_' . $sale->num_sales . '.pdf');
    }
}
