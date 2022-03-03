<?php

namespace Database\Seeders;

use Faker\Core\Number;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $carray = [0, 1, 2, 3, 4];
        for ($i = 0; $i < 5; $i++) {
            DB::table('products')->insert([
                'name' => Str::random(10),
                'category_id' => random_int(1, 5),
                'stock' => rand(0, 100),
                'sales_price' => random_int(0, 500),
            ]);
        }
    }
}
