<?php

namespace Database\Seeders;

use App\Models\User;
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
        User::create([
            'name' => "luis Andrés Bolaños Yapo",
            'email' => 'luisandres33bolanos@gmail.com',
            'password' => Hash::make('SexPistols_1'),
        ]);
    }
}
