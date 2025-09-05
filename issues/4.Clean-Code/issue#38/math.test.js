const { sum } = require("./math");

test("Sum 2 + 3 must be 5", () => {
    expect(sum(2, 3)).toBe(5);
});

test("Sum -1 + 1 must be 0", () => {
    expect(sum(-1, 1)).toBe(0);
});
