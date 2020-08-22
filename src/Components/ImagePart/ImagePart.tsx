import React from 'react';
import { imgHeadFrontColor, imgHeadFrontLineart, imgBrainColor, imgBrainLineart, imgBrainWiresColor, imgBrainWiresLineart, 
    imgCheekLeftColor, imgCheekLeftLineart, imgCheekRightColor, imgCheekRightLineart, imgEarLeftColor, imgEarLeftLineart, 
    imgEarRightColor, imgEarRightLineart, imgEyeColor, imgEyeLineart, imgFaceBackColor, imgFaceBackLineart, imgFaceFrontColor, 
    imgFaceFrontLineart, imgHeadBackColor, imgHeadBackLineart, imgMouthBackColor, imgMouthBackLineart, imgMouthFrontColor, 
    imgMouthFrontLineart, imgNeckBackColor, imgNeckBackLineart, imgNeckBackLeftColor, imgNeckBackLeftLineart, imgNeckBackRightColor, 
    imgNeckBackRightLineart, imgNeckFrontColor, imgNeckFrontLineart, imgNeckFrontLeftColor, imgNeckFrontLeftLineart, 
    imgNeckFrontRightColor, imgNeckFrontRightLineart, imgNeckInside1Color, imgNeckInside1Lineart, imgNeckInside2Color, 
    imgNeckInside2Lineart, imgNeckBaseColor, imgNeckBaseLineart, imgNoseColor, imgNoseLineart, imgWiresMouthColor, imgWiresMouthLineart } from "../images.js";



// type AppProps = { message: string };

// const ImagePart = ({message: AppProps}) => {
//     return(
//         <div className="imagePart">
//         </div>
//     )
// }

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


