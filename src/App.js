import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header"> */}
          {/* <h1>React App</h1> */}
          {/* <nav>
            <Link to="/">Home</Link>
          </nav> */}
        {/* </header> */}
  
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
