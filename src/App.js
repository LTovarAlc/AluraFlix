import React from 'react';
import { useState } from 'react';
import './reset.css';
import './scrollbar.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import Home from './pages/Home';
import FormPage from './pages/FormPage';
import Footer from './components/Footer/Footer';

function App() {

  // const [] = useState([])


  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/AddVideo' element={<FormPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App