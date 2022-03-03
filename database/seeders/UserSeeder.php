<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => "luis Andrés Bolaños Yapo",
            'email' => 'luisandres33bolanos@gmail.com',
            'password' => Hash::make('SexPistols_1'),
        ]);
    }
}
