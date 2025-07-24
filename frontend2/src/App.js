import logo from './logo.svg';
import './App.css';
import TasksContainer from './features/tasks/tasksContainer';

function App() {
  return (
    <div className="App">
      <h1>Tasks Management App</h1>
      <TasksContainer />
    </div>
  );
}

export default App;
