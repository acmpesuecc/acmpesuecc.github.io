---
title: 'ACM Recruitment Challenge 2026'
description: 'Incident Response Challenge: Operation QLang Postmortem'
authors: ACMPESUECC
tags: [ACM, challenge, recruitment]
date: '2026-10-02'
---

### Incident Response Challenge: Operation QLang Postmortem

**Welcome, Operator**

Our production servers took a hit, causing a major outage across the fleet. To make things a little more chaotic, the incident corrupted parts of our primary runbook, so standard instructions are partially missing. We need you to jump into the system, dig through the logs, and figure out what actually happened.

You have been given temporary root access to **`qlang`**, a browser based shell wired directly into a live snapshot of our environment spanning hundreds of hosts, thousands of microservices, and over 100,000 log entries. Do not worry if the setup looks new, it is built for tinkering and live experimentation.

---

### The Mission

Trace the operational chain of events back to the root cause and uncover four specific facts:

1. **Target Incident ID**: The active SEV2 incident code (for example, `INC-XXX`).
2. **Responsible Deployment ID**: The bad deployment that triggered the issue (for example, `dep-XXXXX`).
3. **Configuration Digest**: The exact config digest inside that deployment artifact.
4. **On-Call Engineer**: The engineer on shift for the owning team the minute the outage started.

---

### How `qlang` Works

- **Command Syntax**: All commands use standard Lisp style S expressions:
  `(command [argument] [:option value] ...)`

- **Timeline Reference**: All timestamps (`:t`, `:opened`, `:since`, `:at`) are relative to right now ($t = 0$). Negative numbers mean minutes in the past (for example, `-45` means 45 minutes ago).

- **Getting Unstuck**:

  - Click **Manual** or hit `/` to open the local man page (`docs/qlang.1`). It is missing a few blocks, but the essential syntax is still there.
  - Run interactive help commands inside the shell:
    - `(help)` : Shows basic navigation and available data categories.
    - `(help "<topic>")` : Pulls up live syntax docs for any specific command.

- **Searchable Domains**: Query across `hosts`, `services`, `deploys`, `logs`, `incidents`, and `oncall` schedules.

---

### Ground Rules

- **Grading**: Submissions are graded automatically on the server with a quick pass/fail confirmation.
- **Optional Writeup**: If you want, you can attach a short Markdown report summarizing your investigation and root cause hypothesis.

The environment is up and running. Jump into the terminal, run a few queries, and see what you can find!
