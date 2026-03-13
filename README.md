# FrontEnd-Angular: Playwright vs. Selenium Study

This repository serves as a dedicated "Test Subject" for exploring the architectural advantages of **Playwright** over **Selenium**. 

## 🎯 Project Objectives
The primary focus of this project is to demonstrate a professional CI/CD ecosystem and highlight why Playwright is the superior choice for modern web automation. Key areas of study include:

- **Reliability (Auto-waiting):** Eliminating the "flaky" sleep/wait issues common in Selenium.
- **Network Interception:** Mocking API responses (like 500 errors) directly in the browser—a task that is notoriously difficult in Selenium.
- **Developer Experience:** Utilizing the Trace Viewer and UI Mode for rapid debugging.
- **DevOps Integration:** Building a "Split-Repo" CI/CD pipeline using GitHub Actions and Docker.

## 🏗️ Architecture
This project is part of a two-repo testing system:
1. **App Repo (This one):** Packages the Angular frontend into a Docker container and publishes it to GHCR (GitHub Container Registry).
2. **[Test Repo Link]:** Pulls the latest containerized version of this app to run E2E suites in a clean, isolated environment.

## 📝 Note on Application Logic
To maintain focus on testing infrastructure, the application logic is intentionally simplified. This allows for clear demonstrations of **locator strategies** and **mocking scenarios** without the noise of complex business rules.
