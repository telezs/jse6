class clock {
    constructor(min, sec) {
        this.min = min; 
        this.sec = sec;
        document.querySelector('body').innerHTML=this.codeHtml();
    }
    render() {
        // + 1 giay
        let mins = parseInt(this.min);
        let secs = parseInt(this.secs);

        if (secs < 59) {
            secs++;
        }
        else {
            mins++;
            secs = 0;
        }
        if (secs < 10) secs = "0" + this.secs;
        if (mins < 10) secs = "0" + this.secs; 

    }
    
    codeHtml = () => {
        let code =``;
        code = `<ol>
                    <li id="clock1></li>
                    <li id="clock2></li>
                    <li id="clock3></li>
                    <li id="clock4></li>
                    <li id="clock5></li>
                </ol>`
        return code;
    };
    start() {
        this.render();
        console.log(this.mins+":"+this.secs);

        this.timer = setInterval(()=> {
            this.render();
            console.log(this.mins+":"+this.secs);   
        }) 
    }
    
}

let clock1 = new clock("00", "00");

stop() {
    clearInterval(this.timer);

}

let clock1 = new clock("00", "00");
document.getElementById("clock1").innerHTML = clock1.min+";"+clock1.sec;