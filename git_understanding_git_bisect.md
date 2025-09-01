## REFLECTION

### What does git bisect do?

Git bisect uses a binary search algorithm to quickly find which commit in a project’s history introduced a bug. Instead of checking every commit manually, it narrows the search down step by step until the exact problematic commit is identified.

### When would you use it in a real-world debugging situation?

I would use git bisect in a real-world situation when my project suddenly starts failing, and I don’t know which change caused the issue. By marking one commit as “good” and another as “bad,” git bisect automatically guides me through the history until I find the exact commit that broke the project. This is especially useful when the project has a long history with many changes, since manually checking them would be too time-consuming.

### How does it compare to manually reviewing commits?

Using git bisect is much faster and more efficient than checking each commit one by one. Instead of reviewing dozens or even hundreds of commits manually, git bisect reduces the process to only a handful of checks. It also makes debugging less error-prone, since the search is systematic rather than relying on guesswork or memory.

## CREATING A BUG SCENARIO 

### GIT BISECT USAGE SCREENSHOTS
![Git bisect results](assets/git_bisect_ss.png)