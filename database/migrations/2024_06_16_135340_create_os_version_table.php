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
        Schema::create('os_version', function (Blueprint $table) {
            $table->id();
            $table->string('version');
            $table->string('code_name');
            $table->string('slug');
            $table->text('description');
            $table->string('package_base');
            $table->string('status');
            $table->string('slogan');
            $table->string('image');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('os_version');
    }
};
