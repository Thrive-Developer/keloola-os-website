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
        Schema::table('custom_page', function (Blueprint $table) {
            $table->longText('content')->change();
        });

        Schema::table('news', function (Blueprint $table) {
            $table->longText('content')->change();
        });

        Schema::table('os_edition', function (Blueprint $table) {
            $table->longText('new_features')->nullable()->change();
            $table->longText('release_notes')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('custom_page', function (Blueprint $table) {
            $table->text('content')->change();
        });

        Schema::table('news', function (Blueprint $table) {
            $table->text('content')->change();
        });

        Schema::table('os_edition', function (Blueprint $table) {
            $table->text('new_features')->nullable()->change();
            $table->text('release_notes')->nullable()->change();
        });
    }
};
