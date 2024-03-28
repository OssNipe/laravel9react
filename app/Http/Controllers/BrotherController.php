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

    public function index(Request $request)
    {
        $tutors = Brother::with('user:id,name')->select('id', 'advert_title', 'lessons_taught', 'about_lessons', 'about_you', 'location', 'location_preference', 'levels', 'hourly_rate', 'PhoneNumber', 'user_id')->get();

        foreach ($tutors as $tutor) {
            $userImage = UserImage::where('user_id', $tutor->user_id)->first();
            $tutor->user->image_path = $userImage ? $userImage->image_path : null;
        }

        // Filter tutors based on selected lesson levels
        if ($request->has('searchLevels')) {
            $selectedLevels = $request->input('searchLevels');
            $tutors = $tutors->filter(function ($tutor) use ($selectedLevels) {
                return collect(explode(',', $tutor->levels))->intersect($selectedLevels)->isNotEmpty();
            });
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
            // Your validation rules here...
        ]);

        $levels = implode(',', $request->input('levels'));

        // Serialize schedule data to store in the database
        $schedule = json_encode($request->input('schedule'));

        Brother::create(array_merge(
            $request->except(['levels', 'schedule']),
            ['levels' => $levels, 'schedule' => $schedule]
        ));

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
        $tutor->levels = explode(',', $tutor->levels); // Convert string to arrays
        // Fetch user's image
        $userImage = UserImage::where('user_id', $userId)->first();
        $tutor->user->image_path = $userImage ? $userImage->image_path : null;

        return response()->json($tutor);
    }
    public function showContent($userId)
    {
        $tutor = Brother::with('user:id,name')
            ->select('advert_title', 'lessons_taught', 'about_lessons', 'about_you', 'location', 'location_preference', 'levels', 'hourly_rate', 'PhoneNumber', 'user_id')
            ->where('user_id', $userId)
            ->first();

        if (!$tutor) {
            return response()->json(['message' => 'Tutor not found'], 404);
        }

        // Assuming levels are stored as a comma-separated string
        $tutor->levels = explode(',', $tutor->levels); // Convert string to array

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
    public function destroy($userId)
    {
        $brother = Brother::where('user_id', $userId)->first();

        if (!$brother) {
            return response()->json(['message' => 'Brother record not found for the given user ID'], 404);
        }

        $brother->delete();

        return response()->json(['message' => 'Tutor ad deleted successfully']);
    }
}
