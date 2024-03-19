<?php

namespace App\Http\Controllers;

use App\Models\Brother;
use App\Models\UserImage;
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
        $tutors = Brother::with('user:id,name')->select('id', 'advert_title', 'lessons_taught', 'about_lessons', 'about_you', 'location', 'location_preference', 'levels', 'hourly_rate', 'PhoneNumber', 'user_id')->get();

        foreach ($tutors as $tutor) {
            $userImage = UserImage::where('user_id', $tutor->user_id)->first();
            $tutor->user->image_path = $userImage ? $userImage->image_path : null;
        }

        return $tutors;
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
            'PhoneNumber' => 'required|numeric',
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
    public function show($userId, $adId)
    {
        // Fetch brother details associated with the given user_id and ad_id
        $tutor = Brother::with('user:id,name')->select('id', 'advert_title', 'lessons_taught', 'about_lessons', 'about_you', 'location', 'location_preference', 'levels', 'hourly_rate', 'PhoneNumber', 'user_id')
            ->where('user_id', $userId)
            ->where('id', $adId)
            ->first();

        if (!$tutor) {
            return response()->json(['message' => 'Tutor not found'], 404);
        }

        // Fetch user's image
        $userImage = UserImage::where('user_id', $userId)->first();
        $tutor->user->image_path = $userImage ? $userImage->image_path : null;

        return response()->json($tutor);
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
            'PhoneNumber' => 'required|numeric',
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
