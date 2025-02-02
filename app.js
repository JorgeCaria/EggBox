let time = 0;
let minutes = 0;
let seconds = 0;
let interval_id = null;
document.getElementById("timer").innerText = `00:00`;

function time_start(){

    if(minutes==59 && seconds==59){
        minutes = 0;
        seconds = 0;
    }else if(seconds==59){
        minutes++;
        seconds=0;
    }else{
        seconds++;
    }
    
    if(minutes<10){
        if(seconds<10){
            document.getElementById("timer").innerText = `0${minutes}:0${seconds}`;
        }else{
            document.getElementById("timer").innerText = `0${minutes}:${seconds}`;
        }
    }else{

        if(seconds<10){
            document.getElementById("timer").innerText = `${minutes}:0${seconds}`;
        }else{
            document.getElementById("timer").innerText = `${minutes}:${seconds}`;
        }
    }
}

function time_run(){
    if(interval_id == null){
        interval_id = setInterval(time_start, 1000);
    }
}


function time_stop(){
    clearInterval(interval_id);
    interval_id = null;
    seconds = 0;
    minutes = 0;
    document.getElementById("timer").innerText = `00:00`;

}

document.getElementById("start").addEventListener("click", time_run);
document.getElementById("stop").addEventListener("click", time_stop);
