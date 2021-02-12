<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AbsenceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('absence')->insert([
            ['name' => 'Badania lekarskie'],
            ['name' => 'Chorobowe L4'],
            ['name' => 'Krwiodawstwo'],
            ['name' => 'Opieka nad dzieckiem'],
            ['name' => 'Urlop bezpłatny'],
            ['name' => 'Urlop na żądanie'],
            ['name' => 'Urlop ojcowski'],
            ['name' => 'Urlop okolicznościowy'],
            ['name' => 'Urlop wypoczynkowy'],
            ['name' => 'Wolne za nadgodziny'],
            ['name' => 'Wolne za niedzielę'],
            ['name' => 'Wolne za sobotę'],
            ['name' => 'Wolne za święto']
        ]);
    }
}
