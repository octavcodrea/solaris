import React from 'react';
import { imgHeadFrontColor, imgHeadFrontLineart, imgBrainColor, imgBrainLineart, imgBrainWiresColor, imgBrainWiresLineart, 
    imgCheekLeftColor, imgCheekLeftLineart, imgCheekRightColor, imgCheekRightLineart, imgEarLeftColor, imgEarLeftLineart, 
    imgEarRightColor, imgEarRightLineart, imgEyeColor, imgEyeLineart, imgFaceBackColor, imgFaceBackLineart, imgFaceFrontColor, 
    imgFaceFrontLineart, imgHeadBackColor, imgHeadBackLineart, imgMouthBackColor, imgMouthBackLineart, imgMouthFrontColor, 
    imgMouthFrontLineart, imgNeckBackColor, imgNeckBackLineart, imgNeckBackLeftColor, imgNeckBackLeftLineart, imgNeckBackRightColor, 
    imgNeckBackRightLineart, imgNeckFrontColor, imgNeckFrontLineart, imgNeckFrontLeftColor, imgNeckFrontLeftLineart, 
    imgNeckFrontRightColor, imgNeckFrontRightLineart, imgNeckInside1Color, imgNeckInside1Lineart, imgNeckInside2Color, 
    imgNeckInside2Lineart, imgNeckBaseColor, imgNeckBaseLineart, imgNoseColor, imgNoseLineart, imgWiresMouthColor, imgWiresMouthLineart } from "../images.js";

interface IButtonProps {
    /** The text inside the button */
    imagetype: string

}

