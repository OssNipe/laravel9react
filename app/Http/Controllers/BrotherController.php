<?php

namespace App\Http\Controllers;

use App\Models\Brother;
use Illuminate\Http\Request;

class BrotherController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Brother::select('id', 'advert_title', 'lessons_taught', 'about_lessons', 'about_you', 'location', 'location_preference', 'levels', 'hourly_rate', 'user_id')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'advert_title' => 'required',
            'lessons_taught' => 'required',
            'about_lessons' => 'required',
            'about_you' => 'required',
            'location' => 'required',
            'location_preference' => 'required',
            'levels' => 'required',
            'hourly_rate' => 'required|numeric',
        ]);



        // Create a new tutor ad record with the user ID
        Brother::create($request->post());

        return response()->json([
            'message' => 'Tutor ad created successfully'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Brother  $brother
     * @return \Illuminate\Http\Response
     */
    public function show(Brother $brother)
    {
        return response()->json([
            'Brother' => $brother
        ]);
    }
    public function update(Request $request, Brother $brother)
    {
        $request->validate([
            'advert_title' => 'required',
            'lessons_taught' => 'required',
            'about_lessons' => 'required',
            'about_you' => 'required',
            'location' => 'required',
            'location_preference' => 'required',
            'levels' => 'required',
            'hourly_rate' => 'required|numeric',
        ]);

        // Update the existing Brother record with the new data
        $brother->update(array_merge($request->all(), ['user_id' => auth()->id()]));

        return response()->json([
            'message' => 'Tutor ad updated successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Brother  $brother
     * @return \Illuminate\Http\Response
     */
    public function destroy(Brother $brother)
    {
        $brother->delete();

        return response()->json([
            'message' => 'Tutor ad deleted successfully'
        ]);
    }
}
