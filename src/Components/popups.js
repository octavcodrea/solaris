const popups = [
  {
    timestamp: 100,
    action: "createTextPopUp-for",
    repeat: 25,
    duration: 3000,
    style: "style2",
    left: -10,
    top: 10,
    leftOffset: 5,
    topOffset: 8,
    functionLeft: "*",
    functionTop: "%10",
    delay: 0,
    text: "connecting...",
    completed: false,
  },

  // {timestamp:300, action:"createTextPopUp", repeat:0, duration: 3000, style: "style1", left: 15, top: 35, text:"i worked really hard for this", completed: false},

  {
    timestamp: 400,
    action: "createTextPopUp",
    repeat: 25,
    duration: 3000,
    style: "style3",
    left: 10,
    top: 10,
    leftOffset: 5,
    topOffset: 8,
    functionLeft: "*",
    functionTop: "%10",
    delay: 0,
    text: "// fileID: SC-12082125-US-M-C",
    completed: false,
  },

  {
    timestamp: 800,
    action: "createTextPopUp",
    repeat: 25,
    duration: 3000,
    style: "style3",
    left: 20,
    top: 40,
    leftOffset: 5,
    topOffset: 8,
    functionLeft: "*",
    functionTop: "%10",
    delay: 0,
    text: "// running pathways analysis ...",
    completed: false,
    flickerEyes: true
  },

  {
    timestamp: 1400,
    action: "createTextPopUp",
    repeat: 0,
    duration: 3000,
    style: "style1",
    left: 15,
    top: 35,
    leftOffset: 0,
    topOffset: 0,
    delay: 0,
    text: "i worked really hard for this",
    completed: false,
  },

  {
    timestamp: 2350,
    action: "createTextPopUp",
    repeat: 0,
    duration: 3000,
    style: "style1",
    left: 15,
    top: 20,
    leftOffset: 0,
    topOffset: 0,
    delay: 0,
    text: "altered",
    completed: false,
  },

  {
    timestamp: 2450,
    action: "createTextPopUp",
    repeat: 0,
    duration: 3000,
    style: "style1",
    left: 20,
    top: 25,
    leftOffset: 0,
    topOffset: 0,
    delay: 0,
    text: "authored",
    completed: false,
  },

  {
    timestamp: 2550,
    action: "createTextPopUp",
    repeat: 0,
    duration: 3000,
    style: "style2",
    left: 25,
    top: 30,
    leftOffset: 0,
    topOffset: 0,
    delay: 0,
    text: "reforged",
    completed: false,
  },

  {
    timestamp: 2650,
    action: "createTextPopUp",
    repeat: 0,
    duration: 3000,
    style: "style1",
    left: 30,
    top: 35,
    leftOffset: 0,
    topOffset: 0,
    delay: 0,
    text: "sculpted?",
    completed: false,
  },

  {
    timestamp: 2750,
    action: "createTextPopUp-for",
    repeat: 10,
    duration: 3000,
    style: "style1",
    left: 30,
    top: 35,
    text: "sculpted?",
    functionLeft: "*",
    functionTop: "%10",
    leftOffset: 0,
    topOffset: 10,
    delay: 0,
    completed: false,
  },

  {
    timestamp: 4700,
    action: "createTextPopUp-for",
    repeat: 20,
    duration: 1000,
    style: "style2",
    left: 30,
    top: 35,
    text: "?",
    leftOffset: 0,
    topOffset: 10,
    functionLeft: "*",
    functionTop: "%10",
    delay: 0,
    completed: false,
  },

  {
    timestamp: 5500,
    action: "createTextPopUp",
    repeat: 10,
    duration: 3000,
    style: "style1",
    left: 45,
    top: 10,
    leftOffset: 0,
    topOffset: 0,
    delay: 0,
    text: "when your body doesn't feel age",
    completed: false,
  },

  {
    timestamp: 5700,
    action: "createTextPopUp-for",
    repeat: 20,
    duration: 1000,
    style: "style2",
    left: -5,
    top: 30,
    text: "?",
    leftOffset: 5,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%10",
    delay: 0,
    completed: false,
  },

  {
    timestamp: 5900,
    action: "createTextPopUp",
    repeat: 10,
    duration: 3000,
    style: "style1",
    left: 45,
    top: 15,
    text: "when your body needs nothing",
    leftOffset: 5,
    topOffset: 5,
    delay: 0,
    completed: false,
  },

  {
    timestamp: 6100,
    action: "createTextPopUp",
    repeat: 10,
    duration: 3000,
    style: "style1",
    left: 45,
    top: 20,
    text: "does that really have any meaning",
    leftOffset: 5,
    topOffset: 5,
    delay: 0,
    completed: false,
  },

  {
    timestamp: 6500,
    action: "createTextPopUp",
    repeat: 10,
    duration: 3000,
    style: "style1",
    left: 45,
    top: 70,
    text: "does sacrifice matter if it doesn't have a cost?",
    leftOffset: 5,
    topOffset: 5,
    delay: 0,
    completed: false,
  },

  {
    timestamp: 6800,
    action: "createTextPopUp-for",
    repeat: 20,
    duration: 1000,
    style: "style2",
    left: -5,
    top: 70,
    text: "//then it's not a sacrifice",
    leftOffset: 10,
    topOffset: 3,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
  },

  {
    timestamp: 7300,
    action: "createTextPopUp",
    repeat: 10,
    duration: 3000,
    style: "style3",
    left: 20,
    top: 70,
    text: "// pathways: OK",
    leftOffset: 10,
    topOffset: 3,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
  },

  {
    timestamp: 7700,
    action: "createTextPopUp",
    repeat: 10,
    duration: 1000,
    style: "style3",
    left: 20,
    top: 70,
    text: "// running data files analysis ...",
    leftOffset: 10,
    topOffset: 3,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
    flickerEyes: true
  },

  {
    timestamp: 8400,
    action: "createTextPopUp",
    repeat: 10,
    duration: 2000,
    style: "style2",
    left: 45,
    top: 70,
    text: "//nonsense",
    leftOffset: 5,
    topOffset: 5,
    delay: 0,
    completed: false,
  },

  {
    timestamp: 8800,
    action: "createTextPopUp",
    repeat: 10,
    duration: 4000,
    style: "style1",
    left: 60,
    top: 20,
    text: "do you know where i am",
    leftOffset: 5,
    topOffset: 5,
    delay: 0,
    completed: false,
  },

  {
    timestamp: 9700,
    action: "createTextPopUp",
    repeat: 10,
    duration: 4000,
    style: "style1",
    left: 30,
    top: 70,
    text: "cursed?",
    leftOffset: 5,
    topOffset: 5,
    delay: 0,
    completed: false,
  },

  {
    timestamp: 9800,
    action: "createTextPopUp-for",
    repeat: 20,
    duration: 1000,
    style: "style2",
    left: -5,
    top: 20,
    text: "XXXXXXXXXXXXXXXXXXXXXXXX",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%10",
    delay: 0,
    completed: false,
  },

  {
    timestamp: 9900,
    action: "createTextPopUp",
    repeat: 10,
    duration: 3000,
    style: "style1",
    left: 25,
    top: 75,
    text: "when bad reality happens to your circuits",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
  },

  {
    timestamp: 10150,
    action: "createTextPopUp",
    repeat: 10,
    duration: 3000,
    style: "style1",
    left: 25,
    top: 80,
    text: "and your flesh thinks you're ugly",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
  },

  {
    timestamp: 12600,
    action: "createTextPopUp",
    repeat: 10,
    duration: 3000,
    style: "style1",
    left: 30,
    top: 40,
    text: "how did you get here",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
  },

  {
    timestamp: 12750,
    action: "createTextPopUp-for",
    repeat: 20,
    duration: 1000,
    style: "style1",
    left: -5,
    top: 30,
    text: "hello",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
  },

  {
    timestamp: 13250,
    action: "createTextPopUp",
    repeat: 10,
    duration: 3000,
    style: "style1",
    left: 60,
    top: 10,
    text: "i'm not quite feeling put together",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
  },

  {
    timestamp: 13350,
    action: "createTextPopUp",
    repeat: 10,
    duration: 3000,
    style: "style1",
    left: 60,
    top: 10,
    text: "a lot of things are starting to disconnect",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
  },

  {
    timestamp: 13900,
    action: "createTextPopUp-for",
    repeat: 10,
    duration: 1000,
    style: "style1",
    left: -5,
    top: 30,
    text: ".",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
  },

  {
    timestamp: 14100,
    action: "createTextPopUp",
    repeat: 10,
    duration: 3000,
    style: "style1",
    left: 20,
    top: 60,
    text: "i feel like i chose this(?)",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
  },

  {
    timestamp: 14400,
    action: "createTextPopUp",
    repeat: 10,
    duration: 3000,
    style: "style1",
    left: 20,
    top: 65,
    text: "like all the choices were already made for me",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
  },

  {
    timestamp: 14700,
    action: "createTextPopUp",
    repeat: 10,
    duration: 3000,
    style: "style2",
    left: 20,
    top: 65,
    text: "//there were no choices to begin with",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
  },

  {
    timestamp: 14900,
    action: "createTextPopUp-for",
    repeat: 20,
    duration: 1000,
    style: "style1",
    left: -5,
    top: 30,
    text: "hey",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
  },

  {
    timestamp: 14950,
    action: "createTextPopUp",
    repeat: 10,
    duration: 3000,
    style: "style1",
    left: 25,
    top: 85,
    text: "if you'd choose between having an identity and not being in pain",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
  },

  {
    timestamp: 15700,
    action: "createTextPopUp",
    repeat: 10,
    duration: 3000,
    style: "style3",
    left: 25,
    top: 85,
    text: "// data files: OK",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false
  },

  {
    timestamp: 16100,
    action: "createTextPopUp",
    repeat: 10,
    duration: 3000,
    style: "style3",
    left: 25,
    top: 85,
    text: "// running neural analysis . . .",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
    flickerEyes: true
  },

  {
    timestamp: 16900,
    action: "createTextPopUp",
    repeat: 10,
    duration: 3000,
    style: "style1",
    left: 25,
    top: 20,
    text: "what do you call an epiphany you never wanted to have?",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
  },

  {
    timestamp: 17900,
    action: "createTextPopUp",
    repeat: 10,
    duration: 3000,
    style: "style3",
    left: 25,
    top: 20,
    text: "// found values in hippocampus outside of allowed range",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
  },

  {
    timestamp: 18300,
    action: "createTextPopUp",
    repeat: 10,
    duration: 3000,
    style: "style3",
    left: 25,
    top: 20,
    text: "// patching ...",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
    flickerEyes: true
  },

  {
    timestamp: 19000,
    action: "createTextPopUp",
    repeat: 10,
    duration: 3000,
    style: "style1",
    left: 15,
    top: 70,
    text: "am i not worth a rewatch",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
  },

  {
    timestamp: 19600,
    action: "createTextPopUp",
    repeat: 10,
    duration: 3000,
    style: "style3",
    left: 25,
    top: 20,
    text: "// patching 10% ...",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
  },

  {
    timestamp: 20400,
    action: "createTextPopUp",
    repeat: 10,
    duration: 3000,
    style: "style3",
    left: 25,
    top: 20,
    text: "// patching 30% ...",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
  },

  {
    timestamp: 21200,
    action: "createTextPopUp",
    repeat: 10,
    duration: 3000,
    style: "style1",
    left: 35,
    top: 70,
    text: "after they mirror your nervous system you get complete control",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
  },

  {
    timestamp: 23200,
    action: "createTextPopUp",
    repeat: 10,
    duration: 3000,
    style: "style3",
    left: 35,
    top: 70,
    text: "// patching 60% ...",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
  },

  {
    timestamp: 24200,
    action: "createTextPopUp",
    repeat: 10,
    duration: 3000,
    style: "style3",
    left: 35,
    top: 70,
    text: "// patching error",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
    flickerEyes: true
  },

  {
    timestamp: 24600,
    action: "createTextPopUp-for",
    repeat: 20,
    duration: 3000,
    style: "style3",
    left: -3,
    top: 55,
    text: "$deploy unit --force",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
    flickerEyes: true
  },

  {
    timestamp: 25000,
    action: "createTextPopUp-for",
    repeat: 20,
    duration: 3000,
    style: "style3",
    left: -5,
    top: 7,
    text: "// pathways error",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
  },

  {
    timestamp: 25400,
    action: "createTextPopUp-for",
    repeat: 20,
    duration: 3000,
    style: "style3",
    left: -7,
    top: 25,
    text: "// data files error",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
  },

  {
    timestamp: 25800,
    action: "createTextPopUp-for",
    repeat: 20,
    duration: 3000,
    style: "style3",
    left: -3,
    top: 55,
    text: "// neural data error",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
    flickerEyes: true
  },

  // 4:24
  {
    timestamp: 26000,
    action: "createTextPopUp-for",
    repeat: 10,
    duration: 3000,
    style: "style1",
    left: -5,
    top: 60,
    text: "in the end i'm taking away everything else that is not a part of the plan",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
  },

  {
    timestamp: 26200,
    action: "createTextPopUp-for",
    repeat: 20,
    duration: 3000,
    style: "style3",
    left: -3,
    top: 55,
    text: "// deploying unit",
    leftOffset: 6,
    topOffset: 5,
    functionLeft: "*",
    functionTop: "%5",
    delay: 0,
    completed: false,
    flickerEyes: true
  },
];

export default popups;

    // PopUpList2 = [
    //     {
    //         timestamp: 100,
    //         action: 'createTextPopUp',
    //         repeat: 0,
    //         duration: 3000,
    //         style: 'style2',
    //         left: '20',
    //         top: '30',
    //         text: 'connecting...',
    //     }   
    // ]

    /*
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

    */