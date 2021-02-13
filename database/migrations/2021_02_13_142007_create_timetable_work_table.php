<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTimetableWorkTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('timetable_work', function (Blueprint $table) {
            $table->mediumIncrements('id');
            $table->unsignedSmallInteger('user_id');
            $table->date('date');
            $table->char('superior', 3);
            $table->time('work_from');
            $table->time('work_to');
            $table->string('description')->nullable();
            $table->string('place_start', 50)->default('Biuro');
            $table->string('city_start', 50)->default('Gliwice');
            $table->string('country_start', 50)->default('Polska');
            $table->string('proj_code', 50);
            $table->time('break_from')->nullable();
            $table->time('break_to')->nullable();
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
        Schema::dropIfExists('timetable_work');
    }
}
