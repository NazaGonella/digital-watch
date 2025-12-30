const DisplayType = {
    SEVEN: "seven",
    WEEKDAY_A: "weekdayA",
    WEEKDAY_B: "weekdayB",
}

class SegmentDisplay {
    #glyphs;
    #refreshRateMs;
    #type;
    #internalTimer;
    #position;
    #scale;

    constructor(glyphs, refreshRateMs, type, startIdx = 0) {
        console.assert(Array.isArray(glyphs), "glyphs must be an array.");
        switch (type) {
            case DisplayType.SEVEN: {
                console.assert(
                    glyphs.every(a => Array.isArray(a) && a.length === 7),
                    "all glyphs must be an array with segment size == 7."
                );
            } break;
            case DisplayType.WEEKDAY_A: {
                console.assert(
                    glyphs.every(a => Array.isArray(a) && a.length === 10),
                    "all glyphs must be an array with segment size == 10."
                );
            } break;
            case DisplayType.WEEKDAY_B: {
                console.assert(
                    glyphs.every(a => Array.isArray(a) && a.length === 8),
                    "all glyphs must be an array with segment size == 8."
                );
            } break;
            default:
                console.assert(false, "invalid display type.")
        }

        this.#glyphs = glyphs;
        this.#refreshRateMs = refreshRateMs;
        this.#type = type;
        this.#internalTimer = 0;
        this.idx = startIdx;
        this.#position = {x:0, y:0};
        this.#scale = 1;
    }

    draw(ctx) {
        const scale = this.#scale;
        const x = this.#position.x;
        const y = this.#position.y;
        let glyph = this.#glyphs[this.idx];
        switch (this.#type) {
            case DisplayType.SEVEN: {
                for (let s = 0; s < glyph.length; s++) {
                    let color = glyph[s] ? "#0F1A0F" : "#8E9A78";
                    let gap = 4 * (1/scale);
                    switch (s) {
                        case 0: {
                            drawPolygon(ctx, x, y, [[0+gap, 0], [25+gap, 25], [75-gap, 25], [100-gap, 0]], color, scale); // A
                        } break;
                        case 1: {
                            drawPolygon(ctx, x + 100*scale, y, [[0, 0+gap], [25, 25+gap], [25, 75-gap], [0, 100-gap]], color, scale, true); // B
                        } break;
                        case 2: {
                            drawPolygon(ctx, x+100*scale, y+100*scale, [[0, 0+gap], [25, 25+gap], [25, 75-gap], [0, 100-gap]], color, scale, true); // C
                        } break;
                        case 3: {
                            drawPolygon(ctx, x, y+200*scale, [[0+gap, 0], [25+gap, 25], [75-gap, 25], [100-gap, 0]], color, scale, false, true);    // D
                        } break;
                        case 4: {
                            drawPolygon(ctx, x, y+100*scale, [[0, 0+gap], [25, 25+gap], [25, 75-gap], [0, 100-gap]], color, scale); // E
                        } break;
                        case 5: {
                            drawPolygon(ctx, x, y, [[0, 0+gap], [25, 25+gap], [25, 75-gap], [0, 100-gap]], color, scale); // F
                        } break;
                        case 6: {
                            drawPolygon(ctx, x, y+100*scale, [[0+gap*2, 0], [gap*2 + 25/2, 25 / 2], [100 - gap*2 - 25/2, 25 / 2], [ 100-gap*2, 0], [100 - gap*2 - 25/2, -25 / 2], [gap*2 + 25/2, -25 / 2]], color, scale, false, true); // G
                        } break;
                    }
                }
            } break;
            case DisplayType.WEEKDAY_A: {

            } break;
            case DisplayType.WEEKDAY_B: {

            } break;
        }
    }

    update(delta) {
        this.#internalTimer += delta;
        if (this.#internalTimer >= this.#refreshRateMs) {
            this.idx = (this.idx + 1) % this.#glyphs.length;
            this.#internalTimer -= this.#refreshRateMs;
        }
    }

    set position(value) {
        this.#position = value;
    }

    get position() {
        return this.#position;
    }

    set scale(value) {
        this.#scale = value;
    }

    get scale() {
        return this.#scale;
    }
}


class WatchLayout {
    #segmentDisplays = [];

    addSegmentDisplay(segmentDisplay, idx, position, scale) {
        segmentDisplay.idx = idx;
        segmentDisplay.position = position;
        segmentDisplay.scale = scale;
    
        this.#segmentDisplays.push(segmentDisplay);
    }

    update(delta) {
        for (const s of this.#segmentDisplays) {
            s.update(delta);
        }
    }

    draw(ctx) {
        for (const s of this.#segmentDisplays) {
            s.draw(ctx);
        }
    }
}