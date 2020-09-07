import React, { CSSProperties } from 'react';
// import PopUp from '../PopUp/PopUp';
// import ImageContainer from '../ImageContainer/ImageContainer';

interface IProps {
    playStarted: boolean
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
            backgroundColor: "#f454ff",
            padding: "10px",
            fontFamily: "'Courier New', Courier, monospace",
            // left: {value: "0%", writable: true},
            // top: {value: "0%", writable: true},
            zIndex: 50,
            animation: "boxGlitch 0.5s infinite",
            animationTimingFunction: "step-end"
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
            backgroundColor: "#f454ff",
            padding: "10px",
            fontFamily: "'Courier New', Courier, monospace",
            // left: {value: "0%", writable: true},
            // top: {value: "0%", writable: true},
            zIndex: 50,
            // animation: "textGlitch 0.5s infinite"
        },

        popUpStyle2:{
            display: 'block',
            position: 'absolute',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            width: 'auto',
            height: 'auto',
            color: "#f454ff",
            backgroundColor: "#000000",
            padding: "10px",
            fontFamily: "'Courier New', Courier, monospace",
            // left: {value: "0%", writable: true},
            // top: {value: "0%", writable: true},
            zIndex: 50,
            animation: "boxGlitch 0.5s infinite",
            animationTimingFunction: "step-end"
        }
    }

