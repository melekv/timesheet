<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjCodeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('proj_code')->insert([
            ['name' => 'Aumann Limbach'],
            ['name' => 'B+R Mixed Reality'],
            ['name' => 'Caparol Kleszczów'],
            ['name' => 'Huf'],
            ['name' => 'Inny'],
            ['name' => 'JPM Brema'],
            ['name' => 'Kirchhoff Wax Cell'],
            ['name' => 'Mecalux Ribeiros'],
            ['name' => 'NEMAK'],
            ['name' => 'NGK Dąbrowa Górnicza'],
            ['name' => 'NGK Gliwice'],
            ['name' => 'Oasis Gliwice'],
            ['name' => 'Projekt VR'],
            ['name' => 'Roca Gliwice'],
            ['name' => 'SIT'],
            ['name' => 'Szkolenie Integra Sindelfingen'],
            ['name' => 'Valmet'],
            ['name' => 'VW Poznań Procon'],
            ['name' => 'Wyceny']
        ]);
    }
}