const ImagePart : React.FC<IButtonProps> = ({imagetype}) => {

    switch(imagetype){
        default: return null;
        case "head-front-color": return(<div className="image color1" id={imagetype}>{imgHeadFrontColor()}</div>);
        case "head-front-lineart": return(<div className="image lineart" id={imagetype}>{imgHeadFrontLineart()}</div>);
        
        case "brain-color": return(<div className="image color1" id={imagetype}>{imgBrainColor()}</div>);
        case "brain-lineart": return(<div className="image lineart" id={imagetype}>{imgBrainLineart()}</div>);

        case "brain-wires-color": return(<div className="image color1" id={imagetype}>{imgBrainWiresColor()}</div>);
        case "brain-wires-lineart": return(<div className="image lineart" id={imagetype}>{imgBrainWiresLineart()}</div>);

        case "cheek-left-color": return(<div className="image color1" id={imagetype}>{imgCheekLeftColor()}</div>);
        case "cheek-left-lineart": return(<div className="image lineart" id={imagetype}>{imgCheekLeftLineart()}</div>);

        case "cheek-right-color": return(<div className="image color1" id={imagetype}>{imgCheekRightColor()}</div>);
        case "cheek-right-lineart": return(<div className="image lineart" id={imagetype}>{imgCheekRightLineart()}</div>);

        case "ear-left-color": return(<div className="image color1" id={imagetype}>{imgEarLeftColor()}</div>);
        case "ear-left-lineart": return(<div className="image lineart" id={imagetype}>{imgEarLeftLineart()}</div>);

        case "ear-right-color": return(<div className="image color1" id={imagetype}>{imgEarRightColor()}</div>);
        case "ear-right-lineart": return(<div className="image lineart" id={imagetype}>{imgEarRightLineart()}</div>);

        case "eye-left-color": return(<div className="image color1" id={imagetype}>{imgEyeColor()}</div>);
        case "eye-left-lineart": return(<div className="image lineart" id={imagetype}>{imgEyeLineart()}</div>);

        case "eye-right-color": return(<div className="image color1" id={imagetype}>{imgEyeColor()}</div>);
        case "eye-right-lineart": return(<div className="image lineart" id={imagetype}>{imgEyeLineart()}</div>);

        case "face-back-color": return(<div className="image color1" id={imagetype}>{imgFaceBackColor()}</div>);
        case "face-back-lineart": return(<div className="image lineart" id={imagetype}>{imgFaceBackLineart()}</div>);

        case "face-front-color": return(<div className="image color1" id={imagetype}>{imgFaceFrontColor()}</div>);
        case "face-front-lineart": return(<div className="image lineart" id={imagetype}>{imgFaceFrontLineart()}</div>);

        case "head-back-color": return(<div className="image color1" id={imagetype}>{imgHeadBackColor()}</div>);
        case "head-back-lineart": return(<div className="image lineart" id={imagetype}>{imgHeadBackLineart()}</div>);

        case "mouth-back-color": return(<div className="image color1" id={imagetype}>{imgMouthBackColor()}</div>);
        case "mouth-back-lineart": return(<div className="image lineart" id={imagetype}>{imgMouthBackLineart()}</div>);

        case "mouth-front-color": return(<div className="image color1" id={imagetype}>{imgMouthFrontColor()}</div>);
        case "mouth-front-lineart": return(<div className="image lineart" id={imagetype}>{imgMouthFrontLineart()}</div>);

        case "neck-back-color": return(<div className="image color1" id={imagetype}>{imgNeckBackColor()}</div>);
        case "neck-back-lineart": return(<div className="image lineart" id={imagetype}>{imgNeckBackLineart()}</div>);

        case "neck-back-left-color": return(<div className="image color1" id={imagetype}>{imgNeckBackLeftColor()}</div>);
        case "neck-back-left-lineart": return(<div className="image lineart" id={imagetype}>{imgNeckBackLeftLineart()}</div>);

        case "neck-back-right-color": return(<div className="image color1" id={imagetype}>{imgNeckBackRightColor()}</div>);
        case "neck-back-right-lineart": return(<div className="image lineart" id={imagetype}>{imgNeckBackRightLineart()}</div>);

        case "neck-front-color": return(<div className="image color1" id={imagetype}>{imgNeckFrontColor()}</div>);
        case "neck-front-lineart": return(<div className="image lineart" id={imagetype}>{imgNeckFrontLineart()}</div>);

        case "neck-front-left-color": return(<div className="image color1" id={imagetype}>{imgNeckFrontLeftColor()}</div>);
        case "neck-front-left-lineart": return(<div className="image lineart" id={imagetype}>{imgNeckFrontLeftLineart()}</div>);

        case "neck-front-right-color": return(<div className="image color1" id={imagetype}>{imgNeckFrontRightColor()}</div>);
        case "neck-front-right-lineart": return(<div className="image lineart" id={imagetype}>{imgNeckFrontRightLineart()}</div>);

        case "neck-inside1-color": return(<div className="image color1" id={imagetype}>{imgNeckInside1Color()}</div>);
        case "neck-inside1-lineart": return(<div className="image lineart" id={imagetype}>{imgNeckInside1Lineart()}</div>);
        
        case "neck-inside2-color": return(<div className="image color1" id={imagetype}>{imgNeckInside2Color()}</div>);
        case "neck-inside2-lineart": return(<div className="image lineart" id={imagetype}>{imgNeckInside2Lineart()}</div>);
        
        case "neck-base-color": return(<div className="image color1" id={imagetype}>{imgNeckBaseColor()}</div>);
        case "neck-base-lineart": return(<div className="image lineart" id={imagetype}>{imgNeckBaseLineart()}</div>);

        case "nose-color": return(<div className="image color1" id={imagetype}>{imgNoseColor()}</div>);
        case "nose-lineart": return(<div className="image lineart" id={imagetype}>{imgNoseLineart()}</div>);

        case "wires-mouth-color": return(<div className="image color1" id={imagetype}>{imgWiresMouthColor()}</div>);
        case "wires-mouth-lineart": return(<div className="image lineart" id={imagetype}>{imgWiresMouthLineart()}</div>);

    }


}
export default ImagePart;