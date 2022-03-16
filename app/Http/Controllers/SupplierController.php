<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Purchase;
use App\Models\PurchaseDetail;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $suppliers = Supplier::select("*")->orderBy('id', 'desc')->paginate(10);
        return Inertia::render('Suppliers/Index', ['suppliers' => $suppliers]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Suppliers/Create');
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
            'name' => 'required|min:3|unique:suppliers',
            'phone' => 'required',
            'email' => 'required|unique:suppliers,email'
        ]);
        Supplier::create([
            'name' => $data['name'],
            'type_document' => $request['type_document'],
            'num_document' => $request['num_document'],
            'address' => $request['address'],
            'phone' => $data['phone'],
            'email' => $data['email'],
        ]);

        return redirect('/suppliers')->with('message', 'Proveedor añadido');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function show(Supplier $supplier)
    {
        $purchases = Purchase::query()->where('supplier_id', $supplier->id)->get();
        if (count($purchases) > 0) {
            foreach ($purchases as  $purchase) {
                $purchaseDetails = PurchaseDetail::query()->join('products', 'purchase_details.product_id', 'products.id')
                    ->join('categories', 'products.category_id', 'categories.id')
                    ->select('products.image', 'products.name as product', 'products.sales_price', 'purchase_details.amount', 'categories.name as category')
                    ->where('purchase_details.purchase_id', $purchase->id)
                    ->get();
            }
        } else {
            $purchaseDetails = [];
        }
        return Inertia::render(
            'Suppliers/Show',
            ['supplier' => $supplier, 'purchases' => $purchases, 'purchaseDetails' => $purchaseDetails]
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function edit(Supplier $supplier)
    {
        return Inertia::render('Suppliers/Edit', ['supplier' => $supplier]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Supplier $supplier)
    {
        $data = $request->validate([
            'name' => 'required|min:3',
            'phone' => 'required',
            'email' => 'required'
        ]);
        $supplier->name = $data['name'];
        $supplier->phone = $data['phone'];
        $supplier->email = $data['email'];
        $supplier->type_document = $request['type_document'];
        $supplier->num_document = $request['num_document'];
        $supplier->address = $request['address'];

        $supplier->save();

        return redirect('/suppliers')->with('message', 'Proveedor editado');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function destroy(Supplier $supplier)
    {
        $supplier->delete();
        return redirect('/suppliers')->with('message', 'Proveedor borrado');
    }
}
