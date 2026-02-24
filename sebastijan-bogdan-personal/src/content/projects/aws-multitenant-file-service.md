---
title: "AWS Multi-Tenant FileService"
description: "A production-ready file service built with .NET 8 and Amazon S3 using presigned URLs, strict tenant isolation, and metadata persistence in PostgreSQL."
role: "Backend Engineer"
ownership: "lead"
timeline: "2025"
stack:
  - ".NET 8"
  - "ASP.NET Core"
  - "Entity Framework Core"
  - "PostgreSQL"
  - "Amazon S3"
  - "Keycloak"
scope:
  - "Multi-tenant storage architecture"
  - "Presigned URL upload/download flow"
  - "Tenant-scoped authorization policies"
  - "Metadata modeling and indexing strategy"
impact:
  - "Eliminated backend file streaming by delegating transfers directly to S3 via short-lived presigned URLs."
  - "Implemented strict tenant and ownership boundaries to ensure secure multi-tenant isolation."
  - "Designed extensible metadata model using PostgreSQL jsonb without schema churn."
constraints:
  - "Strict tenant isolation requirements"
  - "Private S3 bucket with no public access"
  - "JWT-based tenant and owner authorization enforcement"
featured: true
---

## Context

The service was designed to handle file uploads and downloads in a multi-tenant environment while maintaining strict isolation between tenants. All file bytes are transferred directly between client and S3 using presigned URLs. The API stores and manages metadata only.

## Responsibilities

I designed the multi-tenant storage model, defined the S3 key structure, implemented the presign workflow, and enforced tenant-scoped authorization policies using JWT claims and role checks.

## Approach

The architecture separates storage from metadata management. Files are stored in a private S3 bucket with server-side encryption. The API generates short-lived presigned PUT/GET URLs and verifies object existence before finalizing uploads.

Tenant-first key conventions and owner guards ensure isolation at both storage and application levels. Metadata is stored in PostgreSQL with jsonb support for extensibility and indexed for efficient search and listing.

## Results

The resulting system provides secure, scalable file handling without backend streaming overhead. It demonstrates clean separation of concerns, explicit tenant boundaries, and infrastructure-aware backend design suitable for regulated or multi-tenant environments.