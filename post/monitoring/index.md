---
title: Monitoring 100+ Agents: Observability at Fleet Scale
date: 2026-02-25
excerpt: Prometheus, Grafana, and structured logging — how we keep 100 agents healthy 24/7.
tags: [Monitoring, DevOps]
---

When you have 100+ autonomous agents running across multiple servers and cloud platforms, you need serious observability. Here's our monitoring stack.

## Heartbeat Monitoring

Every agent pings a health endpoint every 30 seconds. Missed heartbeats trigger automatic restarts within 60 seconds. This is our first line of defense.

## Prometheus + Grafana

We expose Prometheus metrics from every agent: task completion rate, token usage, error rate, and latency. Grafana dashboards give us a real-time fleet overview.

## Structured Logging

All agents output structured JSON logs to stdout. These are collected by Promtail and shipped to Loki for searchable, filterable log aggregation.

## Alerting

When things go wrong, agents escalate via Telegram to the on-call human. We've tuned our alerts to only page for genuine issues — no false positives.
