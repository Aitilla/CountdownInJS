
function countDown(){

    let timeOut = 0

    if (timeLeft > timeOut){
        timeLeft -= 1;
        console.log(timeLeft)
        displayTime.innerText = `You have ${timeLeft} seconds left to authenticate`
    } else{
        clearInterval(interval)
        displayTime.innerText = 'You are out of time to authenticate, please try again.'
    }
}

var timeLeft = 60

var displayTime = document.createElement('p')
displayTime.classList.add('desiredClassName')
displayTime.id = 'desiredID'

var div = document.getElementById('display')
div.appendChild(displayTime)

interval = setInterval(countDown, 1000)
