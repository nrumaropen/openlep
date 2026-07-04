# OpenLEP
### AI-Driven Language Access Compliance Infrastructure for U.S. Public Institutions

[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
[![Status: Active Development](https://img.shields.io/badge/Status-Active%20Development-green)]()

---

## Overview

OpenLEP is an open-source, AI-assisted compliance monitoring framework designed to help U.S. public institutions systematically track, measure, and demonstrate compliance with federal and state language access obligations for Limited English Proficient (LEP) populations.

Over **26 million individuals** in the United States are Limited English Proficient. Federal law — including Title VI of the Civil Rights Act, Section 1557 of the Affordable Care Act, and the Every Student Succeeds Act — requires public institutions to provide meaningful language access. Despite these obligations, the U.S. Commission on Civil Rights found in its May 2026 report that federal agencies lack adequate systems to identify, track, and evaluate language access provision at scale.

OpenLEP directly addresses this documented gap.

---

## The Problem

Public institutions serving LEP populations face a shared structural challenge:

- **No standardized data model** for capturing language access service events, interpreter usage, complaints, and outcomes
- **No systematic compliance monitoring** — most institutions rely on manual, fragmented, retroactive reporting
- **No interoperable infrastructure** that works across healthcare, education, government, and nonprofit sectors
- **High vendor dependency** — organizations that do invest in compliance tools are locked into proprietary systems with high licensing costs

The result: compliance gaps go undetected, service failures go unaddressed, and millions of LEP individuals are denied meaningful access to public programs.

---

## The Solution

OpenLEP provides a three-component open framework:

### Component 1 — Standardized Compliance Data Schema
A structured relational database model that captures language needs, service delivery events, interpreter usage, complaints, satisfaction data, and compliance requirement mappings. Built on ISO 639-3 language codes and mapped to federal civil rights frameworks including Title VI and Executive Order 13166.

[→ View Component 1 Documentation](./component-1-data-schema/)

### Component 2 — AI-Assisted Compliance Monitoring Architecture
A cloud-based system architecture featuring AI-powered analytics, automated compliance risk scoring, service gap detection, complaint pattern analysis, and predictive compliance alerts. Includes a dashboard design mockup (built in Tableau) illustrating the intended user interface,  and an operational workflow model.

[→ View Component 2 Documentation](./component-2-ai-architecture/)

### Component 3 — Open Documentation and Implementation Framework
Governance principles, technical standards, and implementation guidance designed for adoption by public institutions without reliance on proprietary systems or high-cost vendors.

[→ View Component 3 Documentation](./component-3-implementation-framework/)

---

## Who This Is For

OpenLEP is designed for public-serving organizations with federal language access obligations:

- Federal, state, and local government agencies
- Healthcare systems and hospitals receiving federal funding
- Public school districts and educational institutions
- Courts and legal aid programs
- Public benefit programs (Medicaid, SNAP, housing assistance)
- Nonprofit organizations receiving federal grants

---

## Key Features

| Feature | Description |
|---|---|
| **Standardized Data Model** | Relational schema capturing service events, language needs, interpreter deployment, and compliance mapping |
| **Gap Analysis Engine** | Automated detection of unmet language service needs across programs and populations |
| **Compliance Risk Scoring** | AI-assisted scoring tied to federal and state legal requirements |
| **Complaint Integration** | Structured complaint tracking hardcoded into the compliance audit layer |
| **Spoken vs. Written Differentiation** | Separate tracking of oral interpretation and written translation needs |
| **Service Latency Monitoring** | Temporal tracking of interpreter deployment against legally reasonable timeframes |
| **Open Standards** | No proprietary dependencies; compatible with existing institutional systems |
| **Sector Agnostic** | Applicable across healthcare, education, government, and social services |

---

## Legal Framework

OpenLEP is designed to support compliance with:

- **Title VI of the Civil Rights Act of 1964** — prohibits discrimination based on national origin by recipients of federal funding
- **Executive Order 13166** — requires federal agencies and federally funded programs to provide meaningful access to LEP individuals
- **Section 1557 of the Affordable Care Act** — language access requirements for health programs receiving federal financial assistance
- **Every Student Succeeds Act (ESSA)** — English learner identification, service, and reporting requirements
- State-level language access mandates and federally supervised consent decrees

---

## Repository Structure

```
openlep/
├── README.md
├── LICENSE
├── component-1-data-schema/
│   ├── README.md
│   ├── schema-erd.md
│   └── data-schema-narrative.md
├── component-2-ai-architecture/
│   ├── README.md
│   ├── system-architecture.md
│   ├── dashboard-specification.md
│   └── compliance-workflow.md
└── component-3-implementation-framework/
    ├── README.md
    └── implementation-framework.md
```

---

## License

OpenLEP is released under [Creative Commons Zero (CC0 1.0)](./LICENSE) — dedicated to the public domain. No permissions are required to use, adapt, or deploy this framework. OpenLEP is intentionally designed to be freely adopted by any public institution without licensing costs or proprietary restrictions.

---

## Background

OpenLEP was independently conceived, designed, and developed by **Nisa Rumaropen**, a Data Administrator and Liaison at SIL Global with specialized expertise in multilingual data infrastructure, cloud-based analytics architecture, and enterprise reporting systems. The framework draws on five years of professional experience designing and maintaining global-scale data systems serving minority language communities across 118 countries, combined with graduate-level training in data science and artificial intelligence.

OpenLEP is not affiliated with any employer or institution. It is a self-initiated public interest project.

---

## Contact

For questions about OpenLEP, implementation support, or partnership inquiries, please open an issue in this repository.
