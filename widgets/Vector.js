export function vec(...args) {
	return Float64Array.from(args);
}

export function scale(a, v) {
	return v.map(x => a * x);
}
export function plus(v, w) {
	return v.map((x, i) => x + w[i]);
}
export function minus(v, w) {
	return v.map((x, i) => x - w[i]);
}

export function inner(v, w) {
	return v.reduce((a, b, i) => a + b * w[i], 0);
}

export function len2(v) {
	return v.reduce((a, b) => a + b * b, 0);
}

export function len(v) {
	return Math.sqrt(len2(v));
}


export function dis2(v, w) {
	return len2(minus(v, w));
}


export function norm(v) {
	return scale(1 / len(v), v);
}

export class Vector {
	static polar(dis, ang) {
		return new Vector(dis * Math.cos(ang), dis * Math.sin(ang));
	}

	constructor(...args) {
		this.v = Float64Array.from(args);
	}

	scale(factor) {
		return new Vector(this.v.map(x => factor * x));
	}

	add(that) {
		return new Vector(this.v.map((x, i) => x + that.v[i]));
	}
}