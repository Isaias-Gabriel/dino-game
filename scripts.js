const dino = document.querySelector('.dino');
const background = document.querySelector('.background-2');

let position = 0;
let isJumping = false;

function onSpaceKeyUp(event) {
    if(event.keyCode === 32) {
        if(!isJumping) {
            jump();
        }
    }
}

// makes the dino jump
function jump() {

    isJumping = true;

    let upInterval = setInterval(() => {
        if(position >= 200) {
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if(position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                }

                else {
                    position -= 3;
                    dino.style.bottom = position + 'px';
                }
            }, 1);
        }

        else {
            position += 3;
            dino.style.bottom = position + 'px';
        }
    }, 1);
}

function generateCactus() {
    const cactus = document.createElement('div');
    cactus.classList.add('cactus');

    let cactusPosition = 1200;
    //random time in seconds;
    let randomTime = Math.random() * 5000;

    console.log(randomTime)

    cactus.style.left = cactusPosition + 'px';

    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if(cactusPosition <= -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }

        else if(cactusPosition > 50 && cactusPosition < 110 && position < 60) {
            clearInterval(leftInterval);

            document.body.innerHTML = '<h1>Game over ;-;</h1>'
        }

        else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(generateCactus, randomTime);
}

generateCactus();

document.addEventListener('keyup', onSpaceKeyUp);