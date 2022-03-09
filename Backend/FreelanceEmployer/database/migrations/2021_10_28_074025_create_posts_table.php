<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {

            $table->bigIncrements('Post_Id');
            $table->text('Post_Title',50);
            $table->text('Post_Description',100);
            $table->text('Job_Requirement',100);
            $table->text('Responsibilities',100);
            $table->text('Salary',10);
            $table->text('Vacancy',10);
            $table->text('Employment_Status',10);
            $table->text('Workplace',50);
            $table->text('Job_Location',50);
            $table->text('Compensation',50);
            $table->text('Deadline',20);
            $table-> text('Posted_By',50);
            $table->text('Post_Status',20);
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
        Schema::dropIfExists('posts');
    }
}
