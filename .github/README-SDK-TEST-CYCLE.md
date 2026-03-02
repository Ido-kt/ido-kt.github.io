# SDK test cycle (6 pushes)

To validate all three SDKs (Node, Python, Java) with both Playwright and Selenium using local packages, run **6 separate commits and pushes**. Each push runs exactly **one** job.

| Push | Commit message pattern      | Playwright workflow      | Selenium workflow     |
|------|-----------------------------|-------------------------|------------------------|
| 1/6  | node Playwright             | **node-local** enabled  | noop only              |
| 2/6  | node Selenium               | noop only               | **node-local** enabled |
| 3/6  | python Playwright           | **python-local** enabled| noop only              |
| 4/6  | python Selenium             | noop only               | **python-local** enabled |
| 5/6  | java Playwright             | **java-local** enabled  | noop only              |
| 6/6  | java Selenium               | noop only               | **java-local** enabled |

**Rules:**

- Each workflow must always have **at least one job** (GitHub Actions invalidates `jobs:` with zero jobs). Use the **noop** job when no real job runs in that workflow.
- Enable exactly one real job per push: uncomment that job and comment out the noop (and leave other real jobs commented).
