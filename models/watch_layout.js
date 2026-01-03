export class WatchLayout {
    #activeMode = null;
    #leadMode = null;

    setMode(mode) {
        this.#activeMode = mode;
    }

    setNextMode() {
        this.#activeMode = this.#activeMode.next;
    }

    addSegmentDisplay(segmentDisplay, idx, position, scale, copy=true) {
        if (!this.#activeMode) {
            console.log("current mode not set.");
            return;
        }

        if (copy) {
            segmentDisplay = segmentDisplay.clone();
        }

        segmentDisplay.idx = idx;
        segmentDisplay.position = position;
        segmentDisplay.scale = scale;
    
        this.#activeMode.segmentDisplays.push(segmentDisplay);
    }

    addMode(name) {
        const newMode = {name:name, prev:null, next:null, segmentDisplays:[]};

        if (!this.#leadMode) {
            newMode.prev = newMode;
            newMode.next = newMode;
            this.#leadMode = newMode;
        } else {
            newMode.prev = this.#leadMode;
            newMode.next = this.#leadMode.next;
            this.#leadMode.next.prev = newMode;
            this.#leadMode.next = newMode;
            this.#leadMode = newMode;
        }

        return newMode;
    }

    // deleteMode(mode) {
    //     if (this.#leadMode == mode) {
    //         this.#leadMode = mode.prev;
    //     }
    //     if (mode.next) {
    //         mode.next.prev = mode.prev;
    //     }
    //     if (mode.prev) {
    //         mode.prev.next = mode.next;
    //     }
    // }

    get activeMode() {
        return this.#activeMode;
    }

    update(delta) {
        if (!this.#activeMode) {
            console.log("current mode not set.");
            return;
        }
        for (const s of this.#activeMode.segmentDisplays) {
            s.update(delta);
        }
    }

    draw(ctx) {
        if (!this.#activeMode) {
            console.log("current mode not set.");
            return;
        }
        const activeMode = this.#activeMode;
        for (const s of this.#activeMode.segmentDisplays) {
            s.draw(ctx);
        }
    }
}