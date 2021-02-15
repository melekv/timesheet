<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('country')->insert([
            ['name' => 'Anglia'],
            ['name' => 'Belgia'],
            ['name' => 'Chiny'],
            ['name' => 'Czechy'],
            ['name' => 'Francja'],
            ['name' => 'Hiszpania'],
            ['name' => 'Niemcy'],
            ['name' => 'Polska'],
            ['name' => 'Portugalia'],
            ['name' => 'Szwajcaria'],
            ['name' => 'USA'],
            ['name' => 'Węgry'],
            ['name' => 'Włochy'],
            ['name' => 'Inny']
        ]);
    }
}
