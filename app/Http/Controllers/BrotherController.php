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
            'PhoneNumber' => 'required|numeric',
            'hourly_rate' => 'required|numeric',
            'levels' => 'required|array', // Ensure levels is an array
            'levels.*' => 'string', // Each level should be a string
        ]);

        // Convert the levels array to a comma-separated string
        $levels = implode(',', $request->input('levels'));

        // Create a new tutor ad record with the user ID and levels
        Brother::create(array_merge($request->except('levels'), ['levels' => $levels]));

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
    public function showContent($userId)
    {
        // Fetch brother details associated with the given user_id
        $tutor = Brother::with('user:id,name')
            ->select('advert_title', 'lessons_taught', 'about_lessons', 'about_you', 'location', 'location_preference', 'levels', 'hourly_rate', 'PhoneNumber', 'user_id')
            ->where('user_id', $userId)
            ->first();

        if (!$tutor) {
            return response()->json(['message' => 'Tutor not found'], 404);
        }

        return response()->json($tutor);
    }


    public function update(Request $request, $userId)
    {
        $request->validate([
            'advert_title' => 'required',
            'lessons_taught' => 'required',
            'about_lessons' => 'required',
            'about_you' => 'required',
            'location' => 'required',
            'PhoneNumber' => 'required|numeric',
            'hourly_rate' => 'required|numeric',
            'location_preference' => 'required',
            'levels' => 'required|array', // Ensure levels is an array
            'levels.*' => 'string' // Each level should be a string
        ]);

        // Convert the levels array to a comma-separated string
        $levels = implode(',', $request->input('levels'));

        // Find the Brother record associated with the given user ID
        $brother = Brother::where('user_id', $userId)->first();

        // Check if the Brother record exists
        if (!$brother) {
            return response()->json(['message' => 'Tutor ad not found'], 404);
        }

        // Update the existing Brother record with the new data
        // Exclude 'levels' from $request->all() and merge manually with the converted $levels
        $updateData = array_merge($request->except('levels'), ['levels' => $levels]);

        $brother->update($updateData);

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
