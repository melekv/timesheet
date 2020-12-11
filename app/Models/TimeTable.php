<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TimeTable extends Model {

    // table name!
    public $table = 'timetable';
    
    protected $fillable = ['type', 'work_from', 'work_to'];
    protected $hidden = [];
}

?>