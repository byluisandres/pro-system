<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use App\Models\Purchase;
use App\Models\PurchaseDetail;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PurchaseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Purchases/Index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // $suppliers = Supplier::select('id as value', 'name as label')->get();
        // $products = Product::select('id as value', DB::raw('concat(name," - ",stock , " stock") as label'))->get();
        $suppliers = Supplier::select('id', 'name')->get();
        $products = Product::select('id', 'name', 'stock', 'sales_price', 'image')->where('stock', '>', 0)->get();
        return Inertia::render('Purchases/Create', ['suppliers' => $suppliers, 'products' => $products]);
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
            'num_purchase' => 'required',
            'total' => 'required',
            'supplier_id' => 'required',
            'products' => 'required'
        ]);

        $purchase = Purchase::create([
            'num_purchase' => $data['num_purchase'],
            'total' => $data['total'],
            'status' => 'PENDIENTE',
            'supplier_id' => $data['supplier_id'],
            'user_id' => auth()->user()->id
        ]);
        $products = $data['products'];

        foreach ($products as $product) {
            $purchaseDetail = new PurchaseDetail();
            $purchaseDetail->purchase_id = $purchase->id; //id de la compra
            $purchaseDetail->product_id = $product['id'];
            $purchaseDetail->amount  = $product['amount'];
            $purchaseDetail->sales_price = $product['sales_price'];
            $purchaseDetail->save();
        }

        return redirect('/purchases')->with('message', 'Compra añadida');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function show(Purchase $purchase)
    {
        return Inertia::render('Purchases/Show', ['purchase', $purchase]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function edit(Purchase $purchase)
    {
        return Inertia::render('Purchases/Edit', ['purchase', $purchase]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Purchase $purchase)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function destroy(Purchase $purchase)
    {
    }
}
