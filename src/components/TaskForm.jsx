import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <>
      <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 p-10 mb-4 rounded-md shadow-md"
        >
          <h1 className="text-2xl font-bold text-white mb-3">
            Create your task
          </h1>
          <input
            type="text"
            className="p-2 w-full mb-2 rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 shadow-sm"
            placeholder="Write your task..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            autoFocus
          />
          <textarea
            name="description"
            id="description"
            className="p-2 w-full mb-2 rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 shadow-sm"
            rows="2"
            placeholder="Add some description..."
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
          <button className="bg-indigo-500 text-white px-5 py-1 rounded-md">
            Save
          </button>
        </form>
      </div>
    </>
  );
}

export default TaskForm;
