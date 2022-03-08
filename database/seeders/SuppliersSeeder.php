<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SuppliersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        for ($i = 0; $i < 5; $i++) {
            DB::table('suppliers')->insert([
                'name' => Str::random(10),
                'phone' => rand(0, 400),
                'email' => Str::random(10) . '@gmail.com',
            ]);
        }

        for ($i = 0; $i < 5; $i++) {
            DB::table('clients')->insert([
                'name' => Str::random(10),
                'phone' => rand(0, 400),
                'email' => Str::random(10) . '@gmail.com',
            ]);
        }
    }
}
