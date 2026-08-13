# OpenLEP Compliance Citation Mapping
### Companion document to Exhibit 18 — Language Access Compliance Data Schema (ERD)

This document populates the `compliance_requirements` and `requirement_mappings` tables from the ERD with actual legal citations, and shows exactly which schema fields satisfy which legal obligation. It is meant to be checked into the repo alongside the schema (e.g., `docs/compliance-mapping.md`) and, ideally, loaded as seed data so the mapping is queryable, not just descriptive.

---

## 1. Methodology

Each row in `compliance_requirements` corresponds to one legally binding obligation. Each row in `requirement_mappings` links that obligation to the specific schema entity/field(s) that generate the evidence needed to demonstrate compliance with it. This is the mechanism that lets OpenLEP produce "audit-ready reports" — a report is really just a query that walks `requirement_mappings` back to `compliance_requirements` and pulls the linked data.

Citations below are current as of August 2026. Federal Section 1557 regulations in particular have been subject to litigation (see §2.4), so the `active_flag` and `effective_date` fields are load-bearing — they need to reflect current enforceability, not just the date a rule was published.

---

## 2. Populated `compliance_requirements` Rows

| req_id | req_code | req_name | authority | effective_date | active_flag | description |
|---|---|---|---|---|---|---|
| 1 | TITLE-VI-2000D | Prohibition on National-Origin Discrimination | Title VI, Civil Rights Act of 1964 — 42 U.S.C. § 2000d | 1964-07-02 | true | Prohibits discrimination on the basis of race, color, or national origin by any program or activity receiving federal financial assistance. Courts and DOJ have long interpreted "national origin" discrimination to include failure to provide meaningful access for LEP individuals. |
| 2 | EO-13166 | Improving Access to Services for LEP Persons | Executive Order 13166 (Aug. 11, 2000) | 2000-08-11 | true | Directs every federal agency to develop a plan to improve access for LEP persons, and requires federal funding recipients to take reasonable steps to ensure meaningful access. |
| 3 | DOJ-LEP-GUIDANCE | DOJ Policy Guidance on Title VI and LEP | 67 Fed. Reg. 41455 (June 18, 2002) | 2002-06-18 | true | Establishes the four-factor test (number/proportion of LEP persons served, frequency of contact, nature/importance of the program, resources available) used to determine "reasonable steps." This is the primary operational standard most agencies use to size their language access obligations. |
| 4 | ACA-1557 | Nondiscrimination in Health Programs (Language Access Provisions) | Section 1557, ACA — 42 U.S.C. § 18116; 45 C.F.R. Part 92 (2024 Final Rule) | 2024-07-05 | **partial** — see note | Requires covered health entities to provide a notice of free language assistance, post it publicly, and offer qualified interpreters. Portions of the 2024 rule were vacated following *Tennessee v. Kennedy*; core language-access obligations remain enforced. `active_flag` should be a qualified/versioned value, not a simple boolean, until litigation fully resolves. |
| 5 | STATE-EXAMPLE-CA | Dymally-Alatorre Bilingual Services Act | Cal. Gov. Code § 7290 et seq. | 1973-01-01 (as amended) | true | Requires California state and local agencies serving a substantial LEP population to provide bilingual staff/materials. Included as a template state-law row — swap in the actual state(s) your pilot partners operate in. |
| 6 | STATE-EXAMPLE-IL | Language Assistance Services Act | 5 ILCS 800/1 et seq. | 2007-01-01 | true | Requires Illinois state agencies to provide language assistance for the top languages spoken by LEP populations they serve. Template row — same purpose as row 5. |

**Action item:** Rows 5–6 are illustrative templates. Before this goes into a real petition exhibit, replace/expand with the actual state(s) tied to your pilot partners — the specific statute citation matters far more than having "a state example."

---

## 3. Populated `requirement_mappings` Rows

This is the table that does the real work — it proves the schema isn't just descriptive, it's operationally tied to law.

| mapping_id | req_id (FK) | schema_entity | schema_field(s) | data_metric | reporting_frequency | mandatory_flag |
|---|---|---|---|---|---|---|
| 1 | 1 (Title VI) | `service_events` | `service_channel`, `language_service_id`, `completed_flag` | % of service events where a qualified language service was offered vs. completed | Quarterly | true |
| 2 | 1 (Title VI) | `complaints` | `complaint_type`, `status`, `resolution_date` | Count and resolution time of national-origin/language-access complaints | Quarterly | true |
| 3 | 2 (EO 13166) | `language_needs` | `preferred_language_code`, `requires_interpreter`, `reading_proficiency` | LEP population profile by language, by org | Annually | true |
| 4 | 3 (DOJ four-factor test) | `persons` + `language_needs` | `org_id`, `preferred_language_code` (aggregated) | Factor 1 & 2: proportion/frequency of LEP contact, by org and language | Annually | true |
| 5 | 3 (DOJ four-factor test) | `programs` | `program_type`, `funding_source` | Factor 3: nature/importance of the program (used to weight required resourcing) | Annually | false — narrative field, not purely derivable from data |
| 6 | 4 (ACA § 1557) | `language_service_providers` | `certification_number`, `certification_expiration` | % of interpreters/translators used who are "qualified" per the rule's definition | Quarterly | true |
| 7 | 4 (ACA § 1557) | `satisfaction_survey` | `ease_of_communication`, `interpreter_quality` | LEP patient-reported communication quality (supports "meaningful access" standard, not just notice-posting) | Quarterly | false |
| 8 | 5/6 (state acts) | `organisations` | `state_code`, `federal_funding_flag` | Applicability flag — determines which state statute row applies to which org | On record creation | true |

---

## 4. What Changes in the Schema Itself

To make `requirement_mappings` fully queryable (not just descriptive, as it is above), two refinements to the ERD:

1. **`compliance_requirements.active_flag` should not be a plain boolean.** Given the ACA § 1557 litigation status, model it as an enum (`active`, `partially_vacated`, `superseded`) with a `status_note` field and `status_effective_date`. A flat true/false will misrepresent a live legal situation — and that's exactly the kind of detail a careful reviewer would catch.
2. **`requirement_mappings` needs a `data_metric` and `is_derivable` field** (shown above) distinguishing metrics the system can compute directly from stored data versus ones requiring human/narrative input (row 5). This honesty matters — claiming full automation where a factor is actually judgment-based would overstate what the dashboard (Component 2) can do.

---

## 5. Next Step

This mapping is currently a markdown reference. To actually close the "prototype" gap:
- Convert rows 2–3 above into seed SQL/JSON inserted into the real schema tables once DDL exists.
- Write one query per mapping row that walks `requirement_mappings` → source table → produces the stated metric. That query set *is* the audit-report engine referenced in Component 2 — worth building even a minimal version of it before claiming the dashboard architecture is "prototype stage."
