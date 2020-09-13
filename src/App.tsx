import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MainContainer from './Components/MainContainer/MainContainer';


function App() {


  // const playApp = () =>{

  // } 

  return (
    <div className="App">
      <div className="foreground-overlay"></div>
      <div className="background"></div>
      <div className="background-grain"></div>
      <MainContainer />
    </div>
  );
}

export default App;
