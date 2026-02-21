---
title: "Core Transaction Routing Platform"
description: "Built a multi-region backend platform to route high-volume transactions with deterministic failover and operational visibility."
role: "Senior Backend Engineer"
ownership: "lead"
timeline: "2024-2025"
stack:
  - "Go"
  - "Kafka"
  - "PostgreSQL"
  - "Terraform"
scope:
  - "Service architecture and API contracts"
  - "Failover policy design"
  - "SLO instrumentation and runbook standards"
impact:
  - "Reduced payment routing incident rate by 37% over two quarters."
  - "Cut mean time to recovery from 42 minutes to 18 minutes through targeted observability and runbook updates."
constraints:
  - "Legacy provider APIs with inconsistent timeout behavior"
  - "Regulatory controls across multiple operational regions"
featured: true
---

## Context

The platform replaced fragmented routing logic across multiple services with a single governance model for provider selection, fallback behavior, and event tracing.

## Responsibilities

I led backend architecture decisions, defined ownership boundaries, and coordinated implementation across reliability, platform, and product engineering stakeholders.

## Approach

We introduced deterministic routing policies, explicit failure mode handling, and standardized event contracts for all provider integrations. Operationally, we aligned SLO dashboards with runbook actions and release checkpoints.

## Results

The team delivered stable cross-region failover behavior, reduced operational variance, and improved decision-making during incidents through complete transaction traceability.
