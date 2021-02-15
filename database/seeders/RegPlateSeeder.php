<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RegPlateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('reg_plate')->insert([
            ['name' => 'SG 2394R Berlingo (S)'],
            ['name' => 'SG 7539N Rapid czarny (S)'],
            ['name' => 'SG 4972K Rapid granatowy (S)'],
            ['name' => 'SG 4229K Rapid czerwony (S)'],
            ['name' => 'SG 0750N Rapid srebrny (S)'],
            ['name' => 'SG 4897T Octavia (S)'],
            ['name' => 'SG 8532L Kia (S)'],
            ['name' => 'SG 1708N Ibiza (S)'],
            ['name' => 'SG 8237K Rapid szary (S)'],
            ['name' => 'SL 9738E Rapid czarny (T)'],
            ['name' => 'SL 3574E Rapid spaceback (T)'],
            ['name' => 'SL 2118F Rapid spaceback (T)'],
            ['name' => 'SL 2113F Rapid spaceback (T)']
        ]);
    }
}
