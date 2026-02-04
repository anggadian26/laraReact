<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TodoController extends Controller
{
    public function index(){
        return Inertia::render("Todo", [
            'todos' => Todo::latest()->paginate(2),
        ]);
    }

    public function store(Request $request){
        $data = $request->validate([
            'name'          => 'required|min:3',
            'is_complete'   => 'boolean'
        ],
        [
            'name.required' => 'Nama todo tidak boleh kosong',
            'name.min'  => 'Minimal 3 karakter'
        ]
        );

        Todo::create($data);

        return back()->with('message','Todo berhasil disimpan');
    }

    public function edit(Todo $todo) {
        return Inertia::render('Edit', [
            'todo' => $todo
        ]);
    }

    public function update(Request $request, Todo $todo) {
        $data = $request->validate([
            'name'  => 'required|min:3'
        ]);
        
        $todo->update($data);

        return redirect(route('todo.index'))->with('message', 'Data Berhasil Diupdate'); 
    }

    public function updateComplete(Request $request, Todo $todo) {
        $data = $request->validate([
            'is_complete' => 'boolean'
        ]);
        
        $todo->update($data);
        return back()->with('message', 'Data Berhasil Diupdate');
    }

}
