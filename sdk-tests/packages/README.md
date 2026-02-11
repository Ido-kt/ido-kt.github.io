# SDK Package Files

This directory contains pre-built AccessFlow SDK packages for local installation testing.

## Required Files

Add the following files to this directory (they will be committed to the repo):

### 1. Node.js Package (`.tgz`)
```bash
# From the accessFlow repo, after building the SDK:
cp accessFlow/src/accessflow-sdk/packages/acsbe-accessflow-sdk.tgz ./sdk-tests/packages/
```

Expected filename: `acsbe-accessflow-sdk.tgz`

### 2. Python Package (`.whl`)
```bash
# From the accessFlow repo, after building the SDK:
cp accessFlow/src/accessflow-sdk/packages/accessflow_sdk-*.whl ./sdk-tests/packages/
```

Expected filename pattern: `accessflow_sdk-1.0.1-py3-none-any.whl` (version may vary)

### 3. Java Package (`.jar`)
```bash
# From the accessFlow repo, after building the SDK:
cp accessFlow/src/accessflow-sdk/java/target/accessflow-sdk-*.jar ./sdk-tests/packages/
```

Expected filename pattern: `accessflow-sdk-1.0.1.jar` (version may vary)

## How to Build SDK Packages

From the `accessFlow` repo:

```bash
cd src/accessflow-sdk

# Build all packages
npm run build

# Packages will be in:
# - packages/acsbe-accessflow-sdk.tgz (Node)
# - packages/accessflow_sdk-*.whl (Python)
# - java/target/accessflow-sdk-*.jar (Java)
```

## Updating Packages

When the SDK version changes:

1. Build new packages in the accessFlow repo
2. Copy the new packages to this directory
3. Commit and push the updated packages
4. The CI tests will automatically use the new versions

## Note

These packages are used for the "local install" test jobs. The "registry install" jobs pull packages from GCP Artifact Registry instead.
