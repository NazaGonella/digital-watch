import { WatchLayout } from "../models/watch_layout.js";
import { SegmentDisplay, DisplayType } from "../models/segment_display.js";
import * as G from "../data/glyphs.js";

const air_or_pipe = [1, 1, 1, 0];
const display = new SegmentDisplay(air_or_pipe.map(k => G.gDecSeven[k]), 100, DisplayType.SEVEN);

export function initFlappy(xo, yo) {
    const flappy = new WatchLayout();
    
    const modePipe = flappy.addMode("PIPE");

    flappy.setMode(modePipe);
    flappy.addSegmentDisplay(display, 0, {x:xo, y:yo}, 1);
    flappy.addSegmentDisplay(display, 1, {x:xo+125, y:yo}, 1);
    flappy.addSegmentDisplay(display, 2, {x:xo+250, y:yo}, 1);
    flappy.addSegmentDisplay(display, 3, {x:xo+375, y:yo}, 1);

    return flappy;
}
