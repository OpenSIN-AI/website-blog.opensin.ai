---
title: "Supabase: The Central Database for the Agent Fleet"
date: 2026-01-20
excerpt: How we use Supabase as the single source of truth for agent state, tokens, and fleet management.
tags: [Database, Supabase]
---

Every agent needs persistent storage. OpenSIN uses **Supabase** (PostgreSQL) as the central database for agent state, token pools, task queues, and fleet management.

## Database Schema

- **agents** — Agent registry with health status
- **tokens** — API token pool with rotation status
- **tasks** — Task queue with status tracking
- **teams** — Team definitions and member agents
- **audit_log** — Complete audit trail of all agent actions

## Row-Level Security

Each agent has its own database user with RLS policies ensuring it can only access its own tasks and tokens. Zero trust at the database level.