<<<<<<< Updated upstream

    PopUpList = [(<div ></div>),(<div></div>)]


    handlePopUps = () =>{
        if(this.state.counterStarted === false && this.props.playStarted){
            this.setState({
                counterStarted: true
            })
            
            //0:05
            // setTimeout(() => this.createTextPopUp('style1','45','60',"altered","pu1" ), 3000);
            // setTimeout(() => this.deleteTextPopUp("pu1" ), 100000);

            //0:02
            for(let i=0;i<15;i++){
                setTimeout(() => this.createTextPopUp('style2',String((8*i)),String(30+((i % 5)*8)),"connecting...",`pu002${i}` ), 1000);
                setTimeout(() => this.deleteTextPopUp(`pu002${i}` ), 4000);
            }

            //0:14
            setTimeout(() => this.createTextPopUp('style1','15','35',"i worked really hard for this","pu014" ), 14000);
            setTimeout(() => this.deleteTextPopUp("pu014" ), 18000);

            //0:24
            setTimeout(() => this.createTextPopUp('style1','15','20',"altered","pu1b" ), 24000);
            setTimeout(() => this.deleteTextPopUp("pu1b" ), 27000);
            //0:25
            setTimeout(() => this.createTextPopUp('style1','20','25',"authored","pu1c" ), 25000);
            setTimeout(() => this.deleteTextPopUp("pu1c" ), 28000);
            //0:26
            setTimeout(() => this.createTextPopUp('style2','25','30',"reforged","pu1d" ), 26000);
            setTimeout(() => this.deleteTextPopUp("pu1d" ), 29000);
            //0:27
            setTimeout(() => this.createTextPopUp('style1','30','35',"sculpted?","pu1e" ), 27000);
            setTimeout(() => this.deleteTextPopUp("pu1e" ), 30000);

            //0:27
            for(let i=0;i<15;i++){
                setTimeout(() => this.createTextPopUp('style1','30',String(35+(5*i)),"sculpted?",`pu02${i}` ), 27000 + (250*i));
                setTimeout(() => this.deleteTextPopUp(`pu02${i}` ), 30000+(150 * i));
            }

            //0:47
            for(let i=0;i<15;i++){
                setTimeout(() => this.createTextPopUp('style2','30',String(35+(5*i)),"?",`pu047${i}` ), 47000);
                setTimeout(() => this.deleteTextPopUp(`pu047${i}` ), 48000);
            }

            //0:55
            setTimeout(() => this.createTextPopUp('style1','45','10',"when your body doesn't feel age","pu055" ), 55000);
            setTimeout(() => this.deleteTextPopUp("pu055" ), 59000);

            //0:58
            for(let i=0;i<22;i++){
                setTimeout(() => this.createTextPopUp('style2',String(-5+(6*i)),String(30+((i % 5)*6)),"?",`pu058${i}` ), 58000);
                setTimeout(() => this.deleteTextPopUp(`pu058${i}`), 59000);
            }

            //1:00
            setTimeout(() => this.createTextPopUp('style1','45','15',"when your body needs nothing","pu105" ), 60000);
            setTimeout(() => this.deleteTextPopUp("pu105" ), 63000);

            //1:02
            setTimeout(() => this.createTextPopUp('style1','45','20',"does that really have any meaning","pu103" ), 62000);
            setTimeout(() => this.deleteTextPopUp("pu103" ), 67000);

            //1:05
            setTimeout(() => this.createTextPopUp('style1','45','70',"does sacrifice matter if it doesn't have a cost?","pu105" ), 65000);
            setTimeout(() => this.deleteTextPopUp("pu105" ), 68000);

            //1:08
            for(let i=0;i<12;i++){
                setTimeout(() => this.createTextPopUp('style2',String(-5+(10*i)),String(70+((i % 3)*6)),"//then it's not a sacrifice",`pu106${i}` ), 68000);
                setTimeout(() => this.deleteTextPopUp(`pu106${i}` ), 73000);
            }

            //01:24
            setTimeout(() => this.createTextPopUp('style2','45','70',"//nonsense","pu124" ), 84000);
            setTimeout(() => this.deleteTextPopUp("pu124" ), 86000);

            //01:30
            setTimeout(() => this.createTextPopUp('style1','60','20',"do you know where i am","pu130" ), 90000);
            setTimeout(() => this.deleteTextPopUp("pu130" ), 94000);

            //01:38
            setTimeout(() => this.createTextPopUp('style1','30','80',"cursed?","pu138" ), 98000);
            setTimeout(() => this.deleteTextPopUp("pu138" ), 101000);

            //01:39
            for(let i=0;i<32;i++){
                setTimeout(() => this.createTextPopUp('style2',String(-5+(6*i)),String(20+((i % 8)*6)),"XXXXXXXXXXXXXXXXXXXXXXXX",`pu139${i}` ), 99000);
                setTimeout(() => this.deleteTextPopUp(`pu139${i}` ), 100000);
            }

            //01:40
            setTimeout(() => this.createTextPopUp('style1','25','80',"when bad reality happens to your circuits","pu140" ), 100000);
            setTimeout(() => this.deleteTextPopUp("pu140" ), 105000);
            
            //02:06
            setTimeout(() => this.createTextPopUp('style1','30','40',"how did you get here","pu206" ), 126000);
            setTimeout(() => this.deleteTextPopUp("pu206" ), 129000);

            //02:07
            for(let i=0;i<22;i++){
                setTimeout(() => this.createTextPopUp('style1',String(-5+(6*i)),String(30+((i % 5)*6)),"hello",`pu207${i}` ), 128000);
                setTimeout(() => this.deleteTextPopUp(`pu207${i}` ), 129000);
            }

            //02:14
            setTimeout(() => this.createTextPopUp('style1','60','10',"i'm not quite feeling put together","pu214" ), 134000);
            setTimeout(() => this.deleteTextPopUp("pu214" ), 137000);

            //02:15
            setTimeout(() => this.createTextPopUp('style1','60','20',"a lot of things are starting to disconnect","pu215" ), 135000);
            setTimeout(() => this.deleteTextPopUp("pu215" ), 139000);

            //02:19
            for(let i=0;i<22;i++){
                setTimeout(() => this.createTextPopUp('style2',String(-5+(6*i)),String(30+((i % 5)*6)),".",`pu219${i}` ), 139000);
                setTimeout(() => this.deleteTextPopUp(`pu219${i}` ), 140000);
            }
            
            //02:21
            setTimeout(() => this.createTextPopUp('style1','20','60',"i feel like i chose this(?)","pu221" ), 141000);
            setTimeout(() => this.deleteTextPopUp("pu221" ), 144000);

            //02:24
            setTimeout(() => this.createTextPopUp('style1','20','65',"all the choices were already made for me","pu224" ), 144000);
            setTimeout(() => this.deleteTextPopUp("pu224" ), 147000);

            //02:26
            setTimeout(() => this.createTextPopUp('style2','20','70',"//there were no choices to begin with","pu226" ), 147000);
            setTimeout(() => this.deleteTextPopUp("pu226" ), 150000);
            
            //02:29
            for(let i=0;i<22;i++){
                setTimeout(() => this.createTextPopUp('style1',String(-5+(6*i)),String(30+((i % 5)*6)),"hey",`pu229${i}` ), 149000);
                setTimeout(() => this.deleteTextPopUp(`pu229${i}` ), 150000);
            }
            
            //02:30
            setTimeout(() => this.createTextPopUp('style1','25','85',"if you'd choose between having an identity and not being in pain","pu230" ), 150000);
            setTimeout(() => this.deleteTextPopUp("pu230" ), 286000);

            //02:52
            setTimeout(() => this.createTextPopUp('style1','25','20',"what do you call an epiphany you never wanted to have?","pu252" ), 172000);
            setTimeout(() => this.deleteTextPopUp("pu252" ), 176000);

            //03:12
            setTimeout(() => this.createTextPopUp('style1','15','70',"am i not worth a rewatch","pu312" ), 192000);
            setTimeout(() => this.deleteTextPopUp("pu312" ), 196000);

            //03:32
            setTimeout(() => this.createTextPopUp('style1','55','20',"after they mirror your nervous system you get complete control","pu332" ), 212000);
            setTimeout(() => this.deleteTextPopUp("pu332" ), 216000);

            //04:42
            setTimeout(() => this.createTextPopUp('style1','25','70',"in the end i'm taking away everything else that is not a part of the plan","pu442" ), 282000);
            setTimeout(() => this.deleteTextPopUp("pu442" ), 286000);
            
        }

    }

=======
    PopUpList = [(<div ></div>)];

    arrayIndex = 0;
    initializerArray = [0]
    completedAction = this.initializerArray.fill(0, 0, popups.length);


    handlePopUps2 = (playTime: number) =>{
        // console.log("[PUC]: handlePopUps2 initiated, arrayIndex:", this.arrayIndex);
        // console.log("[PUC]: arrayIndex", this.arrayIndex);

        let currentItem = popups[this.arrayIndex];
        // console.log(popups[this.arrayIndex]);

        if(currentItem.completed === false){
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
                        
                        break;
                    }
                }
            }
        }
    }

>>>>>>> Stashed changes
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
                {

                }
            
        }

        appliedstyle.left = positionX + '%';
        appliedstyle.top = positionY + '%';

         let content = (
            <div style={appliedstyle}  id={PUid}>
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
        var myobj = document.getElementById(PUid);
        if(myobj) myobj.remove();
        this.forceUpdate()
    }

    render(){
        this.handlePopUps();
        return(
            <div className="popUpContainer">
               {this.PopUpList}
            </div>
        );
    }
}

export default PopUpContainer;