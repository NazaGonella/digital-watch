const BACKGROUND = "#9EAA84"

canvas.width = 800;
canvas.height = 600;

const ctx = canvas.getContext("2d");

function init() {
    hoursTens24Display.draw(ctx, 100, 100, 1);
    hoursUnits24Display.draw(ctx, 100 + 125, 100, 1);
    minutesTensDisplay.draw(ctx, 225 + 175, 100, 1);
    minutesUnitsDisplay.draw(ctx, 225 + 175 + 125, 100, 1);
    secondsTensDisplay.draw(ctx, 100, 325, 0.5);
    secondsUnitsDisplay.draw(ctx, 225, 325, 0.5);
}

let last = performance.now();

function loop(now) {
    const delta = now - last;
    last = now;

    hoursTens24Display.update(delta);
    hoursUnits24Display.update(delta);
    minutesTensDisplay.update(delta);
    minutesUnitsDisplay.update(delta);
    secondsTensDisplay.update(delta);
    secondsUnitsDisplay.update(delta);

    hoursTens24Display.draw(ctx, 100, 100, 1);
    hoursUnits24Display.draw(ctx, 100 + 125, 100, 1);
    minutesTensDisplay.draw(ctx, 225 + 175, 100, 1);
    minutesUnitsDisplay.draw(ctx, 225 + 175 + 125, 100, 1);
    secondsTensDisplay.draw(ctx, 100, 325, 0.5);
    secondsUnitsDisplay.draw(ctx, 225, 325, 0.5);

    requestAnimationFrame(loop);
}

init();
requestAnimationFrame(loop);
