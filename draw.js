function clear(canvas) {
    ctx.fillStyle = BACKGROUND;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawPolygon(ctx, ox, oy, points, color=null, scale=1, flipH = false, flipV = false) {
    ctx.beginPath();
    const sx = flipH ? -1 : 1;
    const sy = flipV ? -1 : 1;
    if (color != null) ctx.fillStyle = color;

    ctx.moveTo(
        ox + points[0][0] * sx * scale,
        oy + points[0][1] * sy * scale
    );

    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(
            ox + points[i][0] * sx * scale,
            oy + points[i][1] * sy * scale
        );
    }

    ctx.closePath();
    ctx.fill();
}