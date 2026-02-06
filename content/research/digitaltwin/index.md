---
title: "Human-in-the-Loop Digital Twin for Resilient AMR Fleet Management"

summary: >
  Building a policy-oriented, human-in-the-loop Digital Twin for incident-aware AMR fleet management, combining OPC-UA event monitoring, time-bounded surrogate optimisation, and high-fidelity simulation for governed, resilient intralogistics.

project_style: "digitaltwin"

weight: 10

image:
  main: "/media/projects/digital_twin.png"
  caption: "Multi-fidelity Digital Twin for incident-aware AMR fleet management (surrogate response + simulation audit)."

highlights:
  - OPC-UA monitoring, incident triggers, and digital shadow state capture
  - Time-bounded surrogate rescheduling (seconds-level response)
  - High-fidelity simulation for audit, assurance, and what-if validation
  - Operator-in-the-loop panel, Pareto trade-offs, Gantt previews, policy-bound overrides
  - Provenance-by-design, decision artefacts, and incident logs for governance and handover

related_publications:
  - title: "A Novel Adaptive AMR Fleet Management System Leveraging AI-enabled Digital Twin for Agile Incident Response and Improved Shop-floor Efficiency."
    authors: "Louie, Bugra, Osman M"
    url: "/publication/preprint/preprint2/"

  - title: "State of the art and future directions of digital twin-enabled smart assembly automation in discrete manufacturing industries. International Journal of Computer Integrated Manufacturing."
    authors: "Louie, Bugra, Osman M"
    url: "/publication/journal-article/journal2/"

related_authors:
  - id: Louie
  - id: Osman
  - id: Bugra
---

This project develops a multi-fidelity, policy-oriented Digital Twin (DT) for resilient Autonomous Mobile Robot (AMR) fleet management under disruption. The system monitors shop-floor telemetry via OPC-UA, classifies incidents (e.g., AMR breakdown, machine unavailability, demand shock), snapshots decision-relevant state, then generates incident-aware recovery schedules under a strict decision-time cap. A surrogate (low-fidelity) optimisation layer produces deployable responses within seconds, while a high-fidelity DT simulation layer provides audit, assurance, and post-decision validation. An operator-in-the-loop panel exposes Pareto trade-offs and schedule previews, enabling transparent selection, re-simulation on demand, and policy-bound overrides, with provenance captured as machine-readable decision artefacts.

{{< expand-card title="Motivation" >}}
As AMR fleets scale, small disruptions propagate into congestion, energy waste, and missed throughput targets. Rule-based fleet managers are fast but brittle and opaque during incidents, while high-fidelity simulation is informative but too slow for time-critical response. This project addresses the gap with a governed multi-fidelity DT, fast enough for real-time recovery, and structured enough for auditability, human oversight, and Industry 5.0–ready deployment.
{{< /expand-card >}}

<div class="project-digitaltwin">
{{< expand-card title="System Architecture" >}}

### **Physical & Communication Layer**
- AMRs, stations, sensors, and execution systems stream telemetry and events via **OPC-UA**
- Event-driven incident triggers (e.g., fault flags, demand-change flags) initiate response

### **Data & Digital Shadow Layer**
- Telemetry is contextualised and stored (time-series + event envelopes)
- On incident, the system snapshots decision-relevant state, remaining jobs, resource availability, and constraints

### **Digital Layer, Multi-Fidelity Decision Support**
- **Surrogate optimisation (low-fidelity)**
  - Generates recovery schedules under a strict decision-time budget
  - Targets throughput (makespan) and energy-related objectives
- **High-fidelity DT simulation**
  - Executes candidate schedules to validate behavioural realism (e.g., interactions, congestion effects)
  - Used for audit, assurance, and scenario analysis

### **Human–Machine Interaction Layer (Operator Panel)**
- Live incident status and fleet state
- Pareto front exploration (trade-off selection)
- Gantt schedule previews and validation
- Re-simulation requests and policy-bound overrides with rationale

### **Governance & Provenance Layer**
- Every incident and decision step is logged with timestamps, reason codes, response type, and operator actions
- Artefacts support traceability, cross-shift handover, and post hoc analysis

{{< /expand-card >}}
</div>

<div class="project-digitaltwin">
{{< expand-card title="Key Components" >}}

- **Incident Response Module (IRM)**  
  Detects incidents from OPC-UA alerts, classifies event type, snapshots state, and triggers recovery.

- **Response Selector & Model Allocation**  
  Chooses surrogate-only response vs surrogate + audit vs high-fidelity escalation depending on incident severity, policy, and confidence.

- **Surrogate-Based Optimisation**  
  Multi-objective rescheduling under time constraints, balancing throughput and energy-related KPIs while enforcing feasibility and safety constraints.

- **High-Fidelity DT Audit**  
  Validates surrogate decisions, quantifies surrogate–simulation agreement, and provides assurance evidence under disruption.

- **Operator Panel (Human-in-the-Loop)**  
  Supports trade-off selection (Pareto), schedule inspection (Gantt), re-simulation, and controlled overrides.

- **Decision Artefacts & Incident Log**  
  Structured outputs (status JSON, Pareto results, schedule images, metrics, incident log) enabling governance and reproducibility.

{{< /expand-card >}}
</div>

<div class="project-digitaltwin">
{{< expand-card title="Evaluation" >}}

The framework is instantiated in an intralogistics use case representing a **battery module assembly flowshop**, where AMRs transport materials between stations. Evaluation introduces controlled disruption classes to stress-test response performance:

- **AMR Breakdown (AMRBD)**  
  Transport capacity loss, task reassignment, utilisation shift.

- **Machine Breakdown (MBD)**  
  Reduced station availability, increased queueing pressure, precedence constraints.

- **Demand Change (DC)**  
  High-priority job injection, schedule reordering, system-wide stress.

**Metrics and evidence** focus on:
- Decision latency (stage-resolved, including detection, optimisation, audit/re-simulation, dispatch)
- Makespan and energy deviation relative to nominal and baseline dispatch rules
- Schedule stability (reassignments and disturbance propagation)
- Surrogate–simulation agreement (validity under high-fidelity execution)
- Governance behaviour (policy modes, fidelity escalation, operator intervention pathways)

{{< /expand-card >}}
</div>

<div class="project-digitaltwin">
{{< expand-card title="Key Findings" >}}

- **Seconds-level incident recovery**  
  Surrogate optimisation delivers time-bounded rescheduling appropriate for operational incident response.

- **Multi-fidelity assurance**  
  High-fidelity DT execution provides an auditable validation layer, enabling confidence-aware escalation rather than blanket simulation.

- **Human-in-the-loop governance**  
  Operator panel interactions (trade-off selection, validation requests, overrides) support accountable decision-making without sacrificing responsiveness.

- **Transferable blueprint**  
  A policy-oriented architecture for AMR fleet management that generalises to other disruption-prone discrete manufacturing intralogistics settings.

{{< /expand-card >}}
</div>
