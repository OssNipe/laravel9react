<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tutor_ads', function (Blueprint $table) {
            $table->id();
            $table->string('advert_title')->nullable();
            $table->text('lessons_taught')->nullable();
            $table->text('about_lessons')->nullable();
            $table->text('about_you')->nullable();
            $table->string('location')->nullable();
            $table->string('location_preference')->nullable(); // This can be enum or string depending on your preference
            $table->string('levels')->nullable();
            $table->decimal('hourly_rate', 8, 2)->nullable();
            // Add more columns as needed
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tutor_ads');
    }
};
