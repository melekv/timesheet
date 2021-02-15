<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TransportSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('transport')->insert([
            ['name' => 'Samochód służbowy'],
            ['name' => 'Samochód prywatny'],
            ['name' => 'Samolot'],
            ['name' => 'Taxi'],
            ['name' => 'Pociąg'],
            ['name' => 'Inne']
        ]);
    }
}
