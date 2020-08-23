import React from 'react';
import ImagePart from '../ImagePart/ImagePart';

const formatParticle = (element: any) =>{
    let position: any = (Math.floor(Math.random() * 80)+10) + "%";
    let animDuration: any = (Math.floor(Math.random() * 7) + 4) + "s";
    let animID: any = (Math.floor(Math.random() * 2) + 1);
    let animDelay: any = (Math.floor(Math.random() * 4)) + "s";
    
    return(
        <div className="particleCircle" 
        id={element} 
        key={element}  
        style={{
            left: position,
            animation: `particleFloat${animID} infinite linear`,
            animationDuration: animDuration,
            animationDelay: animDelay
            }}>
    </div>
    )
}

class ImageContainer extends React.Component{

    arr = ["pC1", "pC2", "pC3", "pC4", "pC5", "pC6", "pC7", "pC8" ];


    particles = this.arr.map(element => 

        formatParticle(element)
    )
    



    render(){
        return(
            <div className="imageContainer">
                <div className="headContainer">
                    <div className="head-front">
                        <ImagePart imagetype='head-front-color'/>
                        <ImagePart imagetype='head-front-lineart'/>
                    </div>

                    <div className="head-back">
                        <ImagePart imagetype='head-back-color'/>
                        <ImagePart imagetype='head-back-lineart'/>
                    </div>
                </div>

                <div className="faceContainer">
                    <div className="face-front">
                        <ImagePart imagetype='face-front-color'/>
                        <ImagePart imagetype='face-front-lineart'/>
                    </div>

                    <div className="face-back">
                        <ImagePart imagetype='face-back-color'/>
                        <ImagePart imagetype='face-back-lineart'/>
                    </div>

                    <div className="nose">
                        <ImagePart imagetype='nose-color'/>
                        <ImagePart imagetype='nose-lineart'/>
                    </div>

                    <div className="eye-left">
                        <ImagePart imagetype='eye-left-color'/>
                        <ImagePart imagetype='eye-left-lineart'/>
                    </div>

                    <div className="eye-right">
                        <ImagePart imagetype='eye-right-color'/>
                        <ImagePart imagetype='eye-right-lineart'/>
                    </div>
                </div>

                <div className="mouthContainer">
                    <div className="mouth-back">
                    <ImagePart imagetype='mouth-back-color'/>
                    <ImagePart imagetype='mouth-back-lineart'/>
                    </div>

                    <div className="mouth-front">
                    <ImagePart imagetype='mouth-front-color'/>
                    <ImagePart imagetype='mouth-front-lineart'/>
                    </div>
                </div>

                <div className="brain">
                    <ImagePart imagetype='brain-color'/>
                    <ImagePart imagetype='brain-lineart'/>
                </div>

                <div className="brain-wires">
                    <ImagePart imagetype='brain-wires-color'/>
                    <ImagePart imagetype='brain-wires-lineart'/>
                </div>

                <div className="cheek-left">
                    <ImagePart imagetype='cheek-left-color'/>
                    <ImagePart imagetype='cheek-left-lineart'/>
                </div>

                <div className="cheek-right">
                    <ImagePart imagetype='cheek-right-color'/>
                    <ImagePart imagetype='cheek-right-lineart'/>
                </div>

                <div className="ear-left">
                    <ImagePart imagetype='ear-left-color'/>
                    <ImagePart imagetype='ear-left-lineart'/>
                </div>

                <div className="ear-right">
                <ImagePart imagetype='ear-right-color'/>
                <ImagePart imagetype='ear-right-lineart'/>
                </div>

                <div className="neck-front">
                    <ImagePart imagetype='neck-front-color'/>
                    <ImagePart imagetype='neck-front-lineart'/>
                </div>

                <div className="neck-front-left">
                    <ImagePart imagetype='neck-front-left-color'/>
                    <ImagePart imagetype='neck-front-left-lineart'/>
                </div>

                <div className="neck-front-right">
                    <ImagePart imagetype='neck-front-right-color'/>
                    <ImagePart imagetype='neck-front-right-lineart'/>
                </div>

                <div className="neck-back">
                    <ImagePart imagetype='neck-back-color'/>
                    <ImagePart imagetype='neck-back-lineart'/>
                </div>

                <div className="neck-back-left">
                    <ImagePart imagetype='neck-back-left-color'/>
                    <ImagePart imagetype='neck-back-left-lineart'/>
                </div>

                <div className="neck-back-right">
                    <ImagePart imagetype='neck-back-right-color'/>
                    <ImagePart imagetype='neck-back-right-lineart'/>
                </div>

                <div className="neck-base">
                    <ImagePart imagetype='neck-base-color'/>
                    <ImagePart imagetype='neck-base-lineart'/>
                </div>

                <div className="neck-front">
                    <ImagePart imagetype='neck-front-color'/>
                    <ImagePart imagetype='neck-front-lineart'/>
                </div>

                <div className="neck-inside1">
                    <ImagePart imagetype='neck-inside1-color'/>
                    <ImagePart imagetype='neck-inside1-lineart'/>
                </div>

                <div className="neck-inside2">
                    <ImagePart imagetype='neck-inside2-color'/>
                    <ImagePart imagetype='neck-inside2-lineart'/>
                </div>

                <div className="wires-mouth">
                    <ImagePart imagetype='wires-mouth-color'/>
                    <ImagePart imagetype='wires-mouth-lineart'/>
                </div>

                <div className="background-circle circle1">
                </div>

                <div className="background-circle circle2">
                </div>

                <div className="background-circle circle3">
                </div>

                {this.particles}

            </div>
        );
    }
}

export default ImageContainer;