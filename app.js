let time = 0;
let interval_id = null;
document.getElementById("timer").innerText = time;

function time_start(){
    console.log(`Time: ${time}`);
    time++;    
    document.getElementById("timer").innerText = time;
}

function time_run(){
    if(interval_id == null){
        interval_id = setInterval(time_start, 1000);
    }
}


function time_stop(){
    clearInterval(interval_id);
    interval_id = null;
    time = 0;
    document.getElementById("timer").innerText = time;

}

document.getElementById("start").addEventListener("click", time_run);
document.getElementById("stop").addEventListener("click", time_stop);
