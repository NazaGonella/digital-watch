import { SegmentDisplay, DisplayType } from "./models/segment_display.js";
import * as G from "./data/glyphs.js"
import * as DEF from "./definitions.js"

const monthADisplay = new SegmentDisplay(DEF.monthA.map(k => G.gDecSeven[k]), 1000 * 60 * 60 * 24, DisplayType.SEVEN)
const monthBDisplay = new SegmentDisplay(DEF.monthB.map(k => G.gDecSeven[k]), 1000 * 60 * 60 * 24, DisplayType.SEVEN)
const monthdayADisplay = new SegmentDisplay(DEF.monthdayA.map(k => G.gDecSeven[k]), 1000 * 60 * 60 * 24, DisplayType.SEVEN);
const monthdayBDisplay = new SegmentDisplay(DEF.monthdayB.map(k => G.gDecSeven[k]), 1000 * 60 * 60 * 24, DisplayType.SEVEN);
const weekdayADisplay = new SegmentDisplay(DEF.weekdayA.map(k => G.gDayWeekdayA[k]), 1000 * 60 * 60 * 24, DisplayType.WEEKDAY_A);
const weekdayBDisplay = new SegmentDisplay(DEF.weekdayB.map(k => G.gDayWeekdayB[k]), 1000 * 60 * 60 * 24, DisplayType.WEEKDAY_B);
const hoursTens12Display = new SegmentDisplay(DEF.hoursTens12.map(k => G.gDecSeven[k]), 1000 * 60 * 60, DisplayType.SEVEN);
const hoursUnits12Display = new SegmentDisplay(DEF.hoursUnits12.map(k => G.gDecSeven[k]), 1000 * 60 * 60, DisplayType.SEVEN);
const hoursTens24Display = new SegmentDisplay(DEF.hoursTens24.map(k => G.gDecSeven[k]), 1000 * 60 * 60, DisplayType.SEVEN);
const hoursUnits24Display = new SegmentDisplay(DEF.hoursUnits24.map(k => G.gDecSeven[k]), 1000 * 60 * 60, DisplayType.SEVEN);
const minutesTensDisplay = new SegmentDisplay(DEF.minutesTens.map(k => G.gDecSeven[k]), 1000 * 60 * 10, DisplayType.SEVEN);
const minutesUnitsDisplay = new SegmentDisplay(DEF.minutesUnits.map(k => G.gDecSeven[k]), 1000 * 60, DisplayType.SEVEN);
const secondsTensDisplay = new SegmentDisplay(DEF.secondsTens.map(k => G.gDecSeven[k]), 1000 * 10, DisplayType.SEVEN);
const secondsUnitsDisplay = new SegmentDisplay(DEF.secondsUnits.map(k => G.gDecSeven[k]), 1000, DisplayType.SEVEN);

export {
    monthADisplay,
    monthBDisplay,
    monthdayADisplay,
    monthdayBDisplay,
    weekdayADisplay,
    weekdayBDisplay,
    hoursTens12Display,
    hoursUnits12Display,
    hoursTens24Display,
    hoursUnits24Display,
    minutesTensDisplay,
    minutesUnitsDisplay,
    secondsTensDisplay,
    secondsUnitsDisplay
}