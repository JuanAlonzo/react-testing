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
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Create your task</h1>
        <input
          type="text"
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          placeholder="Write your task..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          name="description"
          id="description"
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          cols="30"
          rows="10"
          placeholder="Add some description..."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="bg-indigo-500 text-white px-3 rounded">Save</button>
      </form>
    </div>
  );
}

export default TaskForm;
