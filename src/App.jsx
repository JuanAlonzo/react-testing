import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <>
      <main className="bg-zinc-900 h-screen">
        <div className="container mx-auto p-10">
          <TaskForm className="" />
          <TaskList className="" />
        </div>
      </main>
    </>
  );
}

export default App;
