![Playwright Logo](../public/Playwright_Logo.svg "Playwright")

# Playwright Testing Instructions

This document provides instructions on how to execute and interact with end-to-end tests using Playwright for our demo project. The setup is designed to cover testing in both desktop and mobile viewports to ensure our application's cross-environment reliability and responsiveness.

## Running the Tests

### Desktop and Mobile Viewports

Run your tests interactively with the Playwright Test Runner UI for a better developer experience with time travel debugging, watch mode, and more:

```bash
npm run test:ui
```

This command initiates the test runner in UI mode, allowing you to run and debug tests interactively. You can select between different environments such as 'chromium' for desktop or 'mobile' for mobile viewport tests.

### End-to-End Tests in Headless Mode

For continuous integration or to run tests without UI interaction, use the following command to execute all end-to-end tests in headless mode:

```bash
npm run test:e2e
```

This will run all configured tests across desktop and mobile environments without the interactive UI.

## Reviewing Test Results

### Test Reports

To view a comprehensive report of your test results, which includes details such as pass/fail status, screenshots, and error logs, run:

```bash
npx playwright show-report
```

This generates an HTML report that can be viewed in any web browser, providing an insightful overview of the test executions.

### Snapshot Updates

If your tests include snapshot comparisons and you've made intentional changes to the UI, update the snapshots by executing:

```bash
npx playwright test --update-snapshots
```

This will update the snapshots to match the new state of your application's UI elements.

## Additional Guidance

- Regular test execution during development is recommended to catch and address regressions promptly.
- Make sure your local development environment is set up with the latest version of Playwright to utilize all available features and improvements.

For more comprehensive guidance on writing tests, understanding the test structure, or contributing to the test suite, please consult the [Playwright documentation](https://playwright.dev/docs/intro).





