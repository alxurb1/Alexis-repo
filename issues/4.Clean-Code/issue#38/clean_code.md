# Writing Unit Tests for Clean Code Issue

## REFLECTION

### How do unit tests help keep code clean?

Unit tests help keep code clean by enhancing code quality, making sure that
each part of the code and each function works properly, helping developers
find errors on time, and avoiding them to.

### What issues did you find while testing?

The sum function works fine for basic numbers, but it has some issues.
It doesn’t check input types, so strings can get added as text. It also
has problems with decimals, like 0.1 + 0.2 not being exact. And it doesn’t
handle invalid inputs, which could break bigger projects.

## UNIT TESTING EXPERIMENT

[Base code file](math.js)

[Unit test of math.js file](math.test.js)
