---
title: Deploying OpenSIN on Oracle Cloud Infrastructure (OCI)
date: 2026-03-05
excerpt: Step-by-step guide to deploying OpenSIN agents on OCI Always Free VMs for 24/7 operation.
tags: [DevOps, OCI]
---

Running autonomous AI agents requires infrastructure that's always on. OCI's Always Free tier gives us an **A1.Flex VM with 4 OCPUs and 24GB RAM** — enough to run dozens of agents 24/7 at zero cost.

## What We Run on OCI

- **n8n** — Workflow orchestration and webhook routing
- **Token Factory** — Headless Docker containers for API token rotation
- **Supabase** — PostgreSQL database for agent state and fleet management
- **OpenCode** — AI coding agents running as persistent processes

## Deployment Pipeline

We use GitHub Actions to build Docker images and deploy to OCI via SSH. Each service has its own Docker Compose stack with health checks and auto-restart policies.

## Cost: $0/month

The A1.Flex VM is Always Free. We run everything else on Hugging Face Spaces (also free) and Cloudflare Pages for static sites. Total infrastructure cost: zero.
