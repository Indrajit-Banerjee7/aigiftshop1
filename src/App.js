import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Form from './components/Form';
import Card from './components/Card';
import Footer1 from './components/Footer1';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
// import { Route, Routes, Navigate } from "react-router-dom";
// import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className='bodyy'>
      <Nav />
      <Routes>
        <Route exact path="/About" Component={About} />
        <Route path="/" element={<div><div className='mid'><Form /></div><Card /></div>} />

      </Routes>
      <Footer1 />
    </div>
    </>
  );
}

export default App;
