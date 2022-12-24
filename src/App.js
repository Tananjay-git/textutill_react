// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
// import Switch from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link
} from "react-router-dom";

// let name = "Tananjay";
function App() {
  const [mode, setmode] = useState('light');
  const [textMode, settextMode] = useState('dark');
  const [form, setform] = useState('white');
  const [formText, setformText] = useState('black');
  const [alert, setalert] = useState(null);



let toggleMode = ()=>{
  if(mode === 'light'){
    setmode('dark')
    settextMode('light')
    document.body.style.backgroundColor = '#212529b5'
    setform('#212529b5')
    setformText('white')
    showalert("Dark mode has been enabled", "success")
    document.title = "TextUtils Dark Mode"
  }
  else{
    setmode('light')
    settextMode('dark')
    document.body.style.backgroundColor = 'white'
    setform('white')
    setformText('black')
    showalert("Light mode has been enabled", "success")
    document.title = "TextUtils Light Mode"
  }
}

let showalert = (message, type)=>{
  setalert({
    msg : message,
    type : type
  })
}

  return (
    <>
      <Router>
        <Navbar title = "TextUtils" aboutText = "About Us" mode ={mode} textMode={textMode} toggleMode = {toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />}/>
            <Route path="/" element={<Textform heading = "Enter the text to analyze" form={form} formText={formText}/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
