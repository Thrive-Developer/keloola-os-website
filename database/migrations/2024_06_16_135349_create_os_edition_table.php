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
        Schema::create('os_edition', function (Blueprint $table) {
            $table->id();
            $table->foreignId('os_version_id');
            $table->string('name');
            $table->string('slug');
            $table->string('slogan');
            $table->text('description');
            $table->string('image');
            $table->string('download_link');
            $table->text('new_features')->nullable();
            $table->text('release_notes')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('os_edition');
    }
};
