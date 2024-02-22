<?php

namespace App\Http\Controllers;

use App\Models\Tutor;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Http\Request;

class TutorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Tutor::select('id', 'nometprenom',    'description',    'image')->get();
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

        $request->validate([
            'nometprenom' => 'required',
            'description' => 'required',
            'image' => 'required|image'
        ]);

        $imageName = Str::random() . '.' . $request->image->getClientOriginalExtension();
        Storage::disk('public')->putFileAs('tutor/image', $request->image, $imageName);
        Tutor::create($request->post() + ['image' => $imageName]);
        return response()->json([
            'message' => 'Item added successfully'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Tutor  $tutor
     * @return \Illuminate\Http\Response
     */
    public function show(Tutor $tutor)
    {
        return response()->json([
            'Tutor' => $tutor
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Tutor  $tutor
     * @return \Illuminate\Http\Response
     */
    public function edit(Tutor $tutor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Tutor  $tutor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tutor $tutor)
    {
        $request->validate([
            'nometprenom' => 'required',
            'description' => 'required',
            'image' => 'nullable'
        ]);

        $tutor->fill($request->post())->update();


        if ($request->hasFile('image')) {
            if ($tutor->image) {
                $exist = Storage::disk('public')->exists("tutor/image/{$tutor->image}");
                if ($exist) {
                    Storage::disk('public')->delete("tutor/image/{$tutor->image}");
                }
            }

            $imageName = Str::random() . '.' . $request->image->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('tutor/image', $request->image, $imageName);
            $tutor->image = $imageName;
            $tutor->save();
        }


        return response()->json([
            'message' => 'Item updated successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tutor  $tutor
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tutor $tutor)
    { {
            if ($tutor->image) {
                $exist = Storage::disk('public')->exists("tutor/image/{$tutor->image}");
                if ($exist) {
                    Storage::disk('public')->delete("tutor/image/{$tutor->image}");
                }
            }
            $tutor->delete();
            return response()->json([
                'message' => 'Item deleted successfully'
            ]);
        }
    }
}
