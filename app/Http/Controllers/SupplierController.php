<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Supplier;
use Illuminate\Http\Request;

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
            'name' => 'required|min:3',
            'phone' => 'required',
            'email' => 'required'
        ]);
        Supplier::create([
            'name' => $data['name'],
            'type_document' => $request['type_document'],
            'num_document' => $request['num_document'],
            'direction' => $request['direction'],
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
        return Inertia::render('Suppliers/Show', ['supplier' => $supplier]);
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
        $supplier->direction = $request['direction'];

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
