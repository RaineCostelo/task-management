import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TasksContainer from './features/tasks/tasksContainer';
import Signup from './features/auth/signup/signup'; // adjust path
import SignIn from './features/auth/signin/signin';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Tasks Management App</h1>
        <Routes>
          <Route path="/" element={<TasksContainer />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
