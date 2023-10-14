import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <>
      <main className="flex flex-col h-full">
        <div className="container mx-auto p-10 overflow-y-auto">
          <TaskForm />
          <TaskList />
        </div>
      </main>
    </>
  );
}

export default App;
