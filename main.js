const BACKGROUND = "#9EAA84"

canvas.width = 1920;
canvas.height = 1080;

const ctx = canvas.getContext("2d");
const f91w = new WatchLayout();
const modeTime = f91w.addMode("TIME");
const modeAlarm = f91w.addMode("ALARM");
const modeStopwatch = f91w.addMode("STOPWATCH");
const modeSetting = f91w.addMode("SETTING");

function init() {
    const xo = 0;
    const yo = 200;

    f91w.setMode(modeTime);
    f91w.addSegmentDisplay(hoursTens24Display, 0, {x:xo+25, y:yo+100}, 1);
    f91w.addSegmentDisplay(hoursUnits24Display, 1, {x:xo+25+150, y:yo+100}, 1);
    f91w.addSegmentDisplay(minutesTensDisplay, 2, {x:xo+175+200, y:yo+100}, 1);
    f91w.addSegmentDisplay(minutesUnitsDisplay, 6, {x:xo+175+200+150, y:yo+100}, 1);
    f91w.addSegmentDisplay(secondsTensDisplay, 0, {x:xo+525+175, y:yo+225}, 0.5);
    f91w.addSegmentDisplay(secondsUnitsDisplay, 0, {x:xo+525+175+75, y:yo+225}, 0.5);
    f91w.addSegmentDisplay(weekdayADisplay, 3, {x:xo+25+275, y:yo-75}, 0.5);
    f91w.addSegmentDisplay(weekdayBDisplay, 3, {x:xo+25+75+(25/2)+275, y:yo-75}, 0.5);
    f91w.setMode(modeAlarm);
    f91w.addSegmentDisplay(monthdayADisplay, 0, {x:xo+525+175, y:yo-75}, 0.5);
    f91w.addSegmentDisplay(monthdayBDisplay, 0, {x:xo+525+175+75, y:yo-75}, 0.5);
    f91w.addSegmentDisplay(monthADisplay, 0, {x:xo+525+175+275, y:yo-75}, 0.5);
    f91w.addSegmentDisplay(monthBDisplay, 0, {x:xo+525+175+75+275, y:yo-75}, 0.5);
    f91w.addSegmentDisplay(monthdayADisplay, 0, {x:xo+525+175, y:yo-75}, 0.5);
    f91w.setMode(modeTime);

    // hoursTens24Display.addNeighborDisplay(hoursUnits24Display, 1)
    //     .addNeighborDisplay(minutesTensDisplay, 1).addNeighborDisplay(minutesUnitsDisplay, 1)
    //     .addNeighborDisplay(secondsTensDisplay, 1).addNeighborDisplay(secondsUnitsDisplay, 1)
    //     .addNeighborDisplay(weekdayADisplay, 1).addNeighborDisplay(weekdayBDisplay, 1)
    //     .addNeighborDisplay(monthdayADisplay, 1).addNeighborDisplay(monthdayBDisplay, 1)
    //     .addNeighborDisplay(monthADisplay, 1).addNeighborDisplay(monthBDisplay, 1);

    f91w.draw(ctx);

}

let pause = false;
let last = performance.now();

function loop(now) {
    const delta = (now - last);
    last = now;

    if (!pause) {
        f91w.update(delta);
        clear(canvas);
        f91w.draw(ctx);
    }
    console.log(f91w.activeMode.name);

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
