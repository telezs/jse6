export default class Clock {
    constructor(min, sec, listComponent, id) {
        this.min = min; 
        this.sec = sec;
        this.listComponent = listComponent;
        this.id = id;
        
        this.codeHtml();
    }

    printTime(){
        let minute ="";
        let second = "";

        if(this.min<10) minute="0" + this.min;
        else minute = this.min; 
    
        let li = document.createElement("li")
        li.id = this.id;

        if(this.sec<10) second="0" + this.sec;
        else second = this.sec; 

        let li_span = document.querySelector("#"+this.id+" span");
        li_span.innerHTML = minute+":"+second;;
        this.listComponent.appendChild(li_span);
    }

    
    codeHtml = () => {


        let span = document.createElement("span");

        let buttonStart = document.createElement("button");
        buttonStart.innerHTML= "start";
        buttonStart.addEventListener("click", this.start.bind(this));

        let buttonStop = document.createElement("button");
        buttonStop.innerHTML= "stop";
        buttonStop.addEventListener("click", this.stop.bind(this));

        li.appendChild(span);
        li.appendChild(buttonStart);
        li.appendChild(buttonStop);

        this.listComponent.appendChild(li);
    };

    updatTimeBySecs() {
        this.sec++;
            if(this.sec == 60){
                this.sec= 0;
                this.min++;
            }
    }
    start() {
        this.timer = setInterval(() => {
           this.updatTimeBySecs();
           this.codeHtml(); 
        }, 1000);
    }
    stop() {
        clearInterval(this.timer);
    }
    
}
