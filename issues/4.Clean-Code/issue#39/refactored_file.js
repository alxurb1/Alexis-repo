function prom(numbers) {

    if (!Array.isArray(numbers)) {
        return "Error: An array was expected";
    }
    if (numbers.length === 0) {
        return "Error: The array is empty";
    }
    if (!numbers.every(n => typeof n === "number")) {
        return "Error: All elements must be numeric";
    }

    try {
        const total = numbers.reduce((acc, n) => acc + n, 0);
        return total / numbers.length;
    } catch (error) {
        return `An unexpected error occurred: ${error.message}`;
    }
}
