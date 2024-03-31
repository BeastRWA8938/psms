import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Entry from './pages/Entry';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entry" element={<Entry />} />
          <Route path="*" element={<Entry />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
