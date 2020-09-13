import React, {CSSProperties} from 'react';

interface introTypes{
    playStarted: boolean,
    showCredits: boolean
}

interface StylesDictionary{
    [Key: string]: CSSProperties;
}


const IntroCard = (props: introTypes) =>{

if(props.showCredits === false){
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
}else{
    return(
        <div id="introCard" className={props.playStarted ? 'introCard-inactive' : 'introCard-active'}>
            <h1>if you'd choose between having an identity and not being in pain_<span>_</span></h1>
            <br/>
            <h2>Design & Programming:</h2>
            <p>Octav Codrea</p>
            <h2>Narrator & Text:</h2>
            <p>Mathias</p>
            <h2>Music:</h2>
            <p>Samuel Cartier</p>
        </div>
    )
}
}

export default IntroCard;