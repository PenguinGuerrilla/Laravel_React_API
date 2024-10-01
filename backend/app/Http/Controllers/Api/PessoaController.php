<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pessoa;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PessoaController extends Controller
{
    public function index():JsonResponse{
        $pessoas = Pessoa::orderBy(column: 'id',direction: 'ASC')->get();

        return response()->json([
            'status' => true,
            'pessoas' => $pessoas
        ], status: 200);
    }

    public function show(Pessoa $pessoa):JsonResponse{
        return response()->json([
            'status' => true,
            'pessoa' => $pessoa
        ],200);
    }

    public function store(Request $request):JsonResponse{
        DB::beginTransaction();
        try{
            $pessoa = Pessoa::create([
                'nome' => $request->nome,
                'email' => $request->email,
                'cpf' => $request->cpf,
                'nasc' => $request->nasc,
                'telefone' => $request->telefone,
                'sexo' => $request->sexo
            ]);
            DB::commit();
            return response()->json(
                [
                    'status' => true,
                    'pessoa' => $pessoa,
                    'mensagem' => 'Sucesso'
                ],200
            );
        }catch(Exception $e){
            DB::rollBack();
            return response()->json([
                'status' => false,
                'mensagem' => 'Fracasso'
            ],400);
        }
    }

    function update(Request $request, Pessoa $pessoa):JsonResponse{
        DB::beginTransaction();
        try{
            $pessoa->update([
                'nome' => $request->nome,
                'email' => $request->email,
                'cpf' => $request->cpf,
                'nasc' => $request->nasc,
                'telefone' => $request->telefone,
                'sexo' => $request->sexo
            ]);
            DB::commit();
            return response()->json([
                'status' => true,
                'pessoa' => $pessoa,
                'mensagem' => 'Sucesso'
            ],200);
        }catch(Exception $e){
            DB::rollBack();
            return response()->json([
                'status' => false,
                'mensagem' => 'Fracasso'
            ],400);
        }
    }

    public function destroy(Pessoa $pessoa):JsonResponse{
        try{
            $pessoa->delete();
            return response()->json([
                'status' => true,
                'pessoa' => $pessoa,
                'mensagem' => 'Sucesso'
            ],200);
        }
        catch(Exception $e){
            return response()->json([
                'status' => false,
                'mensagem' => 'Fracasso'
            ],200);
        }
    }

}
