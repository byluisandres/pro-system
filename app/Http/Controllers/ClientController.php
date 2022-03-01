<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;

use Inertia\Inertia;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $clients = Client::select("*")->orderBy('id', 'desc')->paginate(10);
        return Inertia::render('Clients/Index', ['clients' => $clients]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Clients/Create');
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
        Client::create([
            'name' => $data['name'],
            'type_document' => $request['type_document'],
            'num_document' => $request['num_document'],
            'address' => $request['address'],
            'phone' => $data['phone'],
            'email' => $data['email'],
        ]);

        return redirect('/clients')->with('message', 'Cliente añadido');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function show(Client $client)
    {
        return Inertia::render('Clients/Show', ['client' => $client]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function edit(Client $client)
    {
        return Inertia::render('Clients/Edit', ['client' => $client]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Client $client)
    {
        $data = $request->validate([
            'name' => 'required|min:3',
            'phone' => 'required',
            'email' => 'required'
        ]);
        $client->name = $data['name'];
        $client->phone = $data['phone'];
        $client->email = $data['email'];
        $client->type_document = $request['type_document'];
        $client->num_document = $request['num_document'];
        $client->address = $request['address'];

        $client->save();

        return redirect('/clients')->with('message', 'Cliente editado');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function destroy(Client $client)
    {
        $client->delete();
        return redirect('/clients')->with('message', 'Cliente borrado');
    }
}
