import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const CreateTask = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        await axiosPublic.post('/tasks', data);
        reset();
    };

    return (
        <div>
            <h1 className='text-3xl text-center font-bold'>Create a new task</h1>
            <div className="card shrink-0 w-full max-w-sm lg:max-w-md shadow-2xl bg-base-100 mx-auto lg:my-16">
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label>
                            <span className="label-text">Title</span>
                        </label>
                        <input {...register('title', { required: 'Title is required' })} className="input input-bordered" />

                    </div>

                    <div className="form-control mt-4">
                        <label>
                            <span className="label-text">Description</span>
                        </label>
                        <input {...register('description', { required: 'Description is required' })} className="input input-bordered" />
                    </div>

                    <div className="form-control mt-4">
                        <label>
                            <span className="label-text">Deadline</span>
                        </label>
                        <input type="date" {...register('deadline', { required: 'Deadline is required' })} className="input input-bordered" />
                    </div>

                    <div className="form-control mt-4">
                        <label>
                            <span className="label-text">Priority</span>
                        </label>
                        <select {...register('priority', { required: 'Priority is required' })} className="input input-bordered">
                            <option value="low">Low</option>
                            <option value="moderate">Moderate</option>
                            <option value="high">High</option>
                        </select>
                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Add Task</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateTask;
