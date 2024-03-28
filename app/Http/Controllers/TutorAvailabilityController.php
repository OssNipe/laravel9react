<?php

namespace App\Http\Controllers;

use App\Models\TutorAvailability;
use Illuminate\Http\Request;

class TutorAvailabilityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($userId)
    {
        try {
            // Fetch tutor availabilities for the specified user ID
            $availabilities = TutorAvailability::where('user_id', $userId)->get();

            // Return the availabilities as a JSON response
            return response()->json(['availabilities' => $availabilities], 200);
        } catch (\Exception $e) {
            // Handle any exceptions or errors
            return response()->json(['message' => 'Failed to fetch tutor availabilities.', 'error' => $e->getMessage()], 500);
        }
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate request data
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'schedule' => 'required|array', // Assuming schedule is sent as an array
            // Add more validation rules for the schedule array if necessary
        ]);

        // Get user ID from request
        $userId = $request->input('user_id');

        // Get schedule from request
        $schedule = $request->input('schedule');

        // Loop through the schedule and store each availability slot
        foreach ($schedule as $day => $timeslots) {
            foreach ($timeslots as $timeslot) {
                TutorAvailability::create([
                    'user_id' => $userId,
                    'day' => $day,
                    'time_slot' => $timeslot,
                ]);
            }
        }

        return response()->json(['message' => 'Tutor availability schedule has been successfully stored'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
