import './reset.css'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import Home from './pages/Home';
import FormPage from './pages/FormPage';

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/AddVideo' element={<FormPage/>}/>
      </Routes>
    </Router>
  )
}

export default App