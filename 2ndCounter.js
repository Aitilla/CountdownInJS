
function countDown(){

    var timeOut = 0

    if (countFrom > timeOut){
        console.log('hello world')
        countFrom -= 1;
        console.log(countFrom)
    } else{
        clearInterval(interval)
    }
}


var countFrom = 5

interval = setInterval(countDown, 1000)
