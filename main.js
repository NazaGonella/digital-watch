import { clear } from "./render/draw.js";
import { initF91W } from "./scenes/f91w.js";
import { initFlappy } from "./scenes/flappy_bird.js";

const BACKGROUND = "#9EAA84"

canvas.width = 1920;
canvas.height = 1080;

const ctx = canvas.getContext("2d");

// const f91w = initF91W(0, 100);
const f91w = initFlappy(0, 100);

function init() {
    f91w.draw(ctx);
}

let pause = false;
let last = performance.now();

function loop(now) {
    const delta = (now - last);
    last = now;

    if (!pause) {
        clear(ctx, canvas, BACKGROUND);
        f91w.update(delta);
        f91w.draw(ctx);
    }

    requestAnimationFrame(loop);
}

window.addEventListener("keydown", (event) => {
    if (event.code == "Space") {
        pause = !pause;
    } else if (event.code == "KeyN") {
        f91w.setNextMode();
    }
});


init();
requestAnimationFrame(loop);
