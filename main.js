const BACKGROUND = "#9EAA84"

canvas.width = 1920;
canvas.height = 1080;

const ctx = canvas.getContext("2d");
const f91w = new WatchLayout();

function init() {
    const xo = 0;
    const yo = 200;
    f91w.addSegmentDisplay(hoursTens24Display, 0, {x:xo+25, y:yo+100}, 1);
    f91w.addSegmentDisplay(hoursUnits24Display, 1, {x:xo+25+150, y:yo+100}, 1);
    f91w.addSegmentDisplay(minutesTensDisplay, 2, {x:xo+175+200, y:yo+100}, 1);
    f91w.addSegmentDisplay(minutesUnitsDisplay, 6, {x:xo+175+200+150, y:yo+100}, 1);
    f91w.addSegmentDisplay(secondsTensDisplay, 0, {x:xo+525+175, y:yo+225}, 0.5);
    f91w.addSegmentDisplay(secondsUnitsDisplay, 0, {x:xo+525+175+75, y:yo+225}, 0.5);

    f91w.addSegmentDisplay(weekdayADisplay, 3, {x:xo+25+275, y:yo-75}, 0.5);
    f91w.addSegmentDisplay(weekdayBDisplay, 3, {x:xo+25+75+(25/2)+275, y:yo-75}, 0.5);

    f91w.addSegmentDisplay(monthdayADisplay, 0, {x:xo+525+175, y:yo-75}, 0.5);
    f91w.addSegmentDisplay(monthdayBDisplay, 0, {x:xo+525+175+75, y:yo-75}, 0.5);

    f91w.addSegmentDisplay(monthADisplay, 0, {x:xo+525+175+275, y:yo-75}, 0.5);
    f91w.addSegmentDisplay(monthBDisplay, 0, {x:xo+525+175+75+275, y:yo-75}, 0.5);

    hoursTens24Display.addNeighborDisplay(hoursUnits24Display, 1)
        .addNeighborDisplay(minutesTensDisplay, 1).addNeighborDisplay(minutesUnitsDisplay, 1)
        .addNeighborDisplay(secondsTensDisplay, 1).addNeighborDisplay(secondsUnitsDisplay, 1)
        .addNeighborDisplay(weekdayADisplay, 1).addNeighborDisplay(weekdayBDisplay, 1)
        .addNeighborDisplay(monthdayADisplay, 1).addNeighborDisplay(monthdayBDisplay, 1)
        .addNeighborDisplay(monthADisplay, 1).addNeighborDisplay(monthBDisplay, 1);

    f91w.draw(ctx);

}

let pause = false;
let setting = false;
let last = performance.now();

function loop(now) {
    const delta = (now - last);
    last = now;

    if (!pause) {
        f91w.update(delta);
        f91w.draw(ctx);

    } else if (setting) {
        console.log("setting");
    } else {
        console.log("pause");
    }

    requestAnimationFrame(loop);
}

window.addEventListener("keydown", (event) => {
    if (event.code == "Space") {
        if (setting) setting = false;
        pause = !pause;
    }
    if (event.code == "KeyM") {
        pause = !setting;
        setting = !setting;
    }
});


init();
requestAnimationFrame(loop);
