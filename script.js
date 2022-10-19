let getCounter = document.querySelector('.counter')

let counter = 0;

let interval = setInterval(update, 1000);

function update(){
    counter++;
    getCounter.innerHTML = counter;

    // if(counter === 10){
    //     clearInterval(interval);
    // }
}

