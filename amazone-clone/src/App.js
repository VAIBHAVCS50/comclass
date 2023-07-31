import React from 'react';
import Header from './Header';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// react router to go to different pages
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<h1>checkout</h1>} />
          <Route path='/login' element={<h1>login page</h1>} />
          <Route path='/' element={<React.Fragment><Header /><h1>Home Page!!</h1></React.Fragment>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 
