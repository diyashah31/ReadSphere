import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Freebook from "./components/Freebook";
import { Route, Routes } from 'react-router-dom';
import Course from "./components/Course";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
function App() {
  return (
    
    <div className="bg-white text-slate-900 dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<><Navbar/><Banner/><Freebook/><Footer/></>}/>
      <Route path="/course" element={<><Navbar/><Course/><Footer/></>}/>
      <Route path="/signup" element={<><Navbar/><Signup/><Footer/></>}/>
      <Route path="/contact" element={<><Navbar/><Contact/><Footer/></>}/>

    </Routes>
    </div>
  ); 
}

export default App;
