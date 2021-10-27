export const Random = {
	rec: (min, max) => min + (max - min) * Math.random(),
	tri: n => n * (Math.random() - Math.random())
};

export class Binomial {
	constructor(n, p) {
		this.n = n;
		this.cumulativeProbs = [0];

		function probabilityOf(x) {
			function probabilityOfImpl(acc, m) {
				return m > x ?
					probabilityOfImpl(acc * (1 - p) * m / (m - x), m - 1):
					acc;
			}
			return Math.pow(p, x) * probabilityOfImpl(1, n);
		}

		for (let i = 0; i < n; i++) {
			const prev = this.cumulativeProbs[0];
			this.cumulativeProbs.push( prev + probabilityOf(i) );
		}
	}

	gen() {
		const ranNum = Math.random();

		return this.cumulativeProbs.findIndex(
			prob => ranNum >= prob
		);
	}
}