<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdRating extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'ad_id', 'rating'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function ad()
    {
        return $this->belongsTo(Brother::class);
    }
}
