/* eslint-env jest */
import { addNumbers } from './math';

describe('Math utilities', () => {
  test('should add two positive numbers correctly', () => {
    const num1 = 5;
    const num2 = 3;
    const expected = 8;

    const result = addNumbers(num1, num2);

    expect(result).toBe(expected);
  });
  test('should add negative numbers correctly', () => {
    const num1 = -5;
    const num2 = 3;
    const expected = -2;

    const result = addNumbers(num1,num2)

    expect(result).toBe(expected);
});
});