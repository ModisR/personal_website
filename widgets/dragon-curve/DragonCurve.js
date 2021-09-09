export function dragonCurve(ctx, iter, x0, y0, x1, y1) {
	if (iter < 1) {
		ctx.moveTo(x0, y0);
		ctx.lineTo(x1, y1);
	}
	else {
		const x2 = (x0 + x1 + y1 - y0) / 2;
		const y2 = (y0 + y1 + x0 - x1) / 2;

		dragonCurve(ctx, iter - 1, x0, y0, x2, y2);
		dragonCurve(ctx, iter - 1, x1, y1, x2, y2);
	}
}
