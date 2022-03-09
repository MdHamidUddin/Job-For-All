<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFEmpsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('f_emps', function (Blueprint $table) {
            $table->bigIncrements('Freelance_Id');
            $table->text('Username',30);
            $table->text('Password',20);
            $table->text('Name',30);
            $table->text('Email',30);
            $table->text('Phone',15);
            $table->text('NID',20);
            $table->text('Address',50);
            $table->text('JobType',20);
            $table->text('Picture',100);
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
        Schema::dropIfExists('f_emps');
    }
}
