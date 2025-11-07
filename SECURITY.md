# Security Policy

## Supported Versions

We actively support the following versions of TRYKON:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

The TRYKON team takes security vulnerabilities seriously. We appreciate your efforts to responsibly disclose your findings.

### How to Report

Please **DO NOT** report security vulnerabilities through public GitHub issues.

Instead, please report security issues by emailing: **security@trykon.com**

Include the following information in your report:

- **Description**: A clear description of the vulnerability
- **Steps to Reproduce**: Detailed steps to reproduce the issue  
- **Impact**: Explain the potential impact of the vulnerability
- **Affected Components**: Which parts of the application are affected
- **Suggested Fix**: If you have ideas for a fix (optional)

### What to Expect

- **Response Time**: We will acknowledge your report within 48 hours
- **Investigation**: We will investigate and validate the vulnerability within 7 days
- **Resolution**: We aim to resolve critical vulnerabilities within 30 days
- **Disclosure**: We will coordinate with you on responsible disclosure

### Security Best Practices

When using TRYKON:

1. **Environment Variables**: Never commit `.env` files containing sensitive data
2. **Dependencies**: Keep all dependencies updated to their latest secure versions
3. **Authentication**: Use strong passwords and enable 2FA when available
4. **HTTPS**: Always use HTTPS in production environments
5. **Input Validation**: Validate all user inputs on both client and server side

### Security Features

TRYKON includes several built-in security features:

- **CORS Protection**: Configured CORS policies
- **XSS Protection**: Content Security Policy headers
- **Input Validation**: Zod schema validation
- **SQL Injection Protection**: Parameterized queries via Prisma
- **Rate Limiting**: API endpoint throttling
- **Secure Headers**: Security-focused HTTP headers

Thank you for helping keep TRYKON secure!