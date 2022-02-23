<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchases', function (Blueprint $table) {
            $table->id();
            $table->string("type_identification");
            $table->string("num_purchase");
            $table->date('date_purchase');
            $table->decimal('tax');
            $table->decimal("total");
            $table->boolean('status')->default(1);
            $table->foreignId('id_supplier')->references('id')->on('suppliers');
            $table->foreignId('id_user')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('purchases');
    }
}
