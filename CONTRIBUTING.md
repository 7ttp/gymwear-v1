# Contributing to TRYKON

We love your input! We want to make contributing to TRYKON as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, track issues and feature requests, and accept pull requests.

### Pull Request Process

1. **Fork** the repository and create your branch from `main`
2. **Install** dependencies: `pnpm install`
3. **Make** your changes in a feature branch
4. **Test** your changes thoroughly
5. **Ensure** the test suite passes
6. **Make sure** your code lints: `pnpm lint`
7. **Update** documentation if needed
8. **Submit** a pull request!

## Branch Naming

Use descriptive branch names with prefixes:

- `feature/add-payment-integration`
- `bugfix/fix-cart-calculation`
- `docs/update-readme`
- `refactor/improve-api-structure`

## Code Style

We use ESLint and Prettier to maintain consistent code style:

```bash
# Check linting
pnpm lint

# Auto-fix linting issues
pnpm lint:fix

# Format code
pnpm format
```

### TypeScript Guidelines

- Use strict TypeScript mode
- Define proper interfaces and types
- Avoid `any` types when possible
- Use meaningful variable and function names

### Component Guidelines

- Use functional components with hooks
- Follow the single responsibility principle
- Create reusable components when appropriate
- Use proper prop validation with TypeScript

## Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
feat: add new payment method integration
fix: resolve cart calculation issue
docs: update installation instructions
style: improve button hover animations
refactor: reorganize utility functions
test: add unit tests for user authentication
```

## Testing

Before submitting your PR, make sure:

- [ ] All existing tests pass
- [ ] New functionality includes tests
- [ ] Code coverage doesn't decrease significantly
- [ ] Manual testing on different devices/browsers

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Generate coverage report
pnpm test:coverage
```

## Documentation

- Update the README.md if you change functionality
- Add JSDoc comments for new functions
- Update type definitions
- Include examples for new features

## Issue Reports

Great Bug Reports tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening)

## Feature Requests

We love feature requests! Please provide:

- **Use case**: Why do you need this feature?
- **Description**: What should the feature do?
- **Implementation ideas**: How might this be implemented?
- **Alternatives**: Are there existing workarounds?

## Development Setup

1. **Clone** your fork:
   ```bash
   git clone https://github.com/your-username/trykon.git
   cd trykon
   ```

2. **Install** dependencies:
   ```bash
   pnpm install
   cd backend && pnpm install && cd ..
   ```

3. **Set up** environment:
   ```bash
   cp .env.example .env.local
   cp backend/.env.example backend/.env
   ```

4. **Start** development servers:
   ```bash
   # Frontend (Terminal 1)
   pnpm dev

   # Backend (Terminal 2)  
   cd backend && pnpm start
   ```

## Project Structure

Understanding the project structure helps with contributions:

```
trykon/
├── app/                    # Next.js app router
├── components/            # Reusable React components
│   ├── ui/               # Base UI components
│   └── layout/           # Layout components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/              # Static assets
├── backend/             # Express.js API
└── styles/              # Global styles
```

## Getting Help

- Check existing [issues](https://github.com/7ttp/trykon/issues)
- Join our [discussions](https://github.com/7ttp/trykon/discussions)
- Email us at: [dev@trykon.com](mailto:dev@trykon.com)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions
- Annual contributor highlights

---

**Thank you for contributing to TRYKON!** 🙏