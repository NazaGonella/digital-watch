const BACKGROUND = "#9EAA84"

canvas.width = 800;
canvas.height = 600;

const ctx = canvas.getContext("2d");
const f91w = new WatchLayout();

function init() {
    f91w.addSegmentDisplay(hoursTens24Display, 0, {x:100, y:100}, 1);
    f91w.addSegmentDisplay(hoursUnits24Display, 1, {x:225, y:100}, 1);
    f91w.addSegmentDisplay(minutesTensDisplay, 2, {x:400, y:100}, 1);
    f91w.addSegmentDisplay(minutesUnitsDisplay, 6, {x:525, y:100}, 1);
    f91w.addSegmentDisplay(secondsTensDisplay, 0, {x:100, y:325}, 1);
    f91w.addSegmentDisplay(secondsUnitsDisplay, 0, {x:225, y:325}, 1);

    f91w.draw(ctx);
}

let running = false;
let last = performance.now();

function loop(now) {
    const delta = now - last;
    last = now;

    if (running) {
        f91w.update(delta);
        f91w.draw(ctx);
    }

    requestAnimationFrame(loop);
}

window.addEventListener("keydown", (event) => {
    if (event.code == "Space") {
        running = !running;
        console.log(running);
    }
});


init();
requestAnimationFrame(loop);
