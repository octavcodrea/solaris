import React from 'react';
import ImageContainer from '../ImageContainer/ImageContainer';
import PopUpContainer from '../PopUpContainer/PopUpContainer';
import AudioComponent from '../AudioComponent/AudioComponent';

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

                <AudioComponent
                    startPlaying={this.startPlaying}
                    playStarted={this.state.playStarted}
                />
            </div>
        );
    }
}

export default MainContainer;