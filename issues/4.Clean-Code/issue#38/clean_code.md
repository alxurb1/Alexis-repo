# ISSUE 38: HANDLING ERRORS AND EDGE CASES

## REFLECTION

### What was the issue with the original code?

The issue with the original code was that if the numbers array is empty,
the code breaks. Also, if there are non-numeric values, the code will
also break. In other words, the original code had no error handling.

### How does handling errors improve reliability?

Error handling improves reliability because it allows our code to handle
all kinds of mistakes. We always have to assume that users may not follow
the instructions, so our software should never fail unexpectedly.

## EXPERIMENT

[File with error handling mistakes](error_file.js)

[Refactored file with error handling](refactored_file.js)
