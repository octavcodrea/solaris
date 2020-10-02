import React, { CSSProperties } from 'react';
// import PopUp from '../PopUp/PopUp';
// import ImageContainer from '../ImageContainer/ImageContainer';
import popups from '../popups';

interface IProps {
    playStarted: boolean,
    playTime: number,
    isPlaying: boolean,
    flickerEyesProp: boolean,
    flickerEyesFunc: any,
    playEnded: boolean
}

interface IState {
    counterStarted: boolean
}

interface StylesDictionary{
    [Key: string]: CSSProperties;
}

class PopUpContainer extends React.Component<IProps, IState>{
    constructor(props: any){
        super(props);

        this.state = {
            counterStarted: false
        }
    }

    uicolor1 = "#ff2d6c";
    uicolor2 = "#18ffb2";

    styles:StylesDictionary  = {
        popUpStyle1:{
            display: 'block',
            position: 'absolute',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            width: 'auto',
            height: 'auto',
            color: "black",
            backgroundColor: this.uicolor1,
            padding: "15px",
            fontFamily: "'Courier New', Courier, monospace",
            // left: {value: "0%", writable: true},
            // top: {value: "0%", writable: true},
            zIndex: 50,
            animation: "boxGlitch 0.5s infinite",
            animationTimingFunction: "step-end",
            overflowX: "hidden",
            overflowY: "hidden"
        },

        popUpStyle1Centered:{
            display: 'block',
            position: 'absolute',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            margin: "auto",
            width: 'auto',
            height: 'auto',
            color: "black",
            backgroundColor: this.uicolor1,
            padding: "15px",
            fontFamily: "'Courier New', Courier, monospace",
            // left: {value: "0%", writable: true},
            // top: {value: "0%", writable: true},
            zIndex: 50,
            // animation: "textGlitch 0.5s infinite",
            overflowX: "hidden",
            overflowY: "hidden"
        },

        popUpStyle2:{
            display: 'block',
            position: 'absolute',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            width: 'auto',
            height: 'auto',
            color: this.uicolor1,
            backgroundColor: "#000000",
            padding: "15px",
            fontFamily: "'Courier New', Courier, monospace",
            // left: {value: "0%", writable: true},
            // top: {value: "0%", writable: true},
            zIndex: 50,
            animation: "boxGlitch 0.5s infinite",
            animationTimingFunction: "step-end",
            overflowX: "hidden",
            overflowY: "hidden"
        },

        popUpStyle3:{
            display: 'block',
            position: 'absolute',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            width: 'auto',
            height: 'auto',
            color: this.uicolor2,
            backgroundColor: "#000000",
            padding: "15px",
            fontFamily: "'Courier New', Courier, monospace",
            // left: {value: "0%", writable: true},
            // top: {value: "0%", writable: true},
            zIndex: 50,
            animation: "boxGlitch 0.5s infinite",
            animationTimingFunction: "step-end",
            overflowX: "hidden",
            overflowY: "hidden"
        }
    }

    PopUpList = [(<div ></div>)];

    arrayIndex = 0;
    initializerArray = [0]
    completedAction = this.initializerArray.fill(0, 0, popups.length);

