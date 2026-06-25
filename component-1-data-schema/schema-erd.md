# OpenLEP Language Access Compliance Data Schema (ERD)

## Entity-Relationship Overview

The OpenLEP data schema is a normalized relational database model designed to capture every dimension of language access service delivery, compliance obligation, and outcome measurement within a public institution.

The `service_events` table serves as the central relational nexus, connecting individuals, programs, language services, and compliance requirements into a unified, auditable data model.

---

## Core Tables

### `beneficiaries`
Captures the profile of each individual seeking services, including language identification.

| Field | Type | Description |
|---|---|---|
| `beneficiary_id` | UUID | Primary key |
| `preferred_language_code` | ISO 639-3 | Individual's spoken/oral language preference |
| `written_language_code` | ISO 639-3 | Individual's written language preference (may differ from spoken) |
| `lep_status` | Boolean | Whether individual qualifies as Limited English Proficient |
| `created_at` | Timestamp | Record creation date |

---

### `programs`
Tracks the public programs and services offered by the institution.

| Field | Type | Description |
|---|---|---|
| `program_id` | UUID | Primary key |
| `program_name` | VARCHAR | Name of public program or service |
| `program_type` | ENUM | Healthcare / Education / Benefits / Legal / Other |
| `funding_source` | VARCHAR | Federal, state, or local funding source |
| `title_vi_covered` | Boolean | Whether program receives federal financial assistance |

---

### `service_events`
The relational core of the schema. Captures each LEP individual's interaction with a public program.

| Field | Type | Description |
|---|---|---|
| `event_id` | UUID | Primary key |
| `beneficiary_id` | UUID | Foreign key → beneficiaries |
| `program_id` | UUID | Foreign key → programs |
| `event_date` | Date | Date of service interaction |
| `request_time` | Timestamp | Time language assistance was requested |
| `start_time` | Timestamp | Time language assistance was initiated |
| `end_time` | Timestamp | Time language assistance was completed |
| `outcome` | VARCHAR | Result of the service interaction |
| `service_denied` | Boolean | Whether service was denied or interrupted |

---

### `language_needs`
Records the specific language assistance needs identified for each service event.

| Field | Type | Description |
|---|---|---|
| `need_id` | UUID | Primary key |
| `event_id` | UUID | Foreign key → service_events |
| `language_code` | ISO 639-3 | Language required |
| `need_type` | ENUM | Oral interpretation / Written translation / Sign language / Other |
| `urgency_level` | ENUM | Routine / Urgent / Emergency |

---

### `language_services`
Records the actual language services delivered in response to identified needs.

| Field | Type | Description |
|---|---|---|
| `service_id` | UUID | Primary key |
| `event_id` | UUID | Foreign key → service_events |
| `need_id` | UUID | Foreign key → language_needs |
| `service_type` | ENUM | In-person interpreter / Phone interpreter / Video remote / Machine translation / Translated document |
| `provider_qualified` | Boolean | Whether interpreter met qualification standards |
| `service_completed` | Boolean | Whether service was successfully delivered |
| `language_code` | ISO 639-3 | Language in which service was delivered |

---

### `complaints`
Captures formal and informal complaints related to language access.

| Field | Type | Description |
|---|---|---|
| `complaint_id` | UUID | Primary key |
| `event_id` | UUID | Foreign key → service_events (optional) |
| `program_id` | UUID | Foreign key → programs |
| `complaint_date` | Date | Date complaint was filed |
| `complaint_type` | ENUM | Service denial / Inadequate interpretation / Translation error / Delay / Other |
| `resolution_status` | ENUM | Open / Under review / Resolved / Escalated |
| `resolution_date` | Date | Date complaint was resolved |

---

### `satisfaction_surveys`
Records beneficiary feedback on language access quality.

| Field | Type | Description |
|---|---|---|
| `survey_id` | UUID | Primary key |
| `event_id` | UUID | Foreign key → service_events |
| `communication_ease` | INT (1-5) | Ease of communication rating |
| `interpreter_quality` | INT (1-5) | Interpreter quality rating |
| `overall_satisfaction` | INT (1-5) | Overall service satisfaction |
| `feedback_notes` | TEXT | Open-ended qualitative feedback |

---

### `compliance_requirements`
Catalogs applicable federal and state language access legal requirements.

| Field | Type | Description |
|---|---|---|
| `requirement_id` | UUID | Primary key |
| `requirement_name` | VARCHAR | Name of legal requirement |
| `legal_source` | VARCHAR | Title VI / EO 13166 / Section 1557 / ESSA / State law |
| `jurisdiction` | VARCHAR | Federal / State / Local |
| `applicable_sectors` | VARCHAR | Healthcare / Education / Benefits / All |

---

### `requirement_mappings`
Intersection table mapping service events and programs to applicable compliance requirements.

| Field | Type | Description |
|---|---|---|
| `mapping_id` | UUID | Primary key |
| `program_id` | UUID | Foreign key → programs |
| `requirement_id` | UUID | Foreign key → compliance_requirements |
| `compliance_status` | ENUM | Compliant / At Risk / Non-Compliant / Under Review |
| `last_evaluated` | Timestamp | Date compliance was last assessed |

---

## Entity Relationships

```
beneficiaries ──< service_events >── programs
                       │
              ┌────────┼────────┐
              ↓        ↓        ↓
        language_   language_  satisfaction_
          needs      services    surveys
              │
              ↓
          complaints
              
programs ──< requirement_mappings >── compliance_requirements
```

---

## Language Code Standard

All language fields use **ISO 639-3** codes, maintained by SIL International, providing unique identifiers for more than 7,000 living and historical languages. This standard ensures:

- Precise identification of low-resource and minority languages
- Interoperability with federal language data systems
- Consistent reporting across institutions and jurisdictions

---

[← Back to Component 1](./README.md) | [← Back to OpenLEP Main Repository](../README.md)
