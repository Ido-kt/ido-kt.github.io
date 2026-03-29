# SDK test cycle (11 pushes)

To validate all three SDKs (Node, Python, Java) with Playwright, Selenium, and **localCheck threshold enforcement** using local packages, and to verify **Java JUnit vs TestNG** report uploads separately, run **11 separate commits and pushes**. Each push runs exactly **one workflow** (and thus one job), because each workflow is triggered only when its own file changes.

## How it works

Each workflow file has a **single selector** at the top: an `env` variable that chooses which job runs. All jobs are always defined; you only change that one line per push.

| Push  | Commit message pattern    | File to edit                     | Change only this line                          |
|-------|---------------------------|----------------------------------|------------------------------------------------|
| 1/11  | node Playwright           | `sdk-playwright-tests.yml`       | `SDK_PLAYWRIGHT_JOB: node-local`               |
| 2/11  | node Selenium             | `sdk-selenium-tests.yml`         | `SDK_SELENIUM_JOB: node-local`                 |
| 3/11  | python Playwright         | `sdk-playwright-tests.yml`       | `SDK_PLAYWRIGHT_JOB: python-local`             |
| 4/11  | python Selenium           | `sdk-selenium-tests.yml`         | `SDK_SELENIUM_JOB: python-local`               |
| 5/11  | java Playwright JUnit     | `sdk-playwright-tests.yml`       | `SDK_PLAYWRIGHT_JOB: java-playwright-junit`    |
| 6/11  | java Playwright TestNG    | `sdk-playwright-tests.yml`       | `SDK_PLAYWRIGHT_JOB: java-playwright-testng`   |
| 7/11  | java Selenium JUnit       | `sdk-selenium-tests.yml`         | `SDK_SELENIUM_JOB: java-selenium-junit`        |
| 8/11  | java Selenium TestNG      | `sdk-selenium-tests.yml`         | `SDK_SELENIUM_JOB: java-selenium-testng`       |
| 9/11  | node localCheck=true      | `sdk-localcheck-tests.yml`       | `SDK_LOCALCHECK_JOB: node-localcheck`          |
| 10/11 | python localCheck=true    | `sdk-localcheck-tests.yml`       | `SDK_LOCALCHECK_JOB: python-localcheck`        |
| 11/11 | java localCheck=true      | `sdk-localcheck-tests.yml`       | `SDK_LOCALCHECK_JOB: java-localcheck`          |

**Playwright workflow** (`sdk-playwright-tests.yml`):

```yaml
env:
  SDK_PLAYWRIGHT_JOB: none   # <- Change to: node-local | python-local | java-playwright-junit | java-playwright-testng
```

**Selenium workflow** (`sdk-selenium-tests.yml`):

```yaml
env:
  SDK_SELENIUM_JOB: none     # <- Change to: node-local | python-local | java-selenium-junit | java-selenium-testng
```

**localCheck workflow** (`sdk-localcheck-tests.yml`):

```yaml
env:
  SDK_LOCALCHECK_JOB: none   # <- Change to: node-localcheck | python-localcheck | java-localcheck
```

- Use `none` when you don't want any real test (a noop step runs).
- Each workflow has one job; steps use `if: env.SDK_*_JOB == 'job-id'` so only the selected variant runs (job-level `if` cannot use `env` in GitHub Actions, so the selector is applied at step level).

## localCheck tests (pushes 9-11)

Each localCheck push runs **two scenarios** for the selected language:

1. **PASS** -- config has generous thresholds with `"localCheck": true`. The SDK audits a page, the threshold check runs, and it passes because issue counts are below the limits.
2. **FAIL** -- config has all thresholds set to `0` with `"localCheck": true`. The threshold check detects violations and the test runner exits non-zero. The workflow verifies the non-zero exit (expected failure = test success).

This validates the full `localCheck` flow end-to-end for each SDK language.

## Rules

- **One file per push -- critical:** Each push must change **only one** workflow file. If you edit both files in the same commit, **both** workflows will run (duplicate runs). So: for pushes 1, 3, 5, 6 edit **only** `sdk-playwright-tests.yml`; for pushes 2, 4, 7, 8 edit **only** `sdk-selenium-tests.yml`; for pushes 9-11 edit **only** `sdk-localcheck-tests.yml`. Do not set the other files back to `none` in the same push.
- **One line per push:** Change only the `SDK_*_JOB` value in that file.
- JUnit and TestNG run in separate pushes so report uploads can be verified per framework.

## Node: `package-lock.json` and the SDK tarball

`npm ci` installs **exactly** what is recorded in `sdk-tests/node/package-lock.json`. That file must list `@acsbe/accessflow-sdk` with `file:../packages/acsbe-accessflow-sdk.tgz` and a matching **integrity** hash for that file.

- The **`1.1.0`** in errors is the **version inside the tarball** (`package.json` of the SDK), not a separate npm registry requirement.
- If you replace `sdk-tests/packages/acsbe-accessflow-sdk.tgz` with a new build, run **`npm install`** in `sdk-tests/node` and **commit the updated `package-lock.json`**, or `npm ci` will fail (missing package or integrity mismatch).

Node CI jobs use **`npm ci` only**; the SDK is not installed in a second step.

## Selenium jobs (Node / Python / Java)

`sdk-selenium-tests.yml` installs **Chrome for Testing** Stable (matching Chrome + chromedriver from the [CfT JSON feed](https://googlechromelabs.github.io/chrome-for-testing/)) and sets **`CHROME_BIN`** for later steps — same approach as AccessFlow CircleCI. The old `apt install google-chrome-stable` + `chrome-for-testing-public/${VERSION}` chromedriver pattern often breaks (version skew, `wget` exit 8 on 404).

## How to run the cycle

For each push 1-11:

1. Open **only** the workflow file for that push (see table -- never edit multiple workflow files in one commit).
2. Find the `env:` block at the top and set the variable to the value for that push (e.g. `SDK_PLAYWRIGHT_JOB: node-local` for push 1).
3. Commit and push **only that file**, e.g. push 1: `git add .github/workflows/sdk-playwright-tests.yml && git commit -m "test cycle 1/11: node Playwright" && git push`. Push 9: `git add .github/workflows/sdk-localcheck-tests.yml && git commit -m "test cycle 9/11: node localCheck=true" && git push`.

Repeat for the next push with the next value. Leave the other workflow files unchanged so only one workflow triggers per push.
