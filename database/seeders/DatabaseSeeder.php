<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            AbsenceSeeder::class,
            CountrySeeder::class,
            ProjCodeSeeder::class,
            RegPlateSeeder::class,
            SuperiorSeeder::class,
            TransportSeeder::class
        ]);
    }
}
