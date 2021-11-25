let sec = 0;
let min = 0;
let hr = 0;
let nTimer;

function nTimeout(n) {
    return new Promise(ready => setTimeout(ready, n*1000));
}

async function timeouts(){
    // Inicio Timer => inicio Timeout de 4 seg => espero su finalización => apago y reseteo Timer => muestro "Hello"
    nTimer = setInterval(timer, 10, 4, "Waiting ");
    await nTimeout(4);
    clearInterval(nTimer);
    resetTimerValues();
    console.log("Hello\n");

    // Timeout de 2 seg para lectura => muestro mensaje de limpieza => Timer de 3 seg para lectura
    await nTimeout(2);
    console.log("Lets clean the console now!");
    await nTimeout(3);

    // limpio consola => inicio Timer => inicio Timeout de 3 seg => limpio consola => apago y reseteo Timer
    console.clear();
    nTimer = setInterval(timer, 10 , 3, "Cleaning console in ");
    await nTimeout(3);
    console.clear();
    clearInterval(nTimer);
    resetTimerValues();

    // Inicio Timer => inicio Timeout de 8 seg => apago y reseteo Timer => muestro "Hello"
    nTimer = setInterval(timer, 10, 8, "Waiting ");
    await nTimeout(8);
    clearInterval(nTimer);
    resetTimerValues();
    console.log("Hello");
}


function formatNumber(n) {
    return n < 10 ? "0" + n : n;
}

function resetTimerValues(){    
    sec = 0;
    min = 0;
    hr = 0;
}

function timer(n, msg) {
    if(sec == 60){
        sec = 0;
        min++;
    }
    if(min == 60){
        min = 0;
        hr++;
    }
        
    console.clear();
    console.log(`${msg}${n} seconds...`);
    console.log(`Time: ${formatNumber(hr)}:${formatNumber(min)}:${formatNumber(sec)}`);
    sec++;
}

timeouts();

