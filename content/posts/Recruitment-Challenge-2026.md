---
title: 'ACM Recruitment Challenge 2026'
description: 'Incident Response Challenge: Operation QLang Postmortem'
authors: ACMPESUECC
tags: [ACM, challenge, recruitment]
date: '2026-10-02'
---

> **🚨 SYSTEM ALERT // ACTIVE FLEET OUTAGE**  
> **Challenge Portal:** [https://rec.pesuecc.acm.org/](https://rec.pesuecc.acm.org/)

---

### Incident Briefing

**Welcome, Operator.**

Our production servers took a critical hit, causing a major outage across the fleet. To make matters more chaotic, the incident corrupted parts of our primary runbook, leaving standard operational recovery instructions partially missing.

We need you to jump into the environment, inspect the telemetry, trace the timeline of events, and uncover the root cause.

You have been granted temporary root access to **`qlang`** — an interactive in-browser shell wired directly into a live snapshot of our infrastructure spanning hundreds of hosts, thousands of microservices, and over 100,000 log entries.

---

### The Mission

Trace the operational chain of events back to the failure origin and report four key artifacts:

1. **Target Incident ID**: The active SEV2 incident code (e.g., `INC-XXX`).
2. **Responsible Deployment ID**: The faulty deployment artifact that triggered the issue (e.g., `dep-XXXXX`).
3. **Configuration Digest**: The exact config digest inside that deployment artifact.
4. **On-Call Engineer**: The engineer on shift for the owning team the minute the outage began.

---

### How `qlang` Works

#### 1. Command Syntax

All commands in `qlang` follow standard Lisp-style S-expressions:

```lisp
(command [argument] [:option value] ...)
```

#### 2. Relative Timeline Reference

All timestamps (`:t`, `:opened`, `:since`, `:at`) are relative to right now ($t = 0$). Negative numbers represent minutes in the past (for example, `-45` means 45 minutes ago).

#### 3. Searchable Domains

| Domain      | Description                                         | Example Query                       |
| :---------- | :-------------------------------------------------- | :---------------------------------- |
| `hosts`     | Machine instances, CPU/memory telemetry, and health | `(hosts :status "unhealthy")`       |
| `services`  | Microservice catalog and dependency mappings        | `(services :tier "critical")`       |
| `deploys`   | Deployment rollouts, revisions, and config digests  | `(deploys :status "failed")`        |
| `logs`      | Fleet-wide stdout/stderr service log streams        | `(logs :service "auth" :since -30)` |
| `incidents` | Escalated outage tickets and timeline logs          | `(incidents :status "open")`        |
| `oncall`    | Rotation schedules, shift times, and team rosters   | `(oncall :team "infra" :at -45)`    |

#### 4. Getting Unstuck

- Hit `/` or click **Manual** in the UI to open the local man page (`docs/qlang.1`). It is missing a few corrupted blocks, but the essential syntax guide is intact.
- Run interactive help commands directly in the shell:

```lisp
(help)            ;; Displays navigation and available domains
(help "<topic>")  ;; Pulls up live syntax docs for any specific command
```

---

### Ground Rules & Submission

- **Grading**: Submissions are graded automatically on the server with instant confirmation.
- **Optional Writeup**: You may attach a short Markdown report summarizing your investigative findings and root cause hypothesis.

---

### Ready to Investigate?

Enter the terminal environment, query the cluster, and find the root cause:

👉 **[Launch Challenge Terminal: https://rec.pesuecc.acm.org/](https://rec.pesuecc.acm.org/)**
