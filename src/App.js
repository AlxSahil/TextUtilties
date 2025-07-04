// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import AboutPage from './components/AboutPage';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
 } from 'react-router-dom';


function App() {
const[mode,setmode]=useState("light");
const[malert,setmalert]=useState(null);
// document.title="textutils home";
const showAlert= (ymsg, ytype)=>{
setmalert({
msg:ymsg,
type:ytype
});
setTimeout(() => {
  setmalert(null);
}, 1000);
}
const myFunction= ()=> {
if(mode==='light'){
  setmode('dark');
  document.body.style.backgroundColor='black';
  showAlert("your darkmode is activated", "success");
  // setInterval(() => {
  //    document.title="TextUtills-DarkMode"
  // }, 2000);
  //  setInterval(() => {
  //    document.title="TextUtills-Home"
  // }, 1500);
 
}
else{
  setmode('light');
   document.body.style.backgroundColor='white';
    showAlert("your Light mode is activated", "success");
}

console.log(mode);

}

  return (
// App.js
<>
<Router basename="/TextUtilities">
  <Navbar title="Textutills" mode={mode} myfunction={myFunction}/>
  <Alert alert={malert} />
  <Routes>
    <Route exect path="/" element={
      <div className='container'>
        <Textform heading="Enter your Text here" mode={mode} showAlert={showAlert}/>
      </div>
    } />
    <Route exect path="/about" element={
    <AboutPage mode={mode}/>
     } />
  </Routes>
</Router>





</>



  );
}

export default App;

