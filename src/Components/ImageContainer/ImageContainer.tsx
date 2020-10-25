import React, {CSSProperties} from 'react';
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


interface icProps{
    playStarted: boolean,
    flickerEyes: boolean,
    isEnding: boolean
}

interface icState{
    flickerStarted: boolean
}

interface StylesDictionary{
    [Key: string]: CSSProperties;
}


class ImageContainer extends React.Component<icProps, icState>{

    //Container for all the image parts and particles

    constructor(props: icProps){
        super(props)

        this.state = {
            flickerStarted: false
        }
    }

    styles:StylesDictionary  = {
        icIntroStyle:{
            margin: 'auto',
            position: 'relative',
            height: '900px',
            width: '800px',
            opacity: '0.1'
            // mixBlendMode: 'screen'
            
        },

        icPlayingStyle:{
            margin: 'auto',
            position: 'relative',
            height: '900px',
            width: '800px',
            animation: 'fadeIn 7s 1'
        },

        eyesFlicker:{
            animation: "eyesFlicker 2s steps(1) infinite"
        },

        ending:{
            transition: "2s",
            animation: `floatEnding ${(Math.random() * 5) + 3}s 1`,
            animationFillMode: "forwards",
            // animationDelay: `${Math.random() * 3}s`
        },

        null:{

        }
    }

    arr = ["pC1", "pC2", "pC3", "pC4", "pC5", "pC6", "pC7", "pC8" ];

    particles = this.arr.map(element => 
        formatParticle(element)
    )

    // flickerEyes = () =>{
    //     if (this.state.flickerStarted === false){
    //         let eye = document.getElementById("eyeColor");    
    //     }
    // }
    
    render(){
        return(
            <div className="imageContainer" 
            style={this.props.playStarted? this.styles.icPlayingStyle : this.styles.icIntroStyle}>
                <div className="headContainer">
                    <div className="head-front" style={this.props.isEnding? this.styles.ending : this.styles.null}>
                        <ImagePart imagetype='head-front-color'/>
                        <ImagePart imagetype='head-front-lineart'/>
                    </div>

                    <div className="head-back" style={this.props.isEnding? this.styles.ending : this.styles.null}>
                        <ImagePart imagetype='head-back-color'/>
                        <ImagePart imagetype='head-back-lineart'/>
                    </div>
                </div>

                <div className="faceContainer" style={this.props.isEnding? this.styles.ending : this.styles.null}>
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
                        <div className="lens-left">
                            <ImagePart imagetype='eye-left-lens'
                            flickerEyes={this.props.flickerEyes} />
                        </div>
                        <ImagePart imagetype='eye-left-lineart'/>
                    </div>

                    <div className="eye-right">
                        <ImagePart imagetype='eye-right-color' />
                        <div className="lens-right">
                            <ImagePart imagetype='eye-right-lens'
                            flickerEyes={this.props.flickerEyes} />
                        </div>
                        <ImagePart imagetype='eye-right-lineart'/>
                    </div>
                </div>

                <div className="mouthContainer" style={this.props.isEnding? this.styles.ending : this.styles.null}>
                    <div className="mouth-back">
                    <ImagePart imagetype='mouth-back-color'/>
                    <ImagePart imagetype='mouth-back-lineart'/>
                    </div>

                    <div className="mouth-front">
                    <ImagePart imagetype='mouth-front-color'/>
                    <ImagePart imagetype='mouth-front-lineart'/>
                    </div>
                </div>

                <div className="brain" style={this.props.isEnding? this.styles.ending : this.styles.null}>
                    <ImagePart imagetype='brain-color'/>
                    <ImagePart imagetype='brain-lineart'/>
                </div>

                <div className="brain-wires" style={this.props.isEnding? this.styles.ending : this.styles.null}>
                    <ImagePart imagetype='brain-wires-color'/>
                    <ImagePart imagetype='brain-wires-lineart'/>
                </div>

                <div className="cheek-left" style={this.props.isEnding? this.styles.ending : this.styles.null}>
                    <ImagePart imagetype='cheek-left-color'/>
                    <ImagePart imagetype='cheek-left-lineart'/>
                </div>

                <div className="cheek-right" style={this.props.isEnding? this.styles.ending : this.styles.null}>
                    <ImagePart imagetype='cheek-right-color'/>
                    <ImagePart imagetype='cheek-right-lineart'/>
                </div>

                <div className="ear-left" style={this.props.isEnding? this.styles.ending : this.styles.null}>
                    <ImagePart imagetype='ear-left-color'/>
                    <ImagePart imagetype='ear-left-lineart'/>
                </div>

                <div className="ear-right" style={this.props.isEnding? this.styles.ending : this.styles.null}>
                <ImagePart imagetype='ear-right-color'/>
                <ImagePart imagetype='ear-right-lineart'/>
                </div>

                <div className="neck-front" style={this.props.isEnding? this.styles.ending : this.styles.null}>
                    <ImagePart imagetype='neck-front-color'/>
                    <ImagePart imagetype='neck-front-lineart'/>
                </div>

                <div className="neck-front-left" style={this.props.isEnding? this.styles.ending : this.styles.null}>
                    <ImagePart imagetype='neck-front-left-color'/>
                    <ImagePart imagetype='neck-front-left-lineart'/>
                </div>

                <div className="neck-front-right" style={this.props.isEnding? this.styles.ending : this.styles.null}>
                    <ImagePart imagetype='neck-front-right-color'/>
                    <ImagePart imagetype='neck-front-right-lineart'/>
                </div>

                <div className="neck-back" style={this.props.isEnding? this.styles.ending : this.styles.null}>
                    <ImagePart imagetype='neck-back-color'/>
                    <ImagePart imagetype='neck-back-lineart'/>
                </div>

                <div className="neck-back-left" style={this.props.isEnding? this.styles.ending : this.styles.null}>
                    <ImagePart imagetype='neck-back-left-color'/>
                    <ImagePart imagetype='neck-back-left-lineart'/>
                </div>

                <div className="neck-back-right" style={this.props.isEnding? this.styles.ending : this.styles.null}>
                    <ImagePart imagetype='neck-back-right-color'/>
                    <ImagePart imagetype='neck-back-right-lineart'/>
                </div>

                <div className="neck-base" style={this.props.isEnding? this.styles.ending : this.styles.null}>
                    <ImagePart imagetype='neck-base-color'/>
                    <ImagePart imagetype='neck-base-lineart'/>
                </div>

                <div className="neck-front" style={this.props.isEnding? this.styles.ending : this.styles.null}>
                    <ImagePart imagetype='neck-front-color'/>
                    <ImagePart imagetype='neck-front-lineart'/>
                </div>

                <div className="neck-inside1" style={this.props.isEnding? this.styles.ending : this.styles.null}>
                    <ImagePart imagetype='neck-inside1-color'/>
                    <ImagePart imagetype='neck-inside1-lineart'/>
                </div>

                <div className="neck-inside2" style={this.props.isEnding? this.styles.ending : this.styles.null}>
                    <ImagePart imagetype='neck-inside2-color'/>
                    <ImagePart imagetype='neck-inside2-lineart'/>
                </div>

                <div className="wires-mouth" style={this.props.isEnding? this.styles.ending : this.styles.null}>
                    <ImagePart imagetype='wires-mouth-color'/>
                    <ImagePart imagetype='wires-mouth-lineart'/>
                </div>

                <div className="background-circle circle1">
                </div>

                <div className="background-circle circle2">
                </div>

                <div className="background-circle circle3">
                </div>

                <div className="background-circle circle4">
                </div>

                <div className="background-circle circle5">
                </div>

                {this.particles}

            </div>
        );
    }
}

export default ImageContainer;