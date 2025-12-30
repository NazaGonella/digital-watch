function clear(canvas) {
    ctx.fillStyle = BACKGROUND;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawPolygon(ctx, ox, oy, points, color=null, flipH = false, flipV = false) {
    ctx.beginPath();

    const sx = flipH ? -1 : 1;
    const sy = flipV ? -1 : 1;

    if (color != null) ctx.fillStyle = color;

    ctx.moveTo(
        ox + points[0][0] * sx,
        oy + points[0][1] * sy
    );

    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(
            ox + points[i][0] * sx,
            oy + points[i][1] * sy
        );
    }

    ctx.closePath();
    ctx.fill();
}