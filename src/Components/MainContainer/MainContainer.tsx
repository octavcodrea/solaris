import React from 'react';
import ImageContainer from '../ImageContainer/ImageContainer';
import PopUpContainer from '../PopUpContainer/PopUpContainer';
import AudioComponent from '../AudioComponent/AudioComponent';
import IntroCard from '../IntroCard/IntroCard';
import Sound from 'react-sound';
import { bgurl } from "../../Audio/audiourls";

interface MainContainerProps{

}

interface MainContainerState{
    playStarted: boolean,
    playTime: number,
    isPlaying: boolean,
    showCredits: boolean,
    flickerEyes: boolean,
    bgSoundStatus: "PLAYING" | "STOPPED" | "PAUSED",
    globalVolume: number,
    isEnding: boolean
}

class MainContainer extends React.Component<MainContainerProps, MainContainerState>{
    constructor(props: any){
        super(props);

        this.state = {
            playStarted: false,
            playTime: 0, 
            isPlaying: false,
            showCredits: false,
            flickerEyes: false,
            bgSoundStatus: "STOPPED",
            globalVolume: 1,
            isEnding: false
        }
    }

    startPlaying = () =>{
        if(this.state.playStarted === false){
            this.setState({
                playStarted: true,
                isPlaying: true,
                bgSoundStatus: "PLAYING" 
                
            });

            this.increasePlaytime();
        };

        if(this.state.playStarted === true && this.state.isPlaying === false){
            this.setState({
                isPlaying: true,
                bgSoundStatus: "PLAYING" 
            })
        };
    }

    increasePlaytime = () =>{
        if(this.state.isPlaying === true){
            this.setState({
                playTime: this.state.playTime + 25
            });
            if(this.state.playTime >= 26100 && this.state.isEnding === false){
                this.setState({
                    isEnding: true
                });               
            }
        };

        setTimeout (() => this.increasePlaytime(), 250);
    }

    pausePlaying = () =>{
        this.setState({
            isPlaying: false,
            bgSoundStatus: "PAUSED" 
        })
    }

    changeGlobalVolume = (e: any) =>{
        this.setState({
            globalVolume: e.target.volume 
        })
    }

    flickerEyes = () =>{
        if (this.state.flickerEyes === false){
            this.setState({
                flickerEyes: true
            })
            setTimeout(() => this.flickerEyes(), (Math.random() * 2000 + 500));

            setTimeout(() => this.flickerEyes(), Math.random() * 40000)
        }else{
            this.setState({
                flickerEyes: false
            })
        }
    }

    checkEndPlaying = () =>{
        if (this.state.playTime > 26700){
            this.setState({
                playStarted: false,
                playTime: 0, 
                isPlaying: false,
                showCredits: true,
                isEnding: false
            })
        }
    }

    render(){
        this.checkEndPlaying();
        return(
            <div>
                <PopUpContainer 
                    playStarted={this.state.playStarted}
                    playTime={this.state.playTime}
                    isPlaying={this.state.isPlaying}
                    flickerEyesProp={this.state.flickerEyes}
                    flickerEyesFunc={this.flickerEyes}
                />

                <ImageContainer 
                    playStarted={this.state.playStarted}
                    flickerEyes={this.state.flickerEyes}
                    isEnding={this.state.isEnding}
                />

                <div>
                    <AudioComponent
                        startPlaying={this.startPlaying}
                        playStarted={this.state.playStarted}
                        pausePlaying={this.pausePlaying}
                        onVolChange={(e: any) => this.changeGlobalVolume(e)}
                    />

                    <Sound
                        url={bgurl}
                        playStatus={this.state.bgSoundStatus}
                        volume={this.state.globalVolume * 75}
                        // playFromPosition={0}
                        />
                    
                    <IntroCard playStarted={this.state.playStarted} 
                            showCredits={this.state.showCredits} />
                </div>
            </div>
        );
    }
}

export default MainContainer;