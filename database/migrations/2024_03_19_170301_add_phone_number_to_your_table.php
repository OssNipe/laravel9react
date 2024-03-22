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
        Schema::table('brothers', function (Blueprint $table) {
            $table->bigInteger('PhoneNumber')->nullable(); // Change the datatype to bigint if necessary
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('brothers', function (Blueprint $table) {
            $table->dropColumn('PhoneNumber');
        });
    }
};