
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
//import About from './Components/About';
import Alert from './Components/Alert';
import React, { useState} from 'react'
//import { Routes, Route} from 'react-router-dom';
//import { BrowserRouter as Router } from 'react-router-dom';


function App() {
   const [mode, setmode]=useState('light');
    const [alert, setAlert]=useState(null);
    const showAlert=(message, type)=>{
      setAlert({
          msg:message,
          type:type
      })
      setTimeout(()=> {
          setAlert(null);
      }, 1500);
    }
    const toggleMode=()=>{
      if(mode==='light'){
        setmode('dark');
        document.body.style.backgroundColor='#042743';
        showAlert("Dark Mode Enable","success");
      }
      else{
        setmode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light Mode Enable","success");
      }
    }
  return (
    <>
    {/*<Router>*/}
    <Navbar title="My Project" mode={mode} toggleMode={toggleMode} About="About Project"/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/*<Routes>
          <Route exact path="/about" element={<About />}>
            
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text To Aanlyze" mode={mode}/>}>
          
          </Route>
        </Routes>*/}
        <TextForm showAlert={showAlert} heading="Enter The Text To Aanlyze" mode={mode}/>
        </div>
        {/*</Router>*/}
        

   
    
    </>
  );
}

export default App;