    handlePopUps2 = (playTime: number) =>{
        // console.log("[PUC]: handlePopUps2 initiated, arrayIndex:", this.arrayIndex);
        // console.log("[PUC]: arrayIndex", this.arrayIndex);

        let currentItem = popups[this.arrayIndex];
        // console.log(popups[this.arrayIndex]);

        if(currentItem && currentItem.completed === false){
            // console.log("this.completedAction:", this.completedAction[this.arrayIndex])
            if (currentItem.timestamp === playTime){
                // console.log('penis');
                switch(currentItem.action){
                    default: {
                        this.createTextPopUp(
                            currentItem.style,
                            String(currentItem.left),
                            String(currentItem.top),
                            currentItem.text,
                            `pu-${currentItem.timestamp}` );
                        setTimeout(() => this.deleteTextPopUp(`pu-${currentItem.timestamp}`), currentItem.duration)

                        // this.completedAction[this.arrayIndex] = 1;
                        this.arrayIndex ++;
                        currentItem.completed = true;
                        if (currentItem.flickerEyes) this.props.flickerEyesFunc();
                        
                        break;
                    }

                    case 'createTextPopUp': {
                        this.createTextPopUp(
                            currentItem.style,
                            String(currentItem.left),
                            String(currentItem.top),
                            currentItem.text,
                            `pu-${currentItem.timestamp}` );
                        setTimeout(() => this.deleteTextPopUp(`pu-${currentItem.timestamp}`), currentItem.duration);
                        
                        // this.completedAction[this.arrayIndex] = 1;
                        this.arrayIndex ++;
                        currentItem.completed = true;
                        if (currentItem.flickerEyes) this.props.flickerEyesFunc();
                        
                        break;
                    }

                    case 'createTextPopUp-for': {
                        // debugger;
                        for (let x=0; x < currentItem.repeat; x++){
                            console.log("left: ",currentItem.left + (currentItem.leftOffset * x), "top: ",currentItem.top + (currentItem.topOffset * x));

                            let functionleft = "";
                            let functiontop = "";
                            switch(currentItem.functionLeft){
                                default:  functionleft = String(currentItem.left + (currentItem.leftOffset) * x); break;
                                case "%5":  functionleft = String(currentItem.left + (x % currentItem.leftOffset) * 5); break;
                                case "*":  functionleft = String(currentItem.left + (currentItem.leftOffset) * x); break;
                                case "%10":  functionleft = String(currentItem.left + (x % currentItem.leftOffset) * 10); break;
                                case "*5":  functionleft = String(currentItem.left + (currentItem.leftOffset) * x); break;
                            }

                            switch(currentItem.functionTop){
                                default:  functiontop = String(currentItem.top + (currentItem.topOffset) * x); break;
                                case "%5":  functiontop = String(currentItem.top + (x % currentItem.topOffset) * 5); break;
                                case "*":  functiontop = String(currentItem.top + (currentItem.topOffset) * x); break;
                                case "%10":  functiontop = String(currentItem.top + (x % currentItem.topOffset) * 10); break;
                                case "*5":  functiontop = String(currentItem.top + (currentItem.topOffset) * x); break;
                            }

                            this.createTextPopUp(
                                currentItem.style,
                                functionleft,
                                functiontop,
                                currentItem.text,
                                `pu-${currentItem.timestamp}-${x}` );
                            setTimeout(() => this.deleteTextPopUp(`pu-${currentItem.timestamp}-${x}`), currentItem.duration);
                        }
                        
                        //((i % 5)*8)
                        // this.completedAction[this.arrayIndex] = 1;
                        this.arrayIndex ++;
                        currentItem.completed = true;
                        if (currentItem.flickerEyes) this.props.flickerEyesFunc();

                        break;
                    }
                }
            }
        }
    }

    createTextPopUp = (popupstyle: string, positionX: string, positionY: string, text: string, PUid: string) =>{
        let appliedstyle = { 
            ...this.styles.popUpStyle1
        }

        switch(popupstyle){
            // tslint:disable-next-line
            default: {appliedstyle = { 
                ...this.styles.popUpStyle1
                    }; break;}

            case "style1center":
                {appliedstyle = { 
                ...this.styles.popUpStyle1Centered
                    }; break;}

            case "style2":
                {appliedstyle = { 
                ...this.styles.popUpStyle2
                    }; break;}

            case "style3":
                {appliedstyle = { 
                ...this.styles.popUpStyle3
                    }; break;}
        
        }

        appliedstyle.left = positionX + '%';
        appliedstyle.top = positionY + '%';

         let content = (
            <div style={appliedstyle} id={PUid}>
                {text}
            </div>);

        return(
            this.PopUpList.push(
                content
            ),
            this.forceUpdate()
        )
    }

    deleteTextPopUp = (PUid: string) =>{
        if(this.props.isPlaying === true){
            var myobj = document.getElementById(PUid);
            if(myobj) myobj.remove();
            this.forceUpdate()
        }else{
            setTimeout(() => this.deleteTextPopUp(PUid),250);
        }

        if(this.props.playTime >= 26400){
            console.log("reset pop-ups issued")
            this.resetCompleted();
        }
    }

    resetCompleted = () =>{
        if(this.props.playEnded){
            for (let k = 0; k<popups.length; k++){
                popups[k].completed = false;
            }
        }
    }

    render(){
        // this.resetCompleted();
        this.handlePopUps2(this.props.playTime);
        return(
            <div className="popUpContainer">
               {this.PopUpList}
            </div>
        );
    }
}

export default PopUpContainer;