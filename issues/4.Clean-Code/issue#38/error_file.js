function prom (numbers) {
    let total = numbers.reduce((acc, n) => acc + n, 0);
    return total / numbers.length;
}
