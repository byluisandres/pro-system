<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::orderBy('id', 'desc')->paginate(5);
        $products->load("category");
        return Inertia::render('Products/Index', ['products' => $products]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::select('id', 'name')->where('status', '=', 1)->orderBy('id', 'desc')->get();
        return Inertia::render('Products/Create', ["categories" => $categories]);
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
            "name" => "required|min:3",
            "sales_price" => "required",
            "stock" => "required",
            "category_id" => "required"
        ]);

        if ($request['image']) {
            $route_image = $request['image']->store('upload_images', 'public');
        } else {
            $route_image = "upload_images/no_image.png";
        }

        Product::create([
            'image' => env('APP_URL') . '/storage/' . $route_image,
            "name" => $data['name'],
            "description" => $request["description"],
            "code" => $request["code"],
            "sales_price" => $data['sales_price'],
            "stock" => $data['stock'],
            "category_id" => $data['category_id'],
        ]);
        return redirect('/products')->with('message', 'Producto añadido correctamente');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        $categories = Category::select('id', 'name')->where('status', '=', 1)->orderBy('id', 'desc')->get();
        return Inertia::render('Products/Edit', ['product' => $product, 'categories' => $categories]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $data = $request->validate([
            "name" => "required|min:3",
            "sales_price" => "required",
            "stock" => "required",
            "category_id" => "required"
        ]);

        $product->name = $data['name'];
        $product->description = $request['description'];
        $product->code = $request['code'];
        $product->sales_price = $data['sales_price'];
        $product->stock = $data['stock'];
        $product->status = $request['status'];
        $product->category_id = $data['category_id'];

        // Si se cambia de imágen
        if ($request['image']) {
            $route_image = $request['image']->store('upload_images', 'public');
            //asignar
            $product->imagen = env('APP_URL') . '/storage/' . $route_image;
        }
        $product->save();

        return redirect('/products')->with('message', 'Producto actualizado');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return redirect('/products')->with('message', 'Producto borrado correctamente');
    }

    /**
     *
     */
    public function updateState(Request $request, $id)
    {
        $product = Product::find($id);
        $product->status = $request['state'] === 1 ? 0 : 1;
        $product->save();
        return redirect('/products')->with('message', 'Estado del producto editado');
    }
}
