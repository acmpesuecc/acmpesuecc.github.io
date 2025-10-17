# Contributing

Thank you for taking the time to contribute to our website!

This document contains all the information to help you get started!

## Setup

Please refer to the setup instructions provided in [README.md](README.md) to set up the project locally.

## Pre-commit Hooks (Husky)

Husky automatically runs quality checks on every commit.  
**Do not remove or modify these hooks.** They exist to maintain code quality and prevent regressions.

| Hook         | Purpose                                                |
| ------------ | ------------------------------------------------------ |
| `pre-commit` | Runs Next Lint and Prettier                            |
| `commit-msg` | Validates commit message format (Conventional Commits) |

**Do not** commit with `--no-verify`.  
If a hook fails, fix the issue before retrying.

## Commit Guidelines

We follow [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) messages.

## Pull Request Guidelines

- Each pull request should focus on **a single, clear purpose** — a feature, fix, refactor, or documentation update. Avoid combining unrelated changes in one PR.
- Before opening a PR, ensure **all local checks pass**:

  ```bash
  npm run lint
  npm run format:fix
  npm run build
  ```

- **Do not** deviate from the Pull Request format.

## Opening an Issue

When opening an issue, please include enough detail to help others reproduce or understand the problem.

### For bugs:

- Steps to reproduce

- Expected vs. actual behavior

- Environment details (OS, Node version, browser, etc.)

- Screenshots or logs, if available

### For feature requests:

- The problem or use case it solves

- A clear and concise description of the proposed feature

- Any relevant mockups, examples, or references

### For chores or maintenance:

- Describe the task and its purpose

- Mention any dependencies or related PRs

- Before opening a new issue, please check if it already exists.

## DON'Ts

- **Do not** remove or disable Husky hooks.
- **Do not** bypass commit checks with --no-verify.
- **Do not** push directly to the main branch.
- **Do not** submit multiple unrelated changes in one PR.
- **Do not** deviate from the Pull Request format.
- **Do not** commit build artifacts (.next/, dist/, etc.).
- **Do not** use vague commit messages like “fix stuff” or “update things.”
- **Do not** modify dependency versions without a clear reason.
