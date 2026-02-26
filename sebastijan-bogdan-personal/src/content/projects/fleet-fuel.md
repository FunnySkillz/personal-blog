---
title: "FleetFuel – Structured Fleet & Expense Management"
description: "A full-stack fleet management application for tracking vehicles, trips, and fuel expenses with tax-ready reporting and zero-cost infrastructure deployment."
role: "Full-Stack Engineer"
ownership: "individual"
timeline: "2025-2026"
stack:
  - ".NET 8"
  - "ASP.NET Core"
  - "Entity Framework Core"
  - "Next.js 15"
  - "TypeScript"
  - "Supabase"
  - "SQLite"
  - "PostgreSQL"
scope:
  - "End-to-end system architecture"
  - "Domain modeling for vehicles, trips, and receipts"
  - "JWT authentication and user-scoped data isolation"
  - "CSV export and reporting pipeline"
  - "Zero-cost cloud deployment"
impact:
  - "Delivered a fully functional SaaS MVP deployed publicly on free-tier infrastructure."
  - "Implemented strict user-level data isolation with Supabase JWT validation."
  - "Designed a tax-ready yearly summary export to support accountant workflows."
constraints:
  - "Zero-euro infrastructure budget"
  - "Single-developer ownership"
  - "Clear separation between MVP and post-MVP features"
featured: true
---

## Context

FleetFuel was built as a lightweight fleet management system focused on structured trip logging and fuel expense tracking. The goal was to provide individuals and small businesses with a clean, auditable way to generate yearly summaries suitable for tax reporting.

The project was developed end-to-end, covering backend architecture, frontend experience, authentication, and production deployment.

## Responsibilities

I designed the domain model, implemented the backend API with clean repository and service separation, built the frontend using Next.js and TypeScript, and handled deployment and infrastructure configuration.

The system includes user-scoped data isolation, soft-delete patterns for recoverability, and structured CSV export for yearly summaries.

## Approach

The backend follows a clear separation of concerns between controllers, services, and repositories. Authentication is handled via Supabase JWT tokens, validated server-side to enforce strict user ownership boundaries.

The frontend emphasizes mobile-first design, structured forms with validation, and guided onboarding to reduce friction. Deployment leverages Vercel and Render free tiers to prove production readiness without infrastructure cost.

## Results

FleetFuel demonstrates full ownership of a product lifecycle: from domain modeling and API design to authentication, reporting, and cloud deployment.

It reflects structured backend design, practical business-domain thinking, and disciplined implementation across the full stack.
