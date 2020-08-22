import React from 'react';
import ImageContainer from '../ImageContainer/ImageContainer';

class MainContainer extends React.Component{
    constructor(props: any){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <div>
                <ImageContainer />
            </div>
        );
    }
}

export default MainContainer;