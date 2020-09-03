import React from 'react';

interface PopUpTypes{
    appliedstyle: object,
    id: string,
    content: any
}

const PopUp = (props: PopUpTypes) =>{

    return(
        <div id={props.id} style={props.appliedstyle}>
            {props.content}
        </div>
    )
}

export default PopUp;