import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MainContainer from './Components/MainContainer/MainContainer';
import PopUpContainer from './Components/PopUpContainer/PopUpContainer';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


function App() {

  return (
    <div className="App">
      {/* <div className="background"></div> */}
      {/* <div className="background-grain"></div> */}
      <MainContainer />
      
      <PopUpContainer />

      <div className="audioplayer">
        <AudioPlayer
          autoPlay
          src="http://solaris.octavcodrea.com/speech.mp3"
          onPlay={e => console.log("onPlay")}
          // other props here
        />

      </div>
    </div>
  );
}

export default App;
