export function curry(fn1, fn2) {
	return (x) => (y) => fn1(fn2(x, y), y);
}