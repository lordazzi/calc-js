export default class Decimal {
	value = 0;
	private n1 = 0;
	private baseDecimal: string | number = '1';
	constructor(_n1: number) {
		this.n1 = _n1;
	}

	sum(_n2: number): number {
		let n1Length = String(this.n1).replace(/\d+\.?/, '').length,
			n2Length = String(_n2).replace(/\d+\.?/, '').length,
			length = n1Length > n2Length ? n1Length : n2Length;

		while (length--) this.baseDecimal = `${this.baseDecimal}0`;
		this.baseDecimal = Number(this.baseDecimal);

		this.n1 = this.n1 * this.baseDecimal;
		_n2 = _n2 * this.baseDecimal;

		this.value = (this.n1 + _n2) / this.baseDecimal;
		return this.value;
	}

	minus(_n2: number): number {
		let n1Length = String(this.n1).replace(/\d+\.?/, '').length,
			n2Length = String(_n2).replace(/\d+\.?/, '').length,
			length = n1Length > n2Length ? n1Length : n2Length;

		while (length--) this.baseDecimal = `${this.baseDecimal}0`;
		this.baseDecimal = Number(this.baseDecimal);

		this.n1 = this.n1 * this.baseDecimal;
		_n2 = _n2 * this.baseDecimal;

		this.value = (this.n1 - _n2) / this.baseDecimal;
		return this.value;
	}
}
