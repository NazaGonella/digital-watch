// SevenDisplay
// --A--
// F   B
// --G--
// E   C
// --D--
const gDecSeven = {
    0 : [1, 1, 1, 1, 1, 1, 0], // 0
    1 : [0, 1, 1, 0, 0, 0, 0], // 1
    2 : [1, 1, 0, 1, 1, 0, 1], // 2
    3 : [1, 1, 1, 1, 0, 0, 1], // 3
    4 : [0, 1, 1, 0, 0, 1, 1], // 4
    5 : [1, 0, 1, 1, 0, 1, 1], // 5
    6 : [1, 0, 1, 1, 1, 1, 1], // 6
    7 : [1, 1, 1, 0, 0, 0, 0], // 7
    8 : [1, 1, 1, 1, 1, 1, 1], // 8
    9 : [1, 1, 1, 1, 0, 1, 1], // 9
}

// WeekdayDisplayA
//   --A--
//   F H B
//   --G--
//   E I C
// J---D--
const gDayWeekdayA = {
    "S" : [1, 0, 1, 1, 0, 1, 1, 0, 0, 0],       // Sunday
    "M" : [1, 1, 1, 0, 1, 1, 0, 1, 1, 0],       // Monday
    "T" : [1, 0, 0, 0, 0, 0, 0, 1, 1, 0],       // Tuesday
    "W" : [0, 1, 1, 1, 1, 1, 0, 1, 1, 0],       // Wednesday
    // "T" : [1, 0, 0, 0, 0, 0, 0, 1, 1, 0],    // Thursday
    "F" : [1, 0, 0, 0, 1, 1, 1, 0, 0, 0],       // Friday
    // "S" : [1, 0, 1, 1, 0, 1, 1, 0, 0, 0],    // Saturday
}

// WeekdayDisplayB
// H---A--
//   F   B
//   --G--
//   E   C
//   --D--
const gDayWeekdayB = {
    "U" : [0, 1, 1, 1, 1, 1, 0, 0],     // Sunday
    "O" : [1, 1, 1, 1, 1, 1, 0, 0],     // Monday
    // "U" : [0, 1, 1, 1, 1, 1, 0, 0],  // Tuesday
    "E" : [1, 0, 0, 1, 1, 1, 1, 0],     // Wednesday
    "H" : [0, 1, 1, 0, 1, 1, 1, 0],     // Thursday
    "R" : [1, 1, 1, 0, 1, 1, 1, 1],     // Friday
    "A" : [1, 1, 1, 0, 1, 1, 1, 0],     // Saturday
}

const weekdayA = ["S", "M", "T", "W", "T", "F", "S"];
const weekdayB = ["U", "O", "U", "E", "H", "R", "A"];
const hoursTens12 =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1];
const hoursUnits12 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
const hoursTens24 =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2];
const hoursUnits24 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3];
const minutesTens =  [0, 1, 2, 3, 4, 5];
const minutesUnits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const secondsTens =  [0, 1, 2, 3, 4, 5];
const secondsUnits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const weekdayADisplay = new DisplayController(weekdayA.map(k => gDayWeekdayA[k]), 1000 * 60 * 60 * 24, DisplayType.WEEKDAY_A);
const weekdayBDisplay = new DisplayController(weekdayB.map(k => gDayWeekdayB[k]), 1000 * 60 * 60 * 24, DisplayType.WEEKDAY_B);
const hoursTens12Display = new DisplayController(hoursTens12.map(k => gDecSeven[k]), 1000 * 60 * 60, DisplayType.SEVEN);
const hoursUnits12Display = new DisplayController(hoursUnits12.map(k => gDecSeven[k]), 1000 * 60 * 60, DisplayType.SEVEN);
const hoursTens24Display = new DisplayController(hoursTens24.map(k => gDecSeven[k]), 1000 * 60 * 60, DisplayType.SEVEN);
const hoursUnits24Display = new DisplayController(hoursUnits24.map(k => gDecSeven[k]), 1000 * 60 * 60, DisplayType.SEVEN);
const minutesTensDisplay = new DisplayController(minutesTens.map(k => gDecSeven[k]), 1000 * 60, DisplayType.SEVEN);
const minutesUnitsDisplay = new DisplayController(minutesUnits.map(k => gDecSeven[k]), 1000 * 60, DisplayType.SEVEN);
const secondsTensDisplay = new DisplayController(secondsTens.map(k => gDecSeven[k]), 1000, DisplayType.SEVEN);
const secondsUnitsDisplay = new DisplayController(secondsUnits.map(k => gDecSeven[k]), 1000, DisplayType.SEVEN);
