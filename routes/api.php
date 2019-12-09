<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', 'ApiController@login');
Route::post('register', 'ApiController@register');
 
Route::group(['middleware' => 'auth.jwt'], function () {
    Route::get('logout', 'ApiController@logout');
 
    Route::get('user', 'ApiController@getAuthUser');
 
    Route::get('products', 'ProductController@index');
    Route::get('products/{id}', 'ProductController@show');
    Route::post('products', 'ProductController@store');
    Route::put('products/{id}', 'ProductController@update');
    Route::delete('products/{id}', 'ProductController@destroy');


    Route::get('students', 'StudentController@index');
    Route::get('students/{id}', 'StudentController@show');
    Route::post('students', 'StudentController@store');
    Route::put('students/{id}', 'StudentController@update');
    Route::delete('students/{id}', 'StudentController@destroy');
    Route::get('/search', 'StudentController@getStudent');

    Route::get('guardian', 'GuardianController@index');
    Route::get('guardian/{id}', 'GuardianController@show');
    Route::post('guardian', 'GuardianController@store');
    Route::put('guardian/{id}', 'GuardianController@update');
    Route::delete('guardian/{id}', 'GuardianController@destroy');


});