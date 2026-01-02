const monthADisplay = new SegmentDisplay(monthA.map(k => gDecSeven[k]), 1000 * 60 * 60 * 24, DisplayType.SEVEN)
const monthBDisplay = new SegmentDisplay(monthB.map(k => gDecSeven[k]), 1000 * 60 * 60 * 24, DisplayType.SEVEN)
const monthdayADisplay = new SegmentDisplay(monthdayA.map(k => gDecSeven[k]), 1000 * 60 * 60 * 24, DisplayType.SEVEN);
const monthdayBDisplay = new SegmentDisplay(monthdayB.map(k => gDecSeven[k]), 1000 * 60 * 60 * 24, DisplayType.SEVEN);
const weekdayADisplay = new SegmentDisplay(weekdayA.map(k => gDayWeekdayA[k]), 1000 * 60 * 60 * 24, DisplayType.WEEKDAY_A);
const weekdayBDisplay = new SegmentDisplay(weekdayB.map(k => gDayWeekdayB[k]), 1000 * 60 * 60 * 24, DisplayType.WEEKDAY_B);
const hoursTens12Display = new SegmentDisplay(hoursTens12.map(k => gDecSeven[k]), 1000 * 60 * 60, DisplayType.SEVEN);
const hoursUnits12Display = new SegmentDisplay(hoursUnits12.map(k => gDecSeven[k]), 1000 * 60 * 60, DisplayType.SEVEN);
const hoursTens24Display = new SegmentDisplay(hoursTens24.map(k => gDecSeven[k]), 1000 * 60 * 60, DisplayType.SEVEN);
const hoursUnits24Display = new SegmentDisplay(hoursUnits24.map(k => gDecSeven[k]), 1000 * 60 * 60, DisplayType.SEVEN);
const minutesTensDisplay = new SegmentDisplay(minutesTens.map(k => gDecSeven[k]), 1000 * 60 * 10, DisplayType.SEVEN);
const minutesUnitsDisplay = new SegmentDisplay(minutesUnits.map(k => gDecSeven[k]), 1000 * 60, DisplayType.SEVEN);
const secondsTensDisplay = new SegmentDisplay(secondsTens.map(k => gDecSeven[k]), 1000 * 10, DisplayType.SEVEN);
const secondsUnitsDisplay = new SegmentDisplay(secondsUnits.map(k => gDecSeven[k]), 1000, DisplayType.SEVEN);