'use strict';
const btn = document.querySelector('#move_btn')

function myAnimation() {
    const apple = document.querySelector('.img');
    let pos = 0;

    const timerId = setInterval(frame, 10);

    function frame() {
        if (pos === 700) {
            clearInterval(timerId);
        } else {
            console.log(pos)
            pos++;
            apple.style.top = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);