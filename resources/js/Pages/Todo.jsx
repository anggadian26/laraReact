import AdminLayout from '@/Layouts/AdminLayout';
import { Link, router, useForm, usePage } from '@inertiajs/react';
import React from 'react';
import { BsPencilSquare } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import Pagination from '@/Components/Pagination';


const Todo = ({ todos }) => {

    const { flash, errors } = usePage().props;


    const { data, setData, reset }= useForm({
        name: "",
    });
    const storeTodo = (e) => {
        e.preventDefault() ;
        router.post('/todo-store', data, {
            onSuccess: () => {
                reset();
            }
        })
    }
    
    return (
        <AdminLayout>
            <div className="max-w-4xl mx-auto">
                <h2 className='font-semibold text-4xl mb-8 text-center'>Todo App</h2>
                {flash.message && (
                    <div className="py-2 px-4 rounded-md bg-green-400 text-white text-center mb-2">
                        {flash.message}
                    </div>
                )}
                <form onSubmit={storeTodo}>
                    <div className="mb-6">
                        <div className="flex gap-4 items-center">
                            <input type="text" placeholder='Enter todo here' 
                                className='px-4 py-2 rounded-md grow' 
                                onChange={(e)=>setData('name', e.target.value)}
                                value={data.name}
                            />
                            <button className='py-2 px-4 rounded-md bg-indigo-500 text-white'>Save</button>
                        </div>
                        {errors.name &&(
                            <p className='text-red-700 text-sm'>{errors.name}</p>
                        )}
                    </div>
                </form>
                <div className="flex flex-col gap-2">
                    {todos.data.map((todo, i) => {
                        return (
                            <div key={i} className="flex justify-between py-3 px-6 bg-red-100 rounded-md">
                                <h3>{todo.name}</h3>
                                <div className="flex items-center justify-content-center gap-2">
                                    <Link href={`todo/edit/${todo.id}`}>
                                        <BsPencilSquare size={20}/> 
                                    </Link>
                                    | <FaTrash size={20}/>
                                </div>
                            </div>
                        )
                    })}
                    {/* <div className="flex justify-between py-3 px-6 bg-green-100 rounded-md">
                        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam vero blanditiis nisi.</h3>
                        <div className="flex items-center justify-content-center gap-2">
                            <CiCircleCheck size={20}/> | <FaTrash size={20}/>
                        </div>
                    </div>   */}
                </div>

                <div className="mt-8 flex justify-end items-center">
                    <Pagination links={todos.links}/>
                </div>
                
            </div>
        </AdminLayout>

    )
}
 
export default Todo;