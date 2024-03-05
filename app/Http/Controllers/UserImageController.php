<?php

// app/Http/Controllers/UserImageController.php

namespace App\Http\Controllers;

use App\Models\UserImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class UserImageController extends Controller
{
    /**
     * Store a newly created user image in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate the incoming request
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust max file size if needed
            'user_id' => 'required|exists:users,id', // Assuming you have a users table
        ]);

        // Check if the request contains an uploaded image
        if ($request->hasFile('image')) {
            // Store the uploaded image in storage/app/public directory
            $imagePath = $request->file('image')->store('user-images', 'public');

            // Create a new UserImage instance
            $userImage = new UserImage();
            $userImage->user_id = $request->user_id; // Get user_id from the request
            $userImage->image_path = $imagePath;
            $userImage->save();

            // Optionally, you can return a response indicating success
            return response()->json(['message' => 'Image uploaded successfully', 'image_path' => $imagePath], 200);
        }

        // Return an error response if no image is uploaded
        return response()->json(['message' => 'No image uploaded'], 400);
    }
}