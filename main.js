const BACKGROUND = "#9EAA84"

canvas.width = 1920;
canvas.height = 1080;

const ctx = canvas.getContext("2d");
const f91w = new WatchLayout();

function init() {
    // f91w.addSegmentDisplay(hoursTens24Display, 0, {x:25, y:100}, 1);
    // f91w.addSegmentDisplay(hoursUnits24Display, 1, {x:25+125, y:100}, 1);
    // f91w.addSegmentDisplay(minutesTensDisplay, 2, {x:150+175, y:100}, 1);
    // f91w.addSegmentDisplay(minutesUnitsDisplay, 6, {x:150+175+125, y:100}, 1);
    // f91w.addSegmentDisplay(secondsTensDisplay, 0, {x:450+150, y:200}, 0.5);
    // f91w.addSegmentDisplay(secondsUnitsDisplay, 0, {x:450+150+(125/2), y:200}, 0.5);

    // f91w.addSegmentDisplay(weekdayADisplay, 3, {x:25, y:325}, 0.5);
    // f91w.addSegmentDisplay(weekdayBDisplay, 3, {x:25+75, y:325}, 0.5);

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

    f91w.draw(ctx);

}

let running = true;
let last = performance.now();

function loop(now) {
    const delta = (now - last) * 500000;
    last = now;

    if (running) {
        f91w.update(delta);
        f91w.draw(ctx);
    }


    // let x = 225;
    // let y = 325;
    // let scale = 1;
    // let color = "#0F1A0F";
    // let gap = 4 * (1/scale);
    // let segW = 20;
    // let totalWidth = segW * 5;
    // drawPolygon(ctx, x, y, [[0+gap, 0], [segW+gap, segW], [totalWidth-segW-gap, segW], [totalWidth-gap, 0]], color, scale); // A
    // drawPolygon(ctx, x + totalWidth*scale, y, [[0, 0+gap], [segW, segW+gap], [segW, totalWidth-segW-gap], [0, totalWidth-gap]], color, scale, true); // B
    // drawPolygon(ctx, x+totalWidth*scale, y+totalWidth*scale, [[0, 0+gap], [segW, segW+gap], [segW, totalWidth-segW-gap], [0, totalWidth-gap]], color, scale, true); // C
    // drawPolygon(ctx, x, y+totalWidth*2*scale, [[0+gap, 0], [segW+gap, segW], [totalWidth-segW-gap, segW], [totalWidth-gap, 0]], color, scale, false, true);    // D
    // drawPolygon(ctx, x, y+totalWidth*scale, [[0, 0+gap], [segW, segW+gap], [segW, totalWidth-segW-gap], [0, totalWidth-gap]], color, scale); // E
    // drawPolygon(ctx, x, y, [[0, 0+gap], [segW, segW+gap], [segW, totalWidth-segW-gap], [0, totalWidth-gap]], color, scale); // F
    // drawPolygon(ctx, x, y+totalWidth*scale, [[0+gap*2, 0], [gap*2 + segW/2, segW/2], [totalWidth - gap*2 - segW/2, segW/2], [totalWidth-gap*2, 0], [totalWidth - gap*2 - segW/2, -segW/2], [gap*2 + segW/2, -segW/2]], color, scale, false, true); // G

    requestAnimationFrame(loop);
}

window.addEventListener("keydown", (event) => {
    if (event.code == "Space") {
        running = !running;
    }
});


init();
requestAnimationFrame(loop);
