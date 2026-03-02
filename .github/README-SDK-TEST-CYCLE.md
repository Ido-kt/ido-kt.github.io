# SDK test cycle (6 pushes)

To validate all three SDKs (Node, Python, Java) with both Playwright and Selenium using local packages, run **6 separate commits and pushes**. Each push runs exactly **one workflow** (and thus one job), because each workflow is triggered only when its own file changes.

| Push | Commit message pattern      | Change only this file              | Which workflow runs      |
|------|-----------------------------|------------------------------------|--------------------------|
| 1/6  | node Playwright             | `sdk-playwright-tests.yml`         | Playwright (node-local)  |
| 2/6  | node Selenium               | `sdk-selenium-tests.yml`           | Selenium (node-local)    |
| 3/6  | python Playwright           | `sdk-playwright-tests.yml`         | Playwright (python-local)|
| 4/6  | python Selenium             | `sdk-selenium-tests.yml`           | Selenium (python-local)  |
| 5/6  | java Playwright             | `sdk-playwright-tests.yml`         | Playwright (java-local)  |
| 6/6  | java Selenium               | `sdk-selenium-tests.yml`           | Selenium (java-local)    |

**Rules:**

- **One file per push:** Push 1, 3, 5 edit only `sdk-playwright-tests.yml`. Push 2, 4, 6 edit only `sdk-selenium-tests.yml`. That way only one workflow runs per push (each workflow has `paths:` so it runs only when its file changes).
- Each workflow must always have **at least one job**. Use the **noop** job when no real job is enabled in that workflow.
- In the file you edit, enable exactly one real job: uncomment that job and comment out the noop (leave other real jobs commented).
