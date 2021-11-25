let sec = 0;
let min = 0;
let hr = 0;

function formatNumber(n) {
    return n < 10 ? "0" + n : n;
}

setInterval(() => {
    if(sec == 60){
        sec = 0;
        min++;
    }
    if(min == 60){
        min = 0;
        hr++;
    }
    
    console.clear()
    console.log(`Cronómetro: ${formatNumber(hr)}:${formatNumber(min)}:${formatNumber(sec)}`);
    sec++;
},1000);