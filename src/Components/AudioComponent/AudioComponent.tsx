import React, { CSSProperties } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

interface StylesDictionary{
    [Key: string]: CSSProperties;
}

interface AudioCompProps{
    startPlaying: any,
    playStarted: boolean
}

const AudioComponent = (props: AudioCompProps) =>{

    const styles:StylesDictionary  = {
        playerStylePlaying:{
          display: 'flex',
          position: 'absolute',
          zIndex: 100,
    
          width: '200px',
          padding: '10px',
          bottom: '1px',
          right: '1px',
          transition: "2s"
        //   backgroundColor: "red"
        },
    
        playerStyleIntro:{
            display: 'flex',
            position: 'absolute',
            zIndex: 100,
      
            width: '200px',
            // padding: '10px',
            bottom: '70%',
            right: '50%',
            transform: 'scale(2) translateX(25%)',
            boxShadow: '10px 10px 78px -6px rgba(0,0,50,0.75)',
            transition: '2s'
          //   backgroundColor: "red"
        }
      }
    

    return(
        <div className="audioplayer" style={props.playStarted? styles.playerStylePlaying : styles.playerStyleIntro }>
        <AudioPlayer
            // autoPlay
            src="http://solaris.octavcodrea.com/speech.mp3"
            onPlay={props.startPlaying}
            // other props here
        />

      </div>
    )
}

export default AudioComponent;