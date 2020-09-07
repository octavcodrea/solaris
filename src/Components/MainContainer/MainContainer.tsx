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
    isPlaying: boolean
}

class MainContainer extends React.Component<MainContainerProps, MainContainerState>{
    constructor(props: any){
        super(props);

        this.state = {
            playStarted: false,
            playTime: 0, 
            isPlaying: false
        }
    }

    startPlaying = () =>{
        if(this.state.isPlaying === true){
            this.setState({
                playTime: this.state.playTime + 50
            })
            // console.log("playtime:", this.state.playTime);
        }else{
            this.setState({
                playStarted: true,
                isPlaying:true
            })
        }

        setTimeout(() => this.startPlaying(), 500)
    }

    pausePlaying = () =>{
        this.setState({
            playStarted: false
        })
    }

    render(){
        return(
            <div>
                <PopUpContainer 
                    playStarted={this.state.playStarted}
                    playTime={this.state.playTime}
                    isPlaying={this.state.isPlaying}
                />

                <ImageContainer 
                    playStarted={this.state.playStarted}
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