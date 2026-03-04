# SDK test cycle (8 pushes)

To validate all three SDKs (Node, Python, Java) with both Playwright and Selenium using local packages, and to verify **Java JUnit vs TestNG** report uploads separately, run **8 separate commits and pushes**. Each push runs exactly **one workflow** (and thus one job), because each workflow is triggered only when its own file changes.

## How it works

Each workflow file has a **single selector** at the top: an `env` variable that chooses which job runs. All jobs are always defined; you only change that one line per push.

| Push | Commit message pattern   | File to edit                    | Change only this line                          |
|------|--------------------------|---------------------------------|------------------------------------------------|
| 1/8  | node Playwright          | `sdk-playwright-tests.yml`      | `SDK_PLAYWRIGHT_JOB: node-local`               |
| 2/8  | node Selenium            | `sdk-selenium-tests.yml`       | `SDK_SELENIUM_JOB: node-local`                |
| 3/8  | python Playwright        | `sdk-playwright-tests.yml`      | `SDK_PLAYWRIGHT_JOB: python-local`             |
| 4/8  | python Selenium          | `sdk-selenium-tests.yml`       | `SDK_SELENIUM_JOB: python-local`              |
| 5/8  | java Playwright JUnit    | `sdk-playwright-tests.yml`      | `SDK_PLAYWRIGHT_JOB: java-playwright-junit`   |
| 6/8  | java Playwright TestNG   | `sdk-playwright-tests.yml`      | `SDK_PLAYWRIGHT_JOB: java-playwright-testng`   |
| 7/8  | java Selenium JUnit      | `sdk-selenium-tests.yml`       | `SDK_SELENIUM_JOB: java-selenium-junit`       |
| 8/8  | java Selenium TestNG     | `sdk-selenium-tests.yml`       | `SDK_SELENIUM_JOB: java-selenium-testng`      |

**Playwright workflow** (`sdk-playwright-tests.yml`):

```yaml
env:
  SDK_PLAYWRIGHT_JOB: none   # ← Change to: node-local | python-local | java-playwright-junit | java-playwright-testng
```

**Selenium workflow** (`sdk-selenium-tests.yml`):

```yaml
env:
  SDK_SELENIUM_JOB: none     # ← Change to: node-local | python-local | java-selenium-junit | java-selenium-testng
```

- Use `none` when you don’t want any real test (a noop step runs).
- Each workflow has one job; steps use `if: env.SDK_*_JOB == 'job-id'` so only the selected variant runs (job-level `if` cannot use `env` in GitHub Actions, so the selector is applied at step level).

## Rules

- **One file per push — critical:** Each push must change **only one** workflow file. If you edit both files in the same commit, **both** workflows will run (duplicate runs). So: for pushes 1, 3, 5, 6 edit **only** `sdk-playwright-tests.yml`; for pushes 2, 4, 7, 8 edit **only** `sdk-selenium-tests.yml`. Do not set the other file back to `none` in the same push.
- **One line per push:** Change only the `SDK_PLAYWRIGHT_JOB` or `SDK_SELENIUM_JOB` value in that file.
- JUnit and TestNG run in separate pushes so report uploads can be verified per framework.

## How to run the cycle

For each push 1–8:

1. Open **only** the workflow file for that push (see table — never edit both files in one commit).
2. Find the `env:` block at the top and set the variable to the value for that push (e.g. `SDK_PLAYWRIGHT_JOB: node-local` for push 1).
3. Commit and push **only that file**, e.g. push 1: `git add .github/workflows/sdk-playwright-tests.yml && git commit -m "test cycle 1/8: node Playwright" && git push`. Push 2: `git add .github/workflows/sdk-selenium-tests.yml && ...` (do not add the Playwright file).

Repeat for the next push with the next value. Leave the other workflow file unchanged so only one workflow triggers per push.
