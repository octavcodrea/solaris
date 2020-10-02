import React, { CSSProperties } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { speechurl } from "../../Audio/audiourls";

interface StylesDictionary{
    [Key: string]: CSSProperties;
}

interface AudioCompProps{
    startPlaying: any,
    playStarted: boolean,
    pausePlaying: any,
    onVolChange?: any,
    onEnded?: any
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
          transition: "2s",

          opacity: '0.4'
          
        //   backgroundColor: "red"
        },
    
        playerStyleIntro:{
            display: 'flex',
            position: 'absolute',
            zIndex: 100,
      
            width: '200px',
            // padding: '10px',
            bottom: '60%',
            right: '50%',
            transform: 'scale(1.5) translateX(34%)',
            boxShadow: '10px 10px 78px -6px rgba(0,0,50,0.75)',
            transition: '2s',
            animation: 'fadeIn 2s 1',
            opacity: 1,
            overflowX: 'hidden'
          //   backgroundColor: "red"
        }
      }
    

    return(
        <div className="audioplayer" style={props.playStarted? styles.playerStylePlaying : styles.playerStyleIntro }>
          <AudioPlayer
              // autoPlay
              src={speechurl}
              onPlay={props.startPlaying}
              onPause={props.pausePlaying}
              onVolumeChange={props.onVolChange}
              onEnded={props.onEnded}
              // other props here
          />

      </div>
    )
}

export default AudioComponent;