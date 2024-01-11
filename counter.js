
function countDown() {
    for (var sec = 10; sec <= 0;){
        return (sec <= 0) ? console.log('hellooooo') : tooSlow;
    }
}

function tooSlow() {
    console.log('You were too slow, please try again')
}


const buttonPress = document.getElementById('button').addEventListener('onlclick', countDown)