<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SuperiorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('superior')->insert([
            ['name' => 'JP'],
            ['name' => 'TR'],
            ['name' => 'SM'],
            ['name' => 'DR'],
            ['name' => 'DL'],
            ['name' => 'MŻ'],
            ['name' => 'PŚ'],
            ['name' => 'OR']
        ]);
    }
}
