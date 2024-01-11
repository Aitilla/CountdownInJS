
function countDown() {
    for (var sec = 10; sec <= 0; sec--){
        return (sec <= 0) ? console.log(sec) : tooSlow;
    }
}

function tooSlow() {
    console.log('You were too slow, please try again')
}


const buttonPress = document.getElementById('button').addEventListener('click', countDown)