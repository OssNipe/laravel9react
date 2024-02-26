<?php

namespace App\Http\Controllers;


use App\Models\TutorAd;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TutorAdController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return TutorAd::select('id', 'advert_title', 'lessons_taught', 'about_lessons', 'about_you', 'location', 'location_preference', 'levels', 'hourly_rate')->get();
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
        TutorAd::create($request->post());

        return response()->json([
            'message' => 'Tutor ad created successfully'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TutorAd  $tutorAd
     * @return \Illuminate\Http\Response
     */
    public function show(TutorAd $tutorAd)
    {
        return response()->json([
            'TutorAd' => $tutorAd
        ]);
    }
    public function update(Request $request, TutorAd $tutorAd)
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

        $tutorAd->update($request->all());

        return response()->json([
            'message' => 'Tutor ad updated successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TutorAd  $tutorAd
     * @return \Illuminate\Http\Response
     */
    public function destroy(TutorAd $tutorAd)
    {
        $tutorAd->delete();

        return response()->json([
            'message' => 'Tutor ad deleted successfully'
        ]);
    }
}
