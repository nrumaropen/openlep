# OpenLEP

## Open Language Access Compliance Infrastructure

OpenLEP is an open-source framework designed to help organizations structure, document, and evaluate language access compliance.

The project explores how language access requirements can be organized into a transparent, reusable, and measurable infrastructure that connects institutional requirements with implementation, data, and evaluation.

---

## Why OpenLEP?

Language access requirements can be difficult for organizations to manage because relevant information is often distributed across policies, procedures, service providers, departments, records, and reporting systems.

OpenLEP aims to provide a common structure for connecting these elements.

The framework is intended to help organizations:

* Identify language access requirements
* Connect requirements to organizational implementation
* Structure language access information as data
* Document evidence of implementation
* Evaluate language access practices
* Identify gaps and improvement opportunities
* Support more transparent and repeatable compliance processes

---

## Core Concept

OpenLEP is organized around four interconnected areas:

```text
Standards
    ↓
Implementation
    ↓
Data
    ↓
Evaluation
```

### 1. Standards

Identify the laws, policies, requirements, and institutional standards that establish language access responsibilities.

### 2. Implementation

Connect requirements to the people, services, processes, and resources responsible for implementation.

### 3. Data

Represent language access information in a structured and reusable format that can support analysis, reporting, and documentation.

### 4. Evaluation

Measure implementation, identify gaps, document findings, and support continuous improvement.

---

## Compliance Model

OpenLEP approaches compliance as a continuous process rather than a collection of isolated documents.

```text
Requirement
     ↓
Implementation
     ↓
Evidence
     ↓
Evaluation
     ↓
Improvement
```

This model is intended to create a clearer relationship between what an organization is required to do, how it implements those requirements, and how implementation can be evaluated.

---

## Project Architecture

The OpenLEP project is being developed as a web-based documentation and framework platform.

The current architecture includes:

```text
OpenLEP
│
├── Public Website
│   ├── Home
│   ├── About
│   ├── Documentation
│   └── Contact
│
├── Documentation
│   ├── Framework Overview
│   ├── Architecture
│   ├── Data Schema
│   └── Compliance Model
│
└── Framework Development
    ├── Standards
    ├── Implementation
    ├── Data
    └── Evaluation
```

---

## Technology

The current OpenLEP website is built with:

* React
* JavaScript
* Vite
* CSS
* Git and GitHub

The project is intentionally structured so that the framework and documentation can evolve independently from the visual presentation of the website.

---

## Project Status

OpenLEP is currently under active development.

### Phase 1 — Project Foundation

Established the initial project structure and development environment.

### Phase 2 — Public Interface

Developed the OpenLEP landing page and initial public-facing interface, including:

* Navigation
* Hero section
* Problem statement
* Architecture preview
* Documentation preview
* About section
* Contact section
* Footer
* Responsive styling

### Phase 3 — Documentation & Framework

Expanded the `/docs` section and defined the OpenLEP framework, including:

* Framework overview
* Architecture
* Data model
* Compliance model
* Implementation concepts

### Phase 4 — Data Schema & Initial Dashboard Implementation

Current phase.

* Completed the Language Access Compliance Data Schema (see `docs/compliance-mapping.md`), mapping schema fields to specific federal and state legal authorities, including Title VI of the Civil Rights Act, Executive Order 13166, DOJ LEP guidance, and Section 1557 of the Affordable Care Act.
* Implemented the first working dashboard module (`Compliance.jsx`): compliance metrics are now computed from structured sample data rather than hardcoded, using the schema defined in `src/data/complianceData.json`.
* Remaining dashboard modules (interpreter, education, hospital, DMV, and explore views) currently exist as designed interfaces and are pending the same data-computation build-out.

Planned future work includes extending computed-data support to the remaining dashboards, automated report generation, and — as a longer-term goal — AI-assisted anomaly detection for identifying emerging service gaps. These are roadmap items, not currently implemented features.

---

## Local Development

### Requirements

Make sure you have installed:

* Node.js
* npm
* Git

### Clone the repository

```bash
git clone <repository-url>
cd openlep
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will provide a local development URL, typically:

```text
http://localhost:5173
```

---

## Project Structure

```text
openlep/
│
├── docs/
│   └── compliance-mapping.md       # schema-to-law citation mapping
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Architecture.jsx
│   │   ├── Problem.jsx
│   │   └── LanguageMap.jsx
│   │
│   ├── data/
│   │   └── complianceData.json     # sample data driving Compliance.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Docs.jsx
│   │   ├── Contact.jsx
│   │   ├── Compliance.jsx          # computed from src/data
│   │   ├── Dashboard.jsx
│   │   ├── DMVDashboard.jsx
│   │   ├── EducationDashboard.jsx
│   │   ├── ExploreDashboard.jsx
│   │   ├── HospitalLanguageAccess.jsx
│   │   ├── InterpreterDashboard.jsx
│   │   ├── LanguageAccessStandards.jsx
│   │   └── DataEvaluation.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
└── README.md
```

---

## Contributing

OpenLEP is intended to be an open and collaborative project.

Contributions may include:

* Documentation improvements
* Framework development
* Data model development
* Technical implementation
* Research
* Accessibility improvements
* Testing
* User experience improvements

Before making significant changes, open an issue to discuss the proposed contribution.

---

## Guiding Principles

OpenLEP is being developed around several principles:

**Open**
The framework should be understandable and accessible to organizations, developers, researchers, and language access professionals.

**Transparent**
The relationship between requirements, implementation, evidence, and evaluation should be visible and understandable.

**Reusable**
The framework should be adaptable across different organizational contexts.

**Structured**
Language access information should be organized in ways that support consistent documentation and analysis.

**Measurable**
Implementation should be capable of being evaluated using structured information and evidence.

---

## License

Released under the MIT License. See [LICENSE](./LICENSE) for full terms.

---

## Viewing the Dashboard

To view the dashboard, go to Actions in the GitHub repository and select the latest Deploy workflow. Once the deployment completes, open the deployed dashboard from the workflow.

---
## Disclaimer

OpenLEP is a developing framework and research/technical project. It does not itself constitute legal advice or establish an organization's legal compliance.

Organizations should evaluate applicable laws, regulations, policies, and professional requirements within their own institutional and legal contexts.
