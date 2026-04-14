---
title: Security Architecture: Zero Secrets in Code
date: 2026-03-08
excerpt: How OpenSIN ensures no API keys, tokens, or secrets ever touch the codebase.
tags: [Security, Architecture]
---

Security is not an afterthought in OpenSIN — it's a first-class design principle. Our **zero secrets in code** policy means no API keys, tokens, or credentials ever appear in source code, config files, or environment variables checked into git.

## The Auth Broker Pattern

OpenSIN uses a centralized auth broker that agents query at runtime. Agents receive short-lived, scoped tokens — never raw credentials. If an agent is compromised, the blast radius is limited to that single token's scope.

## Key Components

- **Secret Authority** — Centralized secret management with audit logging
- **Approval Lanes** — Sensitive actions require human sign-off via Telegram/Slack
- **Token Rotation** — Automatic rotation of all credentials on configurable schedules
- **Scoped Permissions** — Each agent gets minimum necessary permissions

## SOC 2 Ready

OpenSIN's security model is designed to meet SOC 2 Type II requirements from day one. Air-gap deployment is fully supported for regulated industries.
