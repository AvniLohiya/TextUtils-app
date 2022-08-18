import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert=(msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const handleToggling=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='#0c3762';
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils-Dark Mode";
      //to give blinkinng effect in title
      /*setInterval(()=>{
        document.title="Install TextUtils Now";
      },1000)
      setInterval(()=>{
        document.title="TextUtils is amazing";
      },500)*/
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title="TextUtils-Light Mode";
    }
  }

  return (
    
    <>
    {/*<Router>*/}
     
    <Navbar title="TextUtils" mode={mode} toggleMode={handleToggling}/>
    <Alert alert={alert}/>
    <div className='container'>
    {/* <Routes> */}
          {/* <Route path="/about" element={<About />}>
          </Route>
          <Route path="/" element={*/}<Textform heading='Text Analyzer' mode={mode} showAlert={showAlert}/>{/*/}>
          </Route>
    </Routes>*/} 
    </div>
    {/* </Router> */}
    </>
    
  );
}

export default App;
