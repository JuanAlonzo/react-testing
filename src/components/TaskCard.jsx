import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div class="bg-gray-700 text-white p-4 rounded-md flex justify-between items-start flex-col h-full">
      <div class="flex-shrink-0">
        <h1 class="text-xl font-bold capitalize">{task.title}</h1>
        <p class="text-gray-400 pt-4 text-sm">{task.description}</p>
      </div>
      <button
        class="bg-red-500 px-2 py-1 rounded mt-4 hover:bg-red-600 flex-shrink self-end"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;
