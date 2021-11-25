function nTimeout(n){    
    return new Promise(ready => setTimeout(ready, n*1000));
}

async function timeouts(){
    console.log("Waiting 4 seconds...");
    await nTimeout(4);
    console.log("Hello\n");

    console.log("Waiting 8 seconds...");
    await nTimeout(8);
    console.log("Hello");
}

timeouts();