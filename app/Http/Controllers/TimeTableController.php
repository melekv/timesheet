<?php

namespace App\Http\Controllers;

use App\Models\TimeTable;
use Illuminate\Http\Request;

class TimeTableController extends Controller {
    public function index() {
        return view('app');
    }

    public function getAll() {
        return response()->json(TimeTable::all());
    }

    public function getDataActualMonth($year, $month) {
        return response()->json(TimeTable::where('year', $year)->where('month', $month)->get());
    }

    public function store(Request $request) {
        $date = $request->json()->get('date');
        list($year, $month, $day) = explode('-', $date);

        $activity = new TimeTable();
        $activity->user_id = 1;
        $activity->year = $year;
        $activity->month = $month;
        $activity->day = $day;
        $activity->type = $request->json()->get('type');
        $activity->work_from = '00:00:00';
        $activity->work_to = '00:00:00';
        $activity->description = 'nothing';
        $activity->place_start = 'nothing';
        $activity->city_start = 'nothing';
        $activity->country_start = 'nothing';
        $activity->save();

        return response()->json('ok');
    }
}

?>