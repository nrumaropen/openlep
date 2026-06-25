# Component 1: Standardized Language Access Compliance Data Schema

## Overview

This component establishes the data foundation of OpenLEP — a standardized relational database model engineered specifically to transform how public institutions monitor, evaluate, and ensure the civil rights of Limited English Proficient (LEP) populations.

Unlike traditional enterprise databases optimized for fiscal or operational efficiency, this schema is architecturally optimized for **information equity and statutory compliance**.

---

## Contents

| File | Description |
|---|---|
| `schema-erd.md` | Entity-Relationship Diagram (ERD) and table definitions for the Language Access Compliance Data Model |
| `data-schema-narrative.md` | Plain-language explanation of schema design decisions and their impact on LEP individuals |

---

## Core Design Principle

The schema centers around real-time human interactions captured in the `service_events` table — the relational nexus between an individual beneficiary, a specific public program, and the deployment of language assistance. This ensures that an LEP individual's interaction with a public entity is never invisible, unmonitored, or unbacked by legal protections.

---

## Key Capabilities

### 1. Service Gap Detection
By structurally separating an individual's intrinsic language profile (`language_needs`) from the actual accommodation delivered (`language_services`), the schema enables automated gap analysis. If a recorded language need has no corresponding completed service event, the system flags a compliance breach.

### 2. Spoken vs. Written Differentiation
The schema explicitly decouples `preferred_language_code` (spoken communication) from `written_language_code` (literacy and document access), ensuring individuals who can speak conversational English but cannot read complex legal or medical documents receive appropriate written translation services.

### 3. Service Latency Monitoring
Temporal markers (`start_time`, `end_time`) allow institutions to monitor and minimize interpreter deployment delays, preventing dangerous service gaps in time-sensitive healthcare or legal contexts.

### 4. Auditable Complaint Integration
Integrated `satisfaction_survey` and `complaints` tables ensure qualitative feedback is structurally tied to the institution's core compliance profile — making service failures visible and mandating remediation.

### 5. Legal Requirement Mapping
A dedicated `requirement_mappings` intersection table maps every operational data point directly to applicable civil rights frameworks, including Title VI of the Civil Rights Act, Executive Order 13166, and Section 1557 of the Affordable Care Act.

---

## Legal Frameworks Supported

- Title VI of the Civil Rights Act of 1964
- Executive Order 13166 (Improving Access to Services for Persons with Limited English Proficiency)
- Section 1557 of the Affordable Care Act
- Every Student Succeeds Act (ESSA)
- State-level language access mandates

---

[← Back to OpenLEP Main Repository](../README.md)
