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
                const gap = 4 * (1/scale);
                const segW = 25;
                const totalWidth = segW * 5;
                for (let s = 0; s < glyph.length; s++) {
                    let color = glyph[s] ? "#0F1A0F" : "#8E9A78";
                    switch (s) {
                        case 0: {
                            drawPolygon(ctx, x, y, [[0+gap, 0], [segW+gap, segW], [totalWidth-segW-gap, segW], [totalWidth-gap, 0]], color, scale); // A
                        } break;
                        case 1: {
                            drawPolygon(ctx, x + totalWidth*scale, y, [[0, 0+gap], [segW, segW+gap], [segW, totalWidth-segW-gap], [0, totalWidth-gap]], color, scale, true); // B
                        } break;
                        case 2: {
                            drawPolygon(ctx, x+totalWidth*scale, y+totalWidth*scale, [[0, 0+gap], [segW, segW+gap], [segW, totalWidth-segW-gap], [0, totalWidth-gap]], color, scale, true); // C
                        } break;
                        case 3: {
                            drawPolygon(ctx, x, y+totalWidth*2*scale, [[0+gap, 0], [segW+gap, segW], [totalWidth-segW-gap, segW], [totalWidth-gap, 0]], color, scale, false, true);    // D
                        } break;
                        case 4: {
                            drawPolygon(ctx, x, y+totalWidth*scale, [[0, 0+gap], [segW, segW+gap], [segW, totalWidth-segW-gap], [0, totalWidth-gap]], color, scale); // E
                        } break;
                        case 5: {
                            drawPolygon(ctx, x, y, [[0, 0+gap], [segW, segW+gap], [segW, totalWidth-segW-gap], [0, totalWidth-gap]], color, scale); // F
                        } break;
                        case 6: {
                            drawPolygon(ctx, x, y+totalWidth*scale, [[0+gap*2, 0], [gap*2 + segW/2, segW/2], [totalWidth - gap*2 - segW/2, segW/2], [totalWidth-gap*2, 0], [totalWidth - gap*2 - segW/2, -segW/2], [gap*2 + segW/2, -segW/2]], color, scale, false, true); // G
                        } break;
                    }
                }
            } break;
            case DisplayType.WEEKDAY_A: {
                let gap = 4 * (1/scale);
                const segW = 25;
                const totalWidth = segW * 5;
                for (let s = 0; s < glyph.length; s++) {
                    let color = glyph[s] ? "#0F1A0F" : "#8E9A78";
                    switch (s) {
                        case 0: {
                            drawPolygon(ctx, x, y, [[0+gap, 0], [segW+gap, segW], [totalWidth-segW-gap, segW], [totalWidth-gap, 0]], color, scale); // A
                        } break;
                        case 1: {
                            drawPolygon(ctx, x + totalWidth*scale, y, [[0, 0+gap], [segW, segW+gap], [segW, totalWidth-segW-gap], [0, totalWidth-gap]], color, scale, true); // B
                        } break;
                        case 2: {
                            drawPolygon(ctx, x+totalWidth*scale, y+totalWidth*scale, [[0, 0+gap], [segW, segW+gap], [segW, totalWidth-segW-gap], [0, totalWidth-gap]], color, scale, true); // C
                        } break;
                        case 3: {
                            drawPolygon(ctx, x, y+totalWidth*2*scale, [[0+gap, 0], [segW+gap, segW], [totalWidth-segW-gap, segW], [totalWidth-gap, 0]], color, scale, false, true);    // D
                        } break;
                        case 4: {
                            drawPolygon(ctx, x, y+totalWidth*scale, [[0, 0+gap], [segW, segW+gap], [segW, totalWidth-segW-gap], [0, totalWidth-gap]], color, scale); // E
                        } break;
                        case 5: {
                            drawPolygon(ctx, x, y, [[0, 0+gap], [segW, segW+gap], [segW, totalWidth-segW-gap], [0, totalWidth-gap]], color, scale); // F
                        } break;
                        case 6: {
                            drawPolygon(ctx, x, y+totalWidth*scale, [[0+gap*2, 0], [gap*2 + segW/2, segW/2], [totalWidth - gap*2 - segW/2, segW/2], [totalWidth-gap*2, 0], [totalWidth - gap*2 - segW/2, -segW/2], [gap*2 + segW/2, -segW/2]], color, scale, false, true); // G
                        } break;
                        case 7: {
                            drawPolygon(ctx, x + (totalWidth/2 - segW/2) * scale, y + segW * scale, [[0, gap], [segW, gap], [segW, segW*3 - gap], [0, segW*3 - gap]], color, scale);
                        } break;
                        case 8: {
                            drawPolygon(ctx, x + (totalWidth/2 - segW/2) * scale, y + (totalWidth + segW) * scale, [[0, gap], [segW, gap], [segW, segW*3 - gap], [0, segW*3 - gap]], color, scale);
                        } break;
                        case 9: {
                            drawPolygon(ctx, x + (- segW - gap)*scale, y + (totalWidth*2 - segW) * scale, [[0, 0], [segW, 0], [segW, segW], [0, segW]], color, scale);
                        } break;


                    }
                }
            } break;
            case DisplayType.WEEKDAY_B: {
                const gap = 4 * (1/scale);
                const segW = 25;
                const totalWidth = segW * 5;
                for (let s = 0; s < glyph.length; s++) {
                    let color = glyph[s] ? "#0F1A0F" : "#8E9A78";
                    switch (s) {
                        case 0: {
                            drawPolygon(ctx, x, y, [[0+gap, 0], [segW+gap, segW], [totalWidth-segW-gap, segW], [totalWidth-gap, 0]], color, scale); // A
                        } break;
                        case 1: {
                            drawPolygon(ctx, x + totalWidth*scale, y, [[0, 0+gap], [segW, segW+gap], [segW, totalWidth-segW-gap], [0, totalWidth-gap]], color, scale, true); // B
                        } break;
                        case 2: {
                            drawPolygon(ctx, x+totalWidth*scale, y+totalWidth*scale, [[0, 0+gap], [segW, segW+gap], [segW, totalWidth-segW-gap], [0, totalWidth-gap]], color, scale, true); // C
                        } break;
                        case 3: {
                            drawPolygon(ctx, x, y+totalWidth*2*scale, [[0+gap, 0], [segW+gap, segW], [totalWidth-segW-gap, segW], [totalWidth-gap, 0]], color, scale, false, true);    // D
                        } break;
                        case 4: {
                            drawPolygon(ctx, x, y+totalWidth*scale, [[0, 0+gap], [segW, segW+gap], [segW, totalWidth-segW-gap], [0, totalWidth-gap]], color, scale); // E
                        } break;
                        case 5: {
                            drawPolygon(ctx, x, y, [[0, 0+gap], [segW, segW+gap], [segW, totalWidth-segW-gap], [0, totalWidth-gap]], color, scale); // F
                        } break;
                        case 6: {
                            drawPolygon(ctx, x, y+totalWidth*scale, [[0+gap*2, 0], [gap*2 + segW/2, segW/2], [totalWidth - gap*2 - segW/2, segW/2], [totalWidth-gap*2, 0], [totalWidth - gap*2 - segW/2, -segW/2], [gap*2 + segW/2, -segW/2]], color, scale, false, true); // G
                        } break;
                        case 7: {
                            drawPolygon(ctx, x + (- segW - gap)*scale, y, [[0, 0], [segW, 0], [segW, segW], [0, segW]], color, scale);
                        } break;
                    }
                }
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