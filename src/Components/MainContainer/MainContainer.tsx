import React from 'react';
import ImageContainer from '../ImageContainer/ImageContainer';
import PopUpContainer from '../PopUpContainer/PopUpContainer';
import AudioComponent from '../AudioComponent/AudioComponent';
import IntroCard from '../IntroCard/IntroCard';

interface MainContainerProps{

}

interface MainContainerState{
    playStarted: boolean,
    playTime: number,
    isPlaying: boolean,
    flickerEyes: boolean
}

class MainContainer extends React.Component<MainContainerProps, MainContainerState>{
    constructor(props: any){
        super(props);

        this.state = {
            playStarted: false,
            playTime: 0, 
            isPlaying: false,
            flickerEyes: false
        }
    }

    startPlaying = () =>{
        if(this.state.playStarted === false){
            this.setState({
                playStarted: true,
                isPlaying: true
            });

            this.increasePlaytime();
        };

        if(this.state.playStarted === true && this.state.isPlaying === false){
            this.setState({
                isPlaying: true
            })
        };
    }

    increasePlaytime = () =>{
        if(this.state.isPlaying === true){
            this.setState({
                playTime: this.state.playTime + 25
            });
        };

        setTimeout (() => this.increasePlaytime(), 250);
    }

    pausePlaying = () =>{
        this.setState({
            isPlaying: false
        })
    }

    flickerEyes = () =>{
        if (this.state.flickerEyes === false){
            this.setState({
                flickerEyes: true
            })
            setTimeout(() => this.flickerEyes(), 3000);
        }else{
            this.setState({
                flickerEyes: false
            })
        }
    }

    render(){
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
                />

                <div>
                    <AudioComponent
                        startPlaying={this.startPlaying}
                        playStarted={this.state.playStarted}
                        pausePlaying={this.pausePlaying}
                    />
                    
                    <IntroCard playStarted={this.state.playStarted} />
                </div>
            </div>
        );
    }
}

export default MainContainer;