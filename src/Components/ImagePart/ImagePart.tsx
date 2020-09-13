import React, {CSSProperties} from 'react';
import { imgHeadFrontColor, imgHeadFrontLineart, imgBrainColor, imgBrainLineart, imgBrainWiresColor, imgBrainWiresLineart, 
    imgCheekLeftColor, imgCheekLeftLineart, imgCheekRightColor, imgCheekRightLineart, imgEarLeftColor, imgEarLeftLineart, 
    imgEarRightColor, imgEarRightLineart, imgEyeColor, imgEyeLineart, imgFaceBackColor, imgFaceBackLineart, imgFaceFrontColor, 
    imgFaceFrontLineart, imgHeadBackColor, imgHeadBackLineart, imgMouthBackColor, imgMouthBackLineart, imgMouthFrontColor, 
    imgMouthFrontLineart, imgNeckBackColor, imgNeckBackLineart, imgNeckBackLeftColor, imgNeckBackLeftLineart, imgNeckBackRightColor, 
    imgNeckBackRightLineart, imgNeckFrontColor, imgNeckFrontLineart, imgNeckFrontLeftColor, imgNeckFrontLeftLineart, 
    imgNeckFrontRightColor, imgNeckFrontRightLineart, imgNeckInside1Color, imgNeckInside1Lineart, imgNeckInside2Color, 
    imgNeckInside2Lineart, imgNeckBaseColor, imgNeckBaseLineart, imgNoseColor, imgNoseLineart, imgWiresMouthColor, imgWiresMouthLineart, imgEyeLens } from "../images.js";

interface imagePartTypes {
    imagetype: string,
    flickerEyes?: any
}

interface StylesDictionary{
    [Key: string]: CSSProperties;
}

