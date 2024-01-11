
function countDown(){

    let timeOut = 0

    if (timeLeft > timeOut){
        timeLeft -= 1;
        console.log(timeLeft)
        displayTime.innerText = timeLeft
    } else{
        clearInterval(interval)
        displayTime.innerText = 'You are out of time, please try again'
    }
}

var timeLeft = 60

var displayTime = document.createElement('p')

var div = document.getElementById('display')
div.appendChild(displayTime)

interval = setInterval(countDown, 1000)