// { imgHeadFrontColor, imgHeadFrontLineart, imgBrainColor, imgBrainLineart, imgBrainWiresColor, imgBrainWiresLineart, 
    // imgCheekLeftColor, imgCheekLeftLineart, imgCheekRightColor, imgCheekRightLineart, imgEarLeftColor, imgEarLeftLineart, 
    // imgEarRightColor, imgEarRightLineart, imgEyeColor, imgEyeLineart, imgFaceBackColor, imgFaceBackLineart, imgFaceFrontColor, 
    // imgFaceFrontLineart, imgHeadBackColor, imgHeadBackLineart, imgMouthBackColor, imgMouthBackLineart, imgMouthFrontColor, 
    // imgMouthFrontLineart, imgNeckBackColor, imgNeckBackLineart, imgNeckBackLeftColor, imgNeckBackLeftLineart, imgNeckBackRightColor, 
    // imgNeckBackRightLineart, imgNeckFrontColor, imgNeckFrontLineart, imgNeckFrontLeftColor, imgNeckFrontLeftLineart, 
    // imgNeckFrontRightColor, imgNeckFrontRightLineart, imgNeckInside1Color, imgNeckInside1Lineart, imgNeckInside2Color, 
    // imgNeckInside2Lineart, imgNeckBaseColor, imgNeckBaseLineart, imgNoseColor, imgNoseLineart, imgWiresMouthColor, imgWiresMouthLineart };

    // let grad1 = {
    //     fill: "url(#gradientA)",
    // };

    // let grad2 = {
    //     fill: "url(#gradientB)",
    // };

    // let grad3 = {
    //     fill: "url(#gradientC)",
    // };

    // let grad4 = {
    //     fill: "url(#gradientD)",
    // };

    // let lineartgrad1 = {
    //     fill: "url(#gradientE)",
    // };

    // const insertGradient = (gradId: string) =>{
    //     switch(gradId){
    //         default: return(
    //             <linearGradient id="gradientA" x2="1" y2="1">
    //                 <stop offset="0%" stop-color="lightblue" stop-opacity="1">
    //                     <animate attributeName="stop-color" values="yellow;orange;red;yellow" dur="16s" repeatCount="indefinite" />
    //                 </stop>
    //                 <stop offset="100%" stop-color="lightblue" stop-opacity="1">
    //                     <animate attributeName="stop-color" values="orange;red;yellow;orange" dur="16s" repeatCount="indefinite" />
    //                     {/* <animate attributeName="offset" values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95" dur="8s" repeatCount="indefinite" /> */}
    //                 </stop>
    //         </linearGradient>
    //         )

    //         case "grad1": return(
    //             <radialGradient id="gradientA" x2="1" y2="1">
    //                 <stop offset="0%" stop-color="lightblue" stop-opacity="1">
    //                     <animate attributeName="stop-color" values="#F7931E;#c63468;#F7931E" dur="16s" repeatCount="indefinite" />
    //                 </stop>
    //                 {/* <stop offset="80%" stop-color="lightblue" stop-opacity="1">
    //                     <animate attributeName="stop-color" values="#c76822;#515d71;#c76822" dur="16s" repeatCount="indefinite" />

    //                 </stop> */}
    //                 <stop offset="100%" stop-color="lightblue" stop-opacity="1">
    //                     <animate attributeName="stop-color" values="#F7931E;#c63468;#F7931E" dur="16s" repeatCount="indefinite" />
    //                     {/* <animate attributeName="offset" values=".95;0;.95;1.2" dur="2s" repeatCount="indefinite" /> */}
    //                 </stop>

                        
    //                     {/* "#2d180b;#1d0f0c;#0b060e;#190517;#260520;#2a0f15;#2d180b"
    //                     "#c76822;#944b32;#6e6068;#842d52;#b8114f;#a85046;#ba753d"
    //                     "#ffd072;#f2dda4;#e6e2ce;#f5dcca;#ffdccc;#ffe2ac;#ffe0aa" */}
    //                 {/* </stop> */}
    //         </radialGradient>
    //         )

    //         case "grad2": return(
    //             <linearGradient id="gradientB" x2="1" y2="1">
    //                 <stop offset="0%" stop-color="lightblue" stop-opacity="1">
    //                     <animate attributeName="stop-color" values="#9E005D;" dur="16s" repeatCount="indefinite" />
    //                 </stop>
    //                 <stop offset="100%" stop-color="lightblue" stop-opacity="1">
    //                     <animate attributeName="stop-color" values="#9E005D;" dur="16s" repeatCount="indefinite" />
    //                     {/* <animate attributeName="offset" values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95" dur="32s" repeatCount="indefinite" /> */}
    //                 </stop>
    //         </linearGradient>
    //         )

    //         case "grad3": return(
    //             <linearGradient id="gradientC" x2="1" y2="1">
    //                 <stop offset="0%" stop-color="lightblue" stop-opacity="1">
    //                     <animate attributeName="stop-color" values="#F15A24;#842d52;#F15A24" dur="16s" repeatCount="indefinite" />
    //                 </stop>
    //                 {/* <stop offset="50%" stop-color="lightblue" stop-opacity="1">
    //                     <animate attributeName="stop-color" values="#944b32;" dur="16s" repeatCount="indefinite" />
    //                 </stop> */}
    //                 <stop offset="100%" stop-color="lightblue" stop-opacity="1">
    //                     <animate attributeName="stop-color" values="#F15A24;#842d52;#F15A24" dur="16s" repeatCount="indefinite" />
    //                     {/* <animate attributeName="offset" values=".95;0;.95;1.2" dur="2s" repeatCount="indefinite" /> */}
    //                 </stop>
    //         </linearGradient>
    //         )

    //         case "grad4": return(
    //             <linearGradient id="gradientD" x2="1" y2="1">
    //                 <stop offset="0%" stop-color="lightblue" stop-opacity="1">
    //                     <animate attributeName="stop-color" values="#ec534d;#fdd67c;#fcffcc;#fdd67c;#ec534d" dur="16s" repeatCount="indefinite" />
    //                 </stop>
    //                 <stop offset="100%" stop-color="lightblue" stop-opacity="1">
    //                     <animate attributeName="stop-color" values="#ec534d;#fdd67c;#fcffcc;#fdd67c;#ec534d" dur="16s" repeatCount="indefinite" />
    //                     {/* <animate attributeName="offset" values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95" dur="32s" repeatCount="indefinite" /> */}
    //                 </stop>
    //         </linearGradient>
    //         )

    //         case "lineartgrad1": return(
    //             <linearGradient id="gradientE" x2="1" y2="1">
    //                 <stop offset="0%" stop-color="lightblue" stop-opacity="1">
    //                     <animate attributeName="stop-color" values="#000000;#1b388a;#000000" dur="16s" repeatCount="indefinite" />
    //                 </stop>
    //                 <stop offset="100%" stop-color="lightblue" stop-opacity="1">
    //                     <animate attributeName="stop-color" values="#000000;#1b388a;#000000" dur="16s" repeatCount="indefinite" />
    //                     {/* <animate attributeName="offset" values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95" dur="32s" repeatCount="indefinite" /> */}
    //                 </stop>
    //         </linearGradient>
    //         )

    //     }
    // }


const ImagePart : React.FC<IButtonProps> = ({imagetype}) => {

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
        <svg className="image color1" id={imagetype} >
            {/* {insertGradient("grad4")} */}
            {imgEyeColor()}</svg>);
        case "eye-left-lineart": return(<svg className="image lineart" id={imagetype}>{imgEyeLineart()}</svg>);

        case "eye-right-color": return(<svg className="image color1" id={imagetype} >
            {/* {insertGradient("grad4")} */}
            {imgEyeColor()}</svg>);
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