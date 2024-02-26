<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TutorAd extends Model
{
    use HasFactory;
    protected $fillable = [
        'advert_title',
        'lessons_taught',
        'about_lessons',
        'about_you',
        'location',
        'location_preference',
        'levels',
        'hourly_rate'
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
