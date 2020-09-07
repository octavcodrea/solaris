import React, {CSSProperties} from 'react';

interface introTypes{
    playStarted: boolean
}

interface StylesDictionary{
    [Key: string]: CSSProperties;
}


const IntroCard = (props: introTypes) =>{


    return(
        <div id="introCard" className={props.playStarted ? 'introCard-inactive' : 'introCard-active'}>
            <h1>Profile<span>_</span></h1>
            <h2>User:</h2>
            <p>SC-12082125-US-M-C</p>
            <h2>Reasoning:</h2>
            <p>Reassignment</p>
            <h2>ETA:</h2>
            <p>4 min 30sec</p>
        </div>
    )
}

export default IntroCard;