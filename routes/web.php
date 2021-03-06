<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ChartsController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PurchaseController;
use App\Http\Controllers\SalesController;
use App\Http\Controllers\SupplierController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Auth/Login');
});

Route::group(['middleware' => 'auth'], function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Categories
    Route::resource('categories', CategoryController::class);
    Route::put('/categories/{id}/updatestate', [CategoryController::class, 'updateState'])->name('categories.updatestate');

    // Products
    Route::resource('products', ProductController::class);
    Route::put('/products/{id}/updatestate', [ProductController::class, 'updateState'])->name('products.updatestate');

    // Purchases
    Route::resource('purchases', PurchaseController::class);
    Route::put('/purchases/{id}/updatestate', [PurchaseController::class, 'updateState'])->name('purchases.updatestate');
    Route::get('/purchases/pdf/{purchase}', [PurchaseController::class, 'generatepdf'])->name('purchase.pdf');

    // Suppliers
    Route::resource('suppliers', SupplierController::class);

    // Sales
    Route::resource('sales', SalesController::class);
    Route::put('/sales/{id}/updatestate', [SalesController::class, 'updateState'])->name('sales.updatestate');
    Route::get('/sales/pdf/{sale}', [SalesController::class, 'generatepdf'])->name('sale.pdf');

    // Clients
    Route::resource('clients', ClientController::class);

    // Charts
    Route::get('/chart/sales', [ChartsController::class, 'getDataSales']);
    Route::get('/chart/purchases', [ChartsController::class, 'getDataPurchases']);

    // Profiles
    Route::resource('profile', ProfileController::class);
});


require __DIR__ . '/auth.php';
