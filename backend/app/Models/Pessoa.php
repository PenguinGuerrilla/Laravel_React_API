<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pessoa extends Model
{
    use HasFactory;
    public $table = 'tabela_pessoa';
    protected $fillable = [
        'nome',
        'email',
        'cpf',
        'nasc',
        'telefone',
        'sexo'
    ];

}

