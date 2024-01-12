
function countDown(){

    const timeOut = 0

    if (timeLeft > timeOut){
        console.log(timeLeft)
        displayTime.innerText = `You have ${timeLeft} seconds left to authenticate`
        timeLeft -= 1;
    } else{
        clearInterval(interval)
        displayTime.innerText = 'You are out of time to authenticate, please try again.'
    }
}

let timeLeft = 60

const displayTime = document.createElement('p')
displayTime.classList.add('desiredClassName')
displayTime.id = 'desiredID'

const div = document.getElementById('display')
div.appendChild(displayTime)

interval = setInterval(countDown, 1000)
