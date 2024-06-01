<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('release', function (Blueprint $table) {
            $table->id();
            $table->string('version', 10);
            $table->string('code_name', 50);
            $table->text('edition_id');
            $table->string('package_use');
            $table->text('status');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('release');
    }
};
