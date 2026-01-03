import { WatchLayout } from "../models/watch_layout.js";
import { SegmentDisplay, DisplayType } from "../models/segment_display.js";
import * as G from "../data/glyphs.js";
import * as S from "../data/f91w_sequences.js";

const monthADisplay = new SegmentDisplay(S.monthA.map(k => G.gDecSeven[k]), 1000 * 60 * 60 * 24, DisplayType.SEVEN)
const monthBDisplay = new SegmentDisplay(S.monthB.map(k => G.gDecSeven[k]), 1000 * 60 * 60 * 24, DisplayType.SEVEN)
const monthdayADisplay = new SegmentDisplay(S.monthdayA.map(k => G.gDecSeven[k]), 1000 * 60 * 60 * 24, DisplayType.SEVEN);
const monthdayBDisplay = new SegmentDisplay(S.monthdayB.map(k => G.gDecSeven[k]), 1000 * 60 * 60 * 24, DisplayType.SEVEN);
const weekdayADisplay = new SegmentDisplay(S.weekdayA.map(k => G.gDayWeekdayA[k]), 1000 * 60 * 60 * 24, DisplayType.WEEKDAY_A);
const weekdayBDisplay = new SegmentDisplay(S.weekdayB.map(k => G.gDayWeekdayB[k]), 1000 * 60 * 60 * 24, DisplayType.WEEKDAY_B);
const hoursTens12Display = new SegmentDisplay(S.hoursTens12.map(k => G.gDecSeven[k]), 1000 * 60 * 60, DisplayType.SEVEN);
const hoursUnits12Display = new SegmentDisplay(S.hoursUnits12.map(k => G.gDecSeven[k]), 1000 * 60 * 60, DisplayType.SEVEN);
const hoursTens24Display = new SegmentDisplay(S.hoursTens24.map(k => G.gDecSeven[k]), 1000 * 60 * 60, DisplayType.SEVEN);
const hoursUnits24Display = new SegmentDisplay(S.hoursUnits24.map(k => G.gDecSeven[k]), 1000 * 60 * 60, DisplayType.SEVEN);
const minutesTensDisplay = new SegmentDisplay(S.minutesTens.map(k => G.gDecSeven[k]), 1000 * 60 * 10, DisplayType.SEVEN);
const minutesUnitsDisplay = new SegmentDisplay(S.minutesUnits.map(k => G.gDecSeven[k]), 1000 * 60, DisplayType.SEVEN);
const secondsTensDisplay = new SegmentDisplay(S.secondsTens.map(k => G.gDecSeven[k]), 1000 * 10, DisplayType.SEVEN);
const secondsUnitsDisplay = new SegmentDisplay(S.secondsUnits.map(k => G.gDecSeven[k]), 1000, DisplayType.SEVEN);

export function initF91W(xo, yo) {
    const f91w = new WatchLayout();
    
    const modeTime = f91w.addMode("TIME");

    f91w.setMode(modeTime);
    f91w.addSegmentDisplay(hoursTens24Display, 0, {x:xo+25, y:yo+100}, 1);
    f91w.addSegmentDisplay(hoursUnits24Display, 0, {x:xo+25+150, y:yo+100}, 1);
    f91w.addSegmentDisplay(minutesTensDisplay, 0, {x:xo+175+200, y:yo+100}, 1);
    f91w.addSegmentDisplay(minutesUnitsDisplay, 0, {x:xo+175+200+150, y:yo+100}, 1);
    f91w.addSegmentDisplay(secondsTensDisplay, 0, {x:xo+525+175, y:yo+225}, 0.5);
    f91w.addSegmentDisplay(secondsUnitsDisplay, 0, {x:xo+525+175+75, y:yo+225}, 0.5);
    f91w.addSegmentDisplay(weekdayADisplay, 0, {x:xo+25+275, y:yo-75}, 0.5);
    f91w.addSegmentDisplay(weekdayBDisplay, 0, {x:xo+25+75+(25/2)+275, y:yo-75}, 0.5);
    f91w.addSegmentDisplay(monthdayADisplay, 0, {x:xo+525+175, y:yo-75}, 0.5);
    f91w.addSegmentDisplay(monthdayBDisplay, 0, {x:xo+525+175+75, y:yo-75}, 0.5);
    f91w.addSegmentDisplay(monthADisplay, 0, {x:xo+525+175+275, y:yo-75}, 0.5);
    f91w.addSegmentDisplay(monthBDisplay, 0, {x:xo+525+175+75+275, y:yo-75}, 0.5);

    return f91w;
}
