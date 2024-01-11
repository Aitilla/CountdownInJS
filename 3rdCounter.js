
function countDown(){

    var timeOut = 0

    if (timeLeft > timeOut){
        console.log('hello world')
        timeLeft -= 1;
        console.log(timeLeft)
    } else{
        clearInterval(interval)
    }
}

var timeLeft = 5

interval = setInterval(countDown, 1000)

