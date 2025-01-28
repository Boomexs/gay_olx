import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your components
import Home from './routes/Home';
// import About from './About';
// import NotFound from './routes/notfound';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
    </div>
  );
}

export default App;
