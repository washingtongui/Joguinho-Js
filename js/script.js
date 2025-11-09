const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump')

    setTimeout((funcao) => {
        mario.classList.remove('jump');
    }
        , 600);

}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;

    if (pipePosition <= 120) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
    }

}, 10);

document.addEventListener('keydown', jump);