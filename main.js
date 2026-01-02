import { WatchLayout } from "./models/watch_layout.js";
import { clear } from "./render/draw.js";
import * as D from "./display_definitions.js";

const BACKGROUND = "#9EAA84"

canvas.width = 1920;
canvas.height = 1080;

const ctx = canvas.getContext("2d");
const f91w = new WatchLayout();
const modeTime = f91w.addMode("TIME");
const modeAlarm = f91w.addMode("ALARM");

function init() {
    const xo = 0;
    const yo = 200;

    f91w.setMode(modeTime);
    f91w.addSegmentDisplay(D.hoursTens24Display, 0, {x:xo+25, y:yo+100}, 1);
    f91w.addSegmentDisplay(D.hoursUnits24Display, 1, {x:xo+25+150, y:yo+100}, 1);
    f91w.addSegmentDisplay(D.minutesTensDisplay, 2, {x:xo+175+200, y:yo+100}, 1);
    f91w.addSegmentDisplay(D.minutesUnitsDisplay, 6, {x:xo+175+200+150, y:yo+100}, 1);
    f91w.addSegmentDisplay(D.secondsTensDisplay, 0, {x:xo+525+175, y:yo+225}, 0.5);
    f91w.addSegmentDisplay(D.secondsUnitsDisplay, 0, {x:xo+525+175+75, y:yo+225}, 0.5);
    f91w.addSegmentDisplay(D.weekdayADisplay, 3, {x:xo+25+275, y:yo-75}, 0.5);
    f91w.addSegmentDisplay(D.weekdayBDisplay, 3, {x:xo+25+75+(25/2)+275, y:yo-75}, 0.5);
    f91w.setMode(modeAlarm);
    f91w.addSegmentDisplay(D.monthdayADisplay, 0, {x:xo+525+175, y:yo-75}, 0.5);
    f91w.addSegmentDisplay(D.monthdayBDisplay, 0, {x:xo+525+175+75, y:yo-75}, 0.5);
    f91w.addSegmentDisplay(D.monthADisplay, 0, {x:xo+525+175+275, y:yo-75}, 0.5);
    f91w.addSegmentDisplay(D.monthBDisplay, 0, {x:xo+525+175+75+275, y:yo-75}, 0.5);
    f91w.addSegmentDisplay(D.monthdayADisplay, 0, {x:xo+525+175, y:yo-75}, 0.5);
    f91w.setMode(modeTime);

    f91w.draw(ctx);

}

let pause = false;
let last = performance.now();

function loop(now) {
    const delta = (now - last);
    last = now;

    if (!pause) {
        f91w.update(delta);
        clear(ctx, canvas, BACKGROUND);
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
