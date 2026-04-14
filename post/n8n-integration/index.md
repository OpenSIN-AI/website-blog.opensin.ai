---
title: n8n Integration: The Router Behind the OpenSIN Fleet
date: 2026-01-25
excerpt: How we use n8n as the indestructible "dumb" router for all inbound work and webhook processing.
tags: [n8n, Architecture]
---

n8n is the backbone of OpenSIN's inbound work processing. Running on our OCI VM, it acts as the **indestructible "dumb" router** that receives webhooks, normalizes payloads, and dispatches work to the right agents.

## Why n8n?

n8n Community Edition is free, reliable, and has 400+ integrations. We use it as our intake layer because it handles webhooks, polling, and scheduled tasks out of the box.

## Inbound Pipeline

- Webhook received → normalize to work_item schema
- Create/update GitHub Issue
- Delegate to appropriate Team Manager via A2A
- Track progress and alert on completion

## Community Edition + OSS

We run n8n on Community Edition but replace Premium features with OSS alternatives: Python via custom Dockerfile, Variables via env config, Version Control via cron-git-exports.
