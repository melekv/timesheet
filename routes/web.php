<?php

use Illuminate\Http\Request;

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

// show index page
$router->get('/', ['uses' => 'TimeTableController@index']);

$router->get('/data', ['uses' => 'TimeTableController@getAll']);

// get data for actual / selected year, month
// $router->get('/data/{year}/{month}', ['uses' => 'TimeTableController@getDataActualMonth']);
$router->get('/data/{type}/{year_month}', function($type, $year_month) {
    $lastDayOfMonth = date('t', strtotime($year_month . '-01'));
    return response()->json(DB::table('timetable_' . $type)->whereBetween('date', [$year_month . '-01', $year_month . '-' . $lastDayOfMonth])->get());
});

// $router->post('/data', ['uses' => 'TimeTableController@store']);

$router->post('/data/{activity}', function($activity, Request $request) {
    if ($activity === 'W') {
        return response()->json(DB::table('timetable_work')->insertGetId([
            'user_id' => 1,
            'date' => $request->json()->get('date'),
            'superior' => $request->json()->get('superior'),
            'work_from' => $request->json()->get('workFrom'),
            'work_to' => $request->json()->get('workTo'),
            'description' => $request->json()->get('description'),
            'place_start' => $request->json()->get('placeStart'),
            'city_start' => $request->json()->get('cityStart'),
            'country_start' => $request->json()->get('countryStart'),
            'is_holiday' => $request->json()->get('isHoliday'),
            'proj_code' => $request->json()->get('projCode'),
            'break_from' => $request->json()->get('breakFrom'),
            'break_to' => $request->json()->get('breakTo')
        ]));
    }
    if ($activity === 'T') {
        return response()->json(DB::table('timetable_travel')->insertGetId([
            'user_id' => 1,
            'date' => $request->json()->get('date'),
            'superior' => $request->json()->get('superior'),
            'work_from' => $request->json()->get('workFrom'),
            'work_to' => $request->json()->get('workTo'),
            'description' => $request->json()->get('description'),
            'place_start' => $request->json()->get('placeStart'),
            'city_start' => $request->json()->get('cityStart'),
            'country_start' => $request->json()->get('countryStart'),
            'is_holiday' => $request->json()->get('isHoliday'),
            'proj_code' => $request->json()->get('projCode'),
            'place_stop' => $request->json()->get('placeStop'),
            'city_stop' => $request->json()->get('cityStop'),
            'country_stop' => $request->json()->get('countryStop'),
            'transport' => $request->json()->get('transport'),
            'reg_plate' => $request->json()->get('regPlate'),
            'person_num' => $request->json()->get('personNum'),
            'is_driver' => $request->json()->get('isDriver'),
            'driver_from' => $request->json()->get('driverFrom'),
            'driver_to' => $request->json()->get('driverTo')
        ]));
    }
    if ($activity === 'A') {
        return response()->json(DB::table('timetable_absence')->insertGetId([
            'user_id' => 1,
            'date' => $request->json()->get('date'),
            'superior' => $request->json()->get('superior'),
            'absence' => $request->json()->get('absence'),
            'work_from' => $request->json()->get('workFrom'),
            'work_to' => $request->json()->get('workTo')
        ]));
    }
});

$router->put('/data/{activity}/{id}', function($activity, $id, Request $request) {
    if ($activity === 'W') {
        return response()->json(DB::table('timetable_work')->where('id', $id)->update([
            'date' => $request->json()->get('date'),
            'superior' => $request->json()->get('superior'),
            'work_from' => $request->json()->get('workFrom'),
            'work_to' => $request->json()->get('workTo'),
            'description' => $request->json()->get('description'),
            'place_start' => $request->json()->get('placeStart'),
            'city_start' => $request->json()->get('cityStart'),
            'country_start' => $request->json()->get('countryStart'),
            'is_holiday' => $request->json()->get('isHoliday'),
            'proj_code' => $request->json()->get('projCode'),
            'break_from' => $request->json()->get('breakFrom'),
            'break_to' => $request->json()->get('breakTo')
        ]));
    }
    if ($activity === 'T') {
        return response()->json(DB::table('timetable_travel')->where('id', $id)->update([
            'date' => $request->json()->get('date'),
            'superior' => $request->json()->get('superior'),
            'work_from' => $request->json()->get('workFrom'),
            'work_to' => $request->json()->get('workTo'),
            'description' => $request->json()->get('description'),
            'place_start' => $request->json()->get('placeStart'),
            'city_start' => $request->json()->get('cityStart'),
            'country_start' => $request->json()->get('countryStart'),
            'is_holiday' => $request->json()->get('isHoliday'),
            'proj_code' => $request->json()->get('projCode'),
            'place_stop' => $request->json()->get('placeStop'),
            'city_stop' => $request->json()->get('cityStop'),
            'country_stop' => $request->json()->get('countryStop'),
            'transport' => $request->json()->get('transport'),
            'reg_plate' => $request->json()->get('regPlate'),
            'person_num' => $request->json()->get('personNum'),
            'is_driver' => $request->json()->get('isDriver'),
            'driver_from' => $request->json()->get('driverFrom'),
            'driver_to' => $request->json()->get('driverTo')
        ]));
    }
    if ($activity === 'A') {
        return response()->json(DB::table('timetable_absence')->where('id', $id)->update([
            'date' => $request->json()->get('date'),
            'superior' => $request->json()->get('superior'),
            'absence' => $request->json()->get('absence'),
            'work_from' => $request->json()->get('workFrom'),
            'work_to' => $request->json()->get('workTo')
        ]));
    }
});

$router->get('/fields/{dbName}', function($dbName) {
    return response()->json(DB::table($dbName)->get());
});

$router->delete('/data/delete/{type}/{id}', function($type, $id) {
    return response()->json(DB::table('timetable_' . $type)->where('id', '=', $id)->delete());
});