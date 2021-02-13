<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTimetableTravelTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('timetable_travel', function (Blueprint $table) {
            $table->mediumIncrements('id');
            $table->unsignedSmallInteger('user_id');
            $table->date('date');
            $table->char('superior', 3);
            $table->time('work_from');
            $table->time('work_to');
            $table->string('description')->nullable();
            $table->string('place_start', 50);
            $table->string('city_start', 50);
            $table->string('country_start', 50);
            $table->string('proj_code', 50);
            $table->string('place_stop', 50);
            $table->string('city_stop', 50);
            $table->string('country_stop', 50);
            $table->string('transport', 50);
            $table->string('reg_plate', 100)->nullable();
            $table->string('person_num', 50)->nullable();
            $table->boolean('is_driver')->nullable();
            $table->time('driver_from')->nullable();
            $table->time('driver_to')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('timetable_travel');
    }
}
