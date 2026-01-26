---
title: "Digital Twin-Enabled Adaptive Fleet Management"

summary: >
  Developing a human-centred, resilient Digital Twin framework that enables real-time incident-aware scheduling, operator-guided decision making, and robust Autonomous Mobile Robot fleet coordination in smart manufacturing environments.

project_style: "digitaltwin"

image:
  main: "/media/projects/digital_twin.png"
  caption: "SAR Setup Overview"

highlights:
  - Vision-based assembly monitoring
  - Spatial AR projection guidance
  - Human-in-the-loop adaptation
related_publications:
  - title: "A Novel Adaptive AMR Fleet Management System Leveraging AI-enabled Digital Twin for Agile Incident Response and Improved Shop-floor Efficiency."
    authors: "Louie, Bugra, Osman M"
    url: "/publication/preprint/preprint1/"

  - title: "State of the art and future directions of digital twin-enabled smart assembly automation in discrete manufacturing industries. International Journal of Computer Integrated Manufacturing."
    authors: "Louie, Bugra, Osman M"
    url: "/publication/journal-article/journal2/"

related_authors:
  - id: Louie
  - id: Osman
  - id: Bugra
---

This project introduces a human-centred Digital Twin framework that integrates multi-fidelity models, surrogate optimisation, and high-fidelity simulation to support resilient AMR fleet management in dynamic smart factories. It detects operational disruptions such as robot failures or machine breakdowns and rapidly generates incident-aware schedules while preserving throughput and energy efficiency. A human-in-the-loop decision layer allows operators to review trade-offs, request re-simulation and apply policy-bound overrides, ensuring transparency, governance and Industry 5.0–ready coordination.

{{< expand-card title="Motivation" >}}
As AMR fleets scale in complexity, even minor disruptions can propagate into congestion, energy inefficiency, and production delays. Existing fleet managers are largely rule-based, offering limited adaptability and minimal transparency during incidents, while optimisation-driven approaches often fail to meet real-time decision constraints.
This project addresses a critical gap: how to deliver fast, adaptive scheduling decisions while keeping humans meaningfully in the loop. Rather than replacing operators, the framework augments them with prescriptive Digital Twin decision support that is policy-bound, auditable, and latency-aware, ensuring safe and accountable deployment in real manufacturing environments.
{{< /expand-card >}}
<div class="project-digitaltwin">
{{< expand-card title="System Architecture" >}}
<div class="no-quote-line">
The framework adopts a layered Digital Twin architecture spanning the physical shop floor to human-centred decision support:
<div>

### **Physical & Communication Layers**
- AMRs, machines, sensors, and enterprise systems stream real-time telemetry via OPC-UA
- Semantically tagged events enable incident detection

### **Data & Digital Shadow Layer**
- Operational data are parsed, stored, and contextualised
- Maintains a real-time representation of system state

### **Digital Layer (Multi-Fidelity DT)**
- **Low-fidelity surrogate models**
  - Seconds-level rescheduling during incidents
- **High-fidelity simulation models**
  - Capture AMR behaviour, energy use, congestion, and safety
  - Support validation and scenario analysis

### **Human–Machine Interaction Layer**
<div class="no-quote-line">
Interactive dashboards, Pareto visualisation, Gantt charts, and override controls enable operators to review, select, and validate responses with full provenance.
<div>

---

<div class="no-quote-line">
A rule-based allocator dynamically selects between surrogate optimisation, re-simulation, or manual override based on incident type, severity, and site policy.
<div>

{{< /expand-card >}}
</div>

<div class="project-digitaltwin">
{{< expand-card title="Key Components" >}}

<div class="no-quote-line">

- **Incident Response Module (IRM)**  
  Detects and classifies disruptions from OPC-UA events and triggers appropriate response modes.
  
<div>

<div class="no-quote-line">

- **Surrogate-Based Optimisation**  
  Multi-objective scheduling balances makespan and energy consumption under strict response-time constraints.

<div>

<div class="no-quote-line">

- **High-Fidelity Digital Twin**  
  Used for behavioural validation, what-if analysis, and post-incident performance assessment.

<div>

<div class="no-quote-line">

- **Operator Panel (Human-in-the-Loop)**  
  Supports trade-off exploration via Pareto fronts, schedule inspection via Gantt charts, and **audited overrides** with role-based permissions.

<div>

<div class="no-quote-line">

- **Governance & Provenance Layer**  
  All decisions, overrides, and outcomes are logged as machine-readable artefacts, enabling traceability, accountability, and cross-shift handover.

<div>

{{< /expand-card >}}
</div>


<div class="project-digitaltwin">
{{< expand-card title="Evaluation" >}}

<div class="no-quote-line">
The proposed framework is instantiated on a battery module assembly flowshop with AMR-based material handling and evaluated under representative disruption scenarios, including:
</div>
<br>
<div class="no-quote-line">

- **AMR Breakdown**  
  Evaluates system resilience to autonomous mobile robot failures and material flow interruptions.

</div>

<div class="no-quote-line">

- **Machine Breakdown**  
  Assesses adaptive rescheduling performance under unexpected workstation failures.

</div>

<div class="no-quote-line">

- **Demand Change**  
  Tests responsiveness to sudden order quantity and priority variations.

</div>

<div class="no-quote-line">
Performance is assessed using the following metrics:
</div>
<br>

<div class="no-quote-line">

- **Decision Latency (Stage-Resolved)**  
  Measures the time required to generate corrective schedules at each decision stage.

</div>

<div class="no-quote-line">

- **Makespan and Energy Deviation**  
  Quantifies efficiency and operational cost deviations relative to nominal schedules.

</div>

<div class="no-quote-line">

- **Schedule Stability and Utilisation Behaviour**  
  Evaluates robustness by analysing task reassignment frequency and resource usage patterns.

</div>

<div class="no-quote-line">

- **Surrogate–Simulation Agreement**  
  Assesses alignment between surrogate-based predictions and high-fidelity digital twin outcomes.

</div>

<div class="no-quote-line">
Results Summary:
<div>
<div class="no-quote-line">
Surrogate-based responses generate deployable schedules within 3–10 seconds, achieving orders-of-magnitude reductions in decision time compared to full high-fidelity simulation, while maintaining close behavioural alignment with the digital twin.
</div>

{{< /expand-card >}}
</div>


<div class="project-digitaltwin">
{{< expand-card title="Key Findings" >}}

<div class="no-quote-line">

- **Real-time responsiveness with human oversight**  
  Fast surrogate optimisation enables incident response within seconds while maintaining operator authority and decision accountability.

</div>

<div class="no-quote-line">

- **High agreement across fidelities**  
  Surrogate-based decisions closely align with high-fidelity Digital Twin outcomes for both makespan and energy-related performance metrics.

</div>

<div class="no-quote-line">

- **Improved resilience over dispatch rules**  
  The Digital Twin–enabled approach consistently outperforms classical dispatching rules (FCFS, SPT, LPT) in terms of throughput stability and energy control under disruption.

</div>

<div class="no-quote-line">

- **Governance-ready Digital Twin design**  
  Policy-bound operating modes, audited human overrides, and provenance-by-design mechanisms support safe, transparent, and accountable deployment in industrial settings.

</div>

{{< /expand-card >}}
</div>
