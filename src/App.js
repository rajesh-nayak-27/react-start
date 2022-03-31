import { useState } from 'react';
import './App.css';
import Alert from './coponents/Alert';
import About from './coponents/About';
import Navbar from './coponents/Navbar';
import TextForm from './coponents/TextForm';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [text, settext] = useState("Enable Dark Mode");

  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      settext("Disable Dark Mode")
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      settext("Enable Dark Mode")
      showAlert("Dark mode has been disabled", "success")
    }
  }


  return (
    <>
      <Router>
        <Navbar title="Trial" about="About Us" mode={mode} toggleMode={toggleMode} text={text} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />}exact />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} exact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
