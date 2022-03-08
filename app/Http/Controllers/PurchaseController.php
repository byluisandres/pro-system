<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use App\Models\Purchase;
use App\Models\PurchaseDetail;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use JetBrains\PhpStorm\Pure;

class PurchaseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $purchases = Purchase::query()->select("*")->orderBy('id', 'desc')->paginate(10);
        $purchases->load('supplier');
        return Inertia::render('Purchases/Index', ['purchases' => $purchases]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
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
        $purchase->load('supplier');
        $purchaseDetails = PurchaseDetail::query()->join('products', 'purchase_details.product_id', 'products.id')
            ->join('categories', 'products.category_id', 'categories.id')
            ->select('products.image', 'products.name as product', 'products.sales_price', 'purchase_details.amount', 'categories.name as category')
            ->where('purchase_details.purchase_id', $purchase->id)
            ->get();
        return Inertia::render('Purchases/Show', ['purchase' => $purchase, 'purchaseDetails' => $purchaseDetails]);
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
        $purchase->delete();
        return redirect('/purchases')->with('message', 'Compra borrada');
    }

    /**
     *
     */
    public function updateState(Request $request, $id)
    {
        $purchase = Purchase::find($id);
        $purchase->status = $request['state'];
        $purchase->save();
        return redirect('/purchases')->with('message', 'Estado de la compra editada');
    }

    /**
     *
     */
    public function generatepdf(Purchase $purchase)
    {
        $pdf = app('dompdf.wrapper');
        $purchase->load('supplier');
        $purchaseDetails = PurchaseDetail::query()->join('products', 'purchase_details.product_id', 'products.id')
            ->join('categories', 'products.category_id', 'categories.id')
            ->select('products.image', 'products.name as product', 'products.sales_price', 'purchase_details.amount', 'categories.name as category')
            ->where('purchase_details.purchase_id', $purchase->id)
            ->get();
        //dd($saleDetails);

        $pdf = \PDF::loadView('pdf.purchases', ['purchase' => $purchase, 'purchaseDetails' => $purchaseDetails]);
        return $pdf->download('detalle_compra_' . $purchase->num_purchase . '.pdf');
    }
}
