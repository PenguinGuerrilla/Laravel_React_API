<?php

use App\Http\Controllers\Api\PessoaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/pessoas',[PessoaController::class, 'index']);
Route::get('/pessoas/{pessoa}',[PessoaController::class, 'show']);
Route::post('/pessoas',[PessoaController::class, 'store']);
Route::put('/pessoas/{pessoa}',[PessoaController::class, 'update']);
Route::delete('/pessoas/{pessoa}',[PessoaController::class, 'destroy']);
