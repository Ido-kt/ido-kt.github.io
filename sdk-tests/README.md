# AccessFlow SDK Integration Tests

Comprehensive test suite validating the AccessFlow SDK across Node.js, Python, and Java, testing both local package installation and GCP Artifact Registry installation.

## Overview

This test suite validates that the AccessFlow SDK:
1. Installs successfully from both local packages and GCP Artifact Registry
2. Initializes correctly with API keys from environment variables
3. Audits live web pages (https://ido-kt.github.io/)
4. Generates reports with expected structure
5. Detects accessibility issues in test fixtures

## Directory Structure

```
sdk-tests/
├── README.md                          # This file
├── packages/                          # Pre-built SDK packages (to be added)
│   ├── README.md                      # Instructions for adding packages
│   ├── acsbe-accessflow-sdk.tgz      # Node package (add this)
│   ├── accessflow_sdk-*.whl          # Python wheel (add this)
│   └── accessflow-sdk-*.jar          # Java JAR (add this)
├── fixtures/
│   └── sample_page_with_issues.html  # Baseline test page with known issues
├── node/                              # Node.js/TypeScript tests
│   ├── package.json
│   ├── playwright.config.ts
│   ├── tsconfig.json
│   └── tests/
│       └── sdk-audit.spec.ts
├── python/                            # Python tests
│   ├── requirements.txt
│   ├── pytest.ini
│   ├── conftest.py
│   └── tests/
│       └── test_sdk_audit.py
└── java/                              # Java tests
    ├── pom.xml
    └── src/test/java/com/acsbe/accessflow/
        └── SDKAuditTest.java
```

## Next Steps

### 1. Add Pre-Built SDK Packages

Before the tests can run, you need to add the pre-built SDK packages:

```bash
# From the accessFlow repo, build the SDK
cd /Users/idokan-tor/Cursor/accessFlow/src/accessflow-sdk
npm run build

# Copy packages to the test repo
cp packages/acsbe-accessflow-sdk.tgz /Users/idokan-tor/Cursor/ido-kt.github.io/sdk-tests/packages/
cp packages/accessflow_sdk-*.whl /Users/idokan-tor/Cursor/ido-kt.github.io/sdk-tests/packages/
cp java/target/accessflow-sdk-*.jar /Users/idokan-tor/Cursor/ido-kt.github.io/sdk-tests/packages/

# Commit the packages
cd /Users/idokan-tor/Cursor/ido-kt.github.io
git add sdk-tests/packages/*.{tgz,whl,jar}
git commit -m "Add pre-built SDK packages for testing"
```

See [packages/README.md](./packages/README.md) for detailed instructions.

### 2. Configure GitHub Secrets and Variables

#### Required Secrets

Go to GitHub repository → Settings → Secrets and variables → Actions → Secrets

Add the following secrets:

| Secret | Description | How to get it |
|--------|-------------|---------------|
| `ACCESSFLOW_SDK_API_KEY` | Runtime API key for audit requests | Provided by AccessFlow team |
| `ACCESSFLOW_REGISTRY_TOKEN` | Base64-encoded GCP service account key | `cat service-account-key.json \| base64 \| tr -d '\n'` |
| `ACCESSFLOW_NPM_REGISTRY_TOKEN` | Double base64-encoded token for npm | `cat service-account-key.json \| base64 \| tr -d '\n' \| base64 \| tr -d '\n'` |

#### Required Variables

Go to GitHub repository → Settings → Secrets and variables → Actions → Variables

Add the following variables:

| Variable | Example Value |
|----------|---------------|
| `GCP_SDK_NPM_REGISTRY_URL` | `us-east1-npm.pkg.dev/PROJECT/stag-accessflow-npm` |
| `GCP_SDK_PYTHON_REGISTRY_URL` | `us-east1-python.pkg.dev/PROJECT/stag-accessflow-python` |
| `GCP_SDK_MAVEN_REGISTRY_URL` | `https://us-east1-maven.pkg.dev/PROJECT/stag-accessflow-maven` |

> Note: Replace `PROJECT` with your GCP project ID, and adjust the region/environment as needed.

### 3. Push to GitHub and Run Tests

```bash
cd /Users/idokan-tor/Cursor/ido-kt.github.io

# Stage all the new test files
git add .

# Commit the test suite
git commit -m "Add AccessFlow SDK integration tests

- Add Node.js, Python, and Java test suites
- Configure GitHub Actions workflow with 6 jobs
- Test both local package and GCP registry installation
- Audit deployed site at https://ido-kt.github.io/"

# Push to trigger the workflow
git push
```

The tests will run automatically on every push. View results at:
`https://github.com/Ido-kt/ido-kt.github.io/actions`

## GitHub Actions Workflow

The workflow (`.github/workflows/sdk-tests.yml`) runs 6 parallel jobs:

1. **node-local** - Install SDK from local `.tgz` package
2. **node-registry** - Install SDK from GCP Artifact Registry (npm)
3. **python-local** - Install SDK from local `.whl` package
4. **python-registry** - Install SDK from GCP Artifact Registry (Python)
5. **java-local** - Install SDK from local `.jar` package
6. **java-registry** - Install SDK from GCP Artifact Registry (Maven)

Each job:
- Sets up the language runtime
- Installs dependencies
- Installs the SDK (local or registry)
- Installs Playwright browsers
- Runs the test suite
- Uploads test results as artifacts

## Test Coverage

Each language tests:

1. **Deployed Site Audit** - Audit https://ido-kt.github.io/ and verify results
2. **Report Structure** - Validate report contains expected fields
3. **Fixture Page Audit** - Audit local HTML with known issues
4. **SDK Initialization** - Verify SDK initializes with environment API key

## Running Tests Locally

### Node.js

```bash
cd sdk-tests/node
npm ci
npm install ../packages/acsbe-accessflow-sdk.tgz
npx playwright install chromium
export ACCESSFLOW_SDK_API_KEY=your-api-key
npx playwright test
```

### Python

```bash
cd sdk-tests/python
pip install -r requirements.txt
pip install ../packages/accessflow_sdk-*.whl
playwright install chromium
export ACCESSFLOW_SDK_API_KEY=your-api-key
pytest -v
```

### Java

```bash
cd sdk-tests/java
mvn install:install-file \
  -Dfile=../packages/accessflow-sdk-1.0.1.jar \
  -DgroupId=com.acsbe \
  -DartifactId=accessflow-sdk \
  -Dversion=1.0.1 \
  -Dpackaging=jar
mvn exec:java -e -D exec.mainClass=com.microsoft.playwright.CLI -D exec.args="install chromium"
export ACCESSFLOW_SDK_API_KEY=your-api-key
mvn test
```

## Troubleshooting

### Local Install Jobs Failing

- Ensure SDK packages are committed to `sdk-tests/packages/`
- Check package filenames match what tests expect
- Verify packages are not corrupted

### Registry Install Jobs Failing

- Verify all GitHub secrets are configured correctly
- Check that GCP registry URLs are correct
- Ensure service account has permissions to pull from registries
- For npm: confirm `ACCESSFLOW_NPM_REGISTRY_TOKEN` is double base64-encoded

### SDK Initialization Errors

- Verify `ACCESSFLOW_SDK_API_KEY` secret is set in GitHub
- Check API key is valid and not expired
- Ensure API key has permission to run audits

### Tests Can't Access Deployed Site

- Verify https://ido-kt.github.io/ is accessible
- Check if the site is properly deployed
- Tests may fail if the site is down or unreachable

## Maintenance

### Updating SDK Version

When the SDK version changes:

1. Build new packages in the accessFlow repo
2. Copy new packages to `sdk-tests/packages/`
3. Update version in `sdk-tests/java/pom.xml` if needed
4. Commit and push

The tests will automatically use the new packages.

### Adding More Tests

Add new test cases to:
- Node: `sdk-tests/node/tests/sdk-audit.spec.ts`
- Python: `sdk-tests/python/tests/test_sdk_audit.py`
- Java: `sdk-tests/java/src/test/java/com/acsbe/accessflow/SDKAuditTest.java`

## Questions?

See the plan file for full implementation details, or refer to the SDK documentation:
- [AccessFlow SDK README](/Users/idokan-tor/Cursor/accessFlow/src/accessflow-sdk/README.md)
- [Node.js SDK Docs](/Users/idokan-tor/Cursor/accessFlow/src/accessflow-sdk/node/README.md)
- [Python SDK Docs](/Users/idokan-tor/Cursor/accessFlow/src/accessflow-sdk/python/README.md)
- [Java SDK Docs](/Users/idokan-tor/Cursor/accessFlow/src/accessflow-sdk/java/README.md)
