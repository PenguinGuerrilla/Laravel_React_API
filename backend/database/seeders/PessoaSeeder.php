<?php

namespace Database\Seeders;
use Illuminate\Support\Str;
use App\Models\Pessoa;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Date;


class PessoaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i = 0; $i < 100; $i+=10)
        Pessoa::create([
            'nome' => Str::random(10),
            'email' => Str::random(10).'@example.com',
            'cpf' => Str::random(14),
            'nasc' => Date::now(),
            'sexo' => 'M',
            'telefone' => Str::random(11)
        ]);
    }
}
