---
description: Task Tracking & Reporting
---

# Workflow: Task Tracking & Reporting

## 1. Task Picking
Before starting any work, the agent must:
1. Read `docs/backlog.md`.
2. Announce which task is being started: "Starting task [ID] - [Title]".
3. Update the status in `docs/backlog.md` to `In Progress`.

## 2. Task Completion (Reporting)
After finishing a task, the agent MUST generate a report in `docs/reports/task_[ID].md`.
The report must follow this template:

### Task [ID] Report: [Title]
- **Status**: Completed
- **Date**: [Current Date]
- **Changes Made**:
    - [File A]: Description of changes
    - [File B]: New component created
- **Technical Decisions**: Briefly explain why a specific approach was taken.
- **Verification**: List of manual or automated tests performed.
- **Next Task**: Suggest the next task from the backlog.

## 3. Backlog Update
Once the report is created, the agent must update `docs/backlog.md`:
- Change status to `Done`.
- Add a link to the generated report.