# ISSUE 46 UNDERSTANDING CLEAN CODE PRINCIPLES

## REFLECTION

### Simplicity

Keep it simple stupid (KISS), is a good clean code principle to implement here,
this principle states that programmers should maintain code as simple as they
can, avoiding unnecessary complexity or over-engineering, simplicity makes the
codebase easier to work with.

### Readability

The code should be easy to understand, clean code is written in a way that
makes it simple, concise and expressive. Clean code follows a series of
conventions, standards and practices that make it easy to read and follow.

### Maintainability

Clean code in inherently easier to maintain and update, reducing the time
and resources needed for future modifications.

### Consistency

Follow a style guide and conventions makes a baseline for best practices
and standard guidelines across our team's code, also coding conventions
improve the readability of the software, allowing engineers to understand
new code quickly.

### Efficiency

To write code that is optimized for its purpose means writing code that uses
system resources like CPU, memory, and network efficiently. This improves
performance across devices and ensures the application runs smoothly without
wasting resources.

## CODE EXAMPLE

[Messy File Without Code Principles](messyFile.js)

**Why it's difficult to read?**

For me it's difficult to read because it has poor variable names, they never
clarify what a variable does, there is some duplicated code to on the event
managing #texture-a and #texture-b, and there are no comments explaining what
a the code does.

[Refactored File Using Code Principles](refactoredFile.js)
