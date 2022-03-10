<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProductController;
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

    Route::resource('products', ProductController::class);
    Route::put('/products/{id}/updatestate', [ProductController::class, 'updateState'])->name('products.updatestate');

    Route::resource('purchases', PurchaseController::class);
    Route::put('/purchases/{id}/updatestate', [PurchaseController::class, 'updateState'])->name('purchases.updatestate');
    Route::get('/purchases/pdf/{purchase}', [PurchaseController::class, 'generatepdf'])->name('purchase.pdf');

    Route::resource('suppliers', SupplierController::class);

    Route::resource('sales', SalesController::class);
    Route::put('/sales/{id}/updatestate', [SalesController::class, 'updateState'])->name('sales.updatestate');
    Route::get('/sales/pdf/{sale}', [SalesController::class, 'generatepdf'])->name('sale.pdf');

    Route::resource('clients', ClientController::class);
});


require __DIR__ . '/auth.php';
