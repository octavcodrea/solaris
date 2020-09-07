import React from 'react';
import ImageContainer from '../ImageContainer/ImageContainer';
import PopUpContainer from '../PopUpContainer/PopUpContainer';
import AudioComponent from '../AudioComponent/AudioComponent';
import IntroCard from '../IntroCard/IntroCard';

interface MainContainerProps{

}

interface MainContainerState{
    playStarted: boolean
}

class MainContainer extends React.Component<MainContainerProps, MainContainerState>{
    constructor(props: any){
        super(props);

        this.state = {
            playStarted: false
        }
    }

    startPlaying = () =>{
        this.setState({
            playStarted: true
        })
    }

    render(){
        return(
            <div>
                <PopUpContainer 
                    playStarted={this.state.playStarted}
                />

                <ImageContainer 
                    playStarted={this.state.playStarted}
                />

<<<<<<< Updated upstream
                <AudioComponent
                    startPlaying={this.startPlaying}
                    playStarted={this.state.playStarted}
                />
=======
                <div>
                    <AudioComponent
                        startPlaying={this.startPlaying}
                        playStarted={this.state.playStarted}
                        pausePlaying={this.pausePlaying}
                    />
                    
                    <IntroCard playStarted={this.state.playStarted} />
                </div>
>>>>>>> Stashed changes
            </div>
        );
    }
}

export default MainContainer;