# SDK test cycle (8 pushes)

To validate all three SDKs (Node, Python, Java) with both Playwright and Selenium using local packages, and to verify **Java JUnit vs TestNG** report uploads separately, run **8 separate commits and pushes**. Each push runs exactly **one workflow** (and thus one job), because each workflow is triggered only when its own file changes.

| Push | Commit message pattern       | Change only this file              | Which workflow runs              |
|------|------------------------------|------------------------------------|----------------------------------|
| 1/8  | node Playwright              | `sdk-playwright-tests.yml`         | Playwright (node-local)          |
| 2/8  | node Selenium                | `sdk-selenium-tests.yml`          | Selenium (node-local)            |
| 3/8  | python Playwright            | `sdk-playwright-tests.yml`        | Playwright (python-local)        |
| 4/8  | python Selenium              | `sdk-selenium-tests.yml`          | Selenium (python-local)          |
| 5/8  | java Playwright JUnit        | `sdk-playwright-tests.yml`        | Playwright (java-playwright-junit)  |
| 6/8  | java Playwright TestNG       | `sdk-playwright-tests.yml`        | Playwright (java-playwright-testng)  |
| 7/8  | java Selenium JUnit          | `sdk-selenium-tests.yml`          | Selenium (java-selenium-junit)  |
| 8/8  | java Selenium TestNG         | `sdk-selenium-tests.yml`          | Selenium (java-selenium-testng) |

**Rules:**

- **One file per push:** Pushes 1, 3, 5, 6 edit only `sdk-playwright-tests.yml`. Pushes 2, 4, 7, 8 edit only `sdk-selenium-tests.yml`. That way only one workflow runs per push (each workflow has `paths:` so it runs only when its file changes).
- Each workflow must always have **at least one job**. Use the **noop** job when no real job is enabled in that workflow.
- In the file you edit, enable **exactly one** real job: uncomment that job and comment out the noop (leave all other real jobs commented). For Java, JUnit and TestNG must run in separate pushes so report uploads can be verified per framework.

**How to run the cycle:** For each push 1–8, edit only the workflow file in the table: comment out the `noop` job and uncomment the single job for that row; commit with the suggested message; push. Then either revert that file to noop-only for the next push, or on the next push edit the other file (or the same file and switch to the next job). The repo default is noop-only so that each run is explicit.