const ImagePart : React.FC<imagePartTypes> = ({imagetype, flickerEyes}) => {
    const styles:StylesDictionary  = {
        eyesFlicker:{
            animation: "eyesFlicker 2s steps(2) infinite"
        }
    }


    switch(imagetype){
        default: return null;
        case "head-front-color": return(
            <svg className="image color1" id={imagetype} >
                {/* {insertGradient("grad1")} */}
                {imgHeadFrontColor()}
            </svg>);
        case "head-front-lineart": return(<svg className="image lineart" id={imagetype}>{imgHeadFrontLineart()}</svg>);
        
        case "brain-color": return(
        <svg className="image color1" id={imagetype} >
            {/* {insertGradient("grad2")} */}
            {imgBrainColor()}
            </svg>);
        case "brain-lineart": return(<svg className="image lineart" id={imagetype}>{imgBrainLineart()}</svg>);

        case "brain-wires-color": return(
        <svg className="image color1" id={imagetype} >
            {/* {insertGradient("grad2")} */}
            {imgBrainWiresColor()}
            </svg>);
        case "brain-wires-lineart": return(<svg className="image lineart" id={imagetype}>{imgBrainWiresLineart()}</svg>);

        case "cheek-left-color": return(
        <svg className="image color1" id={imagetype} >
            {imgCheekLeftColor()}
            </svg>);
        case "cheek-left-lineart": return(<svg className="image lineart" id={imagetype}>{imgCheekLeftLineart()}</svg>);

        case "cheek-right-color": return(
        <svg className="image color1" id={imagetype}  >
            {imgCheekRightColor()}</svg>);
        case "cheek-right-lineart": return(<svg className="image lineart" id={imagetype}>{imgCheekRightLineart()}</svg>);

        case "ear-left-color": return(<svg className="image color1" id={imagetype} >
            {imgEarLeftColor()}</svg>);
        case "ear-left-lineart": return(<svg className="image lineart" id={imagetype}>{imgEarLeftLineart()}</svg>);

        case "ear-right-color": return(<svg className="image color1" id={imagetype} >
            {imgEarRightColor()}</svg>);
        case "ear-right-lineart": return(<svg className="image lineart" id={imagetype}>{imgEarRightLineart()}</svg>);

        case "eye-left-color": return(
        <svg className="image color1" id={imagetype} 
            // style={flickerEyes? styles.eyesFlicker : undefined}
        >
            {/* {insertGradient("grad4")} */}
            {imgEyeColor()}</svg>);

        case "eye-left-lens": return(
        <svg className="image color1" id={imagetype} 
            style={flickerEyes? styles.eyesFlicker : undefined}
        >

            {imgEyeLens()}</svg>);
        case "eye-left-lineart": return(<svg className="image lineart" id={imagetype}>{imgEyeLineart()}</svg>);

        case "eye-right-color": return(
        <svg className="image color1" id={imagetype} 
            // style={flickerEyes? styles.eyesFlicker : undefined}
        >
            {/* {insertGradient("grad4")} */}
            {imgEyeColor()}</svg>);

        case "eye-right-lens": return(
            <svg className="image color1" id={imagetype} 
                style={flickerEyes? styles.eyesFlicker : undefined}
            >
                {imgEyeLens()}</svg>);

        case "eye-right-lineart": return(<svg className="image lineart" id={imagetype}>{imgEyeLineart()}</svg>);

        case "face-back-color": return(
        <svg className="image color1" id={imagetype} >
            {/* {insertGradient("grad3")} */}
            {imgFaceBackColor()}
            </svg>);
        case "face-back-lineart": return(<svg className="image lineart" id={imagetype}>{imgFaceBackLineart()}</svg>);

        case "face-front-color": return(<svg className="image color1" id={imagetype} >{imgFaceFrontColor()}</svg>);
        case "face-front-lineart": return(<svg className="image lineart" id={imagetype} >
            {/* {insertGradient("lineartgrad1")} */}
            {imgFaceFrontLineart()}</svg>);

        case "head-back-color": return(
        <svg className="image color1" id={imagetype} >
            {/* {insertGradient("grad3")} */}
            {imgHeadBackColor()}
            </svg>);
        case "head-back-lineart": return(<svg className="image lineart" id={imagetype}>{imgHeadBackLineart()}</svg>);

        case "mouth-back-color": return(
        <svg className="image color1" id={imagetype} >
            {/* {insertGradient("grad3")} */}
            {imgMouthBackColor()}</svg>);
        case "mouth-back-lineart": return(<svg className="image lineart" id={imagetype}>{imgMouthBackLineart()}</svg>);

        case "mouth-front-color": return(<svg className="image color1" id={imagetype}>{imgMouthFrontColor()}</svg>);
        case "mouth-front-lineart": return(<svg className="image lineart" id={imagetype}>{imgMouthFrontLineart()}</svg>);

        case "neck-back-color": return(<svg className="image color1" id={imagetype}>
             {/* {insertGradient("grad3")} */}
            {imgNeckBackColor()}</svg>);
        case "neck-back-lineart": return(<svg className="image lineart" id={imagetype}>{imgNeckBackLineart()}</svg>);

        case "neck-back-left-color": return(<svg className="image color1" id={imagetype} >
             {/* {insertGradient("grad3")} */}
             {imgNeckBackLeftColor()}</svg>);
        case "neck-back-left-lineart": return(<svg className="image lineart" id={imagetype}>{imgNeckBackLeftLineart()}</svg>);

        case "neck-back-right-color": return(<svg className="image color1" id={imagetype} >
             {/* {insertGradient("grad3")} */}
            {imgNeckBackRightColor()}</svg>);
        case "neck-back-right-lineart": return(<svg className="image lineart" id={imagetype}>{imgNeckBackRightLineart()}</svg>);

        case "neck-front-color": return(<svg className="image color1" id={imagetype}>{imgNeckFrontColor()}</svg>);
        case "neck-front-lineart": return(<svg className="image lineart" id={imagetype}>{imgNeckFrontLineart()}</svg>);

        case "neck-front-left-color": return(<svg className="image color1" id={imagetype} >{imgNeckFrontLeftColor()}</svg>);
        case "neck-front-left-lineart": return(<svg className="image lineart" id={imagetype}>{imgNeckFrontLeftLineart()}</svg>);

        case "neck-front-right-color": return(<svg className="image color1" id={imagetype} >{imgNeckFrontRightColor()}</svg>);
        case "neck-front-right-lineart": return(<svg className="image lineart" id={imagetype}>{imgNeckFrontRightLineart()}</svg>);

        case "neck-inside1-color": return(<svg className="image color1" id={imagetype} >{imgNeckInside1Color()}</svg>);
        case "neck-inside1-lineart": return(<svg className="image lineart" id={imagetype}>{imgNeckInside1Lineart()}</svg>);
        
        case "neck-inside2-color": return(
        <svg className="image color1" id={imagetype} >
            {/* {insertGradient("grad3")} */}
            {imgNeckInside2Color()}
        </svg>);
        case "neck-inside2-lineart": return(<svg className="image lineart" id={imagetype}>{imgNeckInside2Lineart()}</svg>);
        
        case "neck-base-color": return(<svg className="image color1" id={imagetype} >{imgNeckBaseColor()}</svg>);
        case "neck-base-lineart": return(<svg className="image lineart" id={imagetype}>{imgNeckBaseLineart()}</svg>);

        case "nose-color": return(<svg className="image color1" id={imagetype} >{imgNoseColor()}</svg>);
        case "nose-lineart": return(<svg className="image lineart" id={imagetype}>{imgNoseLineart()}</svg>);

        case "wires-mouth-color": return(<svg className="image color1" id={imagetype} >{imgWiresMouthColor()}</svg>);
        case "wires-mouth-lineart": return(<svg className="image lineart" id={imagetype}>{imgWiresMouthLineart()}</svg>);

    }


}
export default ImagePart;