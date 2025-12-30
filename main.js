const BACKGROUND = "#9EAA84"

canvas.width = 800;
canvas.height = 600;

const ctx = canvas.getContext("2d");

hoursUnits24Display.draw(ctx, 100, 100, 1);
hoursTens24Display.draw(ctx, 225, 100, 1);

window.addEventListener("keydown", e => {
    if (e.code === "Space") {
        clear(canvas);
        hoursUnits24Display.update();
        hoursTens24Display.update();
        hoursUnits24Display.draw(ctx, 225, 100, 1);
        hoursTens24Display.draw(ctx, 100, 100, 1);
    }
});