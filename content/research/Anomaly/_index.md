---
title: "Safety-Aware Anomaly Detection and RUL Analytics for Industrial Machinery"

summary: >
  Developing an auditable, safety-aware anomaly detection and Remaining Useful Life (RUL) analytics pipeline for industrial machinery, validated on our bottle inspection and sorting demonstrator, combining multi-sensor time-series learning, uncertainty-aware alarms, and human-in-the-loop verification.

project_style: "industrialai"

tags:
  - Anomaly Detection
  - Predictive Maintenance
  - RUL
  - Industrial AI
  - Auditability
  - Human-in-the-Loop

weight: 40

image:
  main: "/research/Anomaly/ned_demonstrator.jpg"
  caption: "NED demonstrator, bottle inspection and sorting system, used for anomaly detection and RUL validation."

highlights:
  - Multi-sensor anomaly detection for early fault discovery, before hard failures
  - RUL estimation with uncertainty bounds for maintenance planning
  - Human-in-the-loop validation to reduce false alarms and improve trust
  - Auditable decision artefacts, alarm rationales, and event timelines for governance
  - Demonstrator-driven evaluation with reproducible fault injection and benchmarks

related_publications:


related_authors:
  - id: Hamidu
  - id: Bugra
---

This project develops a safety-aware anomaly detection and RUL analytics pipeline for industrial machinery, grounded in demonstrator evidence rather than purely offline datasets. Using the bottle inspection and sorting system, we capture multi-sensor telemetry (signals from actuators, conveyors, inspection modules, and control logic), align it into machine-state segments, then learn normal operational signatures to detect deviation patterns early. Beyond detection, the framework estimates degradation trends and Remaining Useful Life with uncertainty bounds, enabling maintenance planning that is both operationally useful and defensible.

A core requirement is auditability, every alert is paired with traceable evidence (when the deviation started, which signals contributed, confidence/uncertainty, and operator validation outcome), enabling post hoc analysis, governance, and cross-shift handover.

{{< expand-card title="Motivation" >}}
Industrial anomaly detection is often evaluated on static datasets, but deployment fails when alarms are noisy, poorly explained, or misaligned with safety and operational decision-making. In inspection and sorting cells, late fault detection can create cascading issues, mis-sorts, quality escapes, downtime spikes, and unsafe recovery actions. This project focuses on **early and explainable detection**, **RUL-style forecasting**, and **human verification**, so the outputs are usable in real maintenance and operations workflows.
{{< /expand-card >}}

<div class="project-industrialai">
{{< expand-card title="System Architecture" >}}

### **Sensing & Control Layer**
- Demonstrator telemetry from PLC/control events plus sensor streams (time-series + event logs)
- Production context signals, e.g., mode, recipe, throughput rate, inspection outcomes

### **Data Layer**
- Synchronisation, cleaning, and machine-cycle segmentation
- Feature store for time-domain, frequency-domain, and event-derived features
- Ground-truth support via fault logs, interventions, and controlled fault injection (where feasible)

### **Learning Layer (Detection + Prognostics)**
- **Anomaly Detection**
  - Learns normal operational signatures per mode/recipe
  - Detects deviations using confidence-aware thresholds and persistence logic
- **RUL / Degradation Modelling**
  - Health indicator construction and trend modelling
  - RUL prediction with uncertainty bounds (intervals), not just point estimates

### **Human-in-the-Loop Layer**
- Alarm triage panel, operator labels, “confirmed / not an issue / needs monitoring”
- Feedback improves calibration, reduces false positives, and builds trust

### **Governance & Audit Layer**
- Alarm evidence packs, timestamps, signal attribution, and decision rationale
- Machine-readable artefacts enabling traceability and reproducibility

{{< /expand-card >}}
</div>

<div class="project-industrialai">
{{< expand-card title="Key Components" >}}

- **Cycle & State Segmenter**  
  Partitions telemetry into meaningful machine phases (conveyor motion, inspection window, sorting actuation), ensuring anomalies are contextual rather than global.

- **Mode-Aware Normality Model**  
  Separates “expected variation” (different bottle types, throughput levels, lighting changes) from true abnormality.

- **Anomaly Scoring + Alarm Logic**  
  Combines raw anomaly scores with persistence, cooldown, and confidence gates to avoid alert storms.

- **RUL / Degradation Module**  
  Builds interpretable health indicators, estimates trends, and outputs RUL with uncertainty intervals.

- **Explainability & Evidence Pack Builder**  
  Produces “what changed” summaries, signal contributions, and local time windows around onset.

- **Operator Panel + Feedback Loop**  
  Lets users validate alarms, attach notes, and trigger targeted re-analysis.

{{< /expand-card >}}
</div>

<div class="project-industrialai">
{{< expand-card title="Evaluation" >}}

The framework is evaluated on the NED bottle inspection and sorting demonstrator under controlled and naturally occurring variability.

**Disruption / anomaly classes include:**
- **Conveyor/drive anomalies**  
  Speed drift, intermittent stalls, rising vibration signatures, abnormal cycle-time variance.
- **Inspection degradation**  
  Sensor noise increase, lighting drift, mis-detection patterns, inspection latency spikes.
- **Sorting/actuation issues**  
  Delay or misfire behaviours, increasing rejection errors, timing misalignment with conveyor state.
- **Process/context shifts**  
  Recipe changes, throughput changes, environmental shifts, which must not be misclassified as faults.

**Metrics and evidence focus on:**
- Detection lead time before failure or intervention
- False alarm rate, missed detection rate, and alert stability
- RUL calibration (interval coverage, not only point error)
- Robustness across operating modes/recipes
- Operator agreement and triage effectiveness
- Audit completeness (can we reconstruct why an alert fired)

{{< /expand-card >}}
</div>

<div class="project-industrialai">
{{< expand-card title="Key Findings" >}}

- **Earlier fault visibility**  
  Mode-aware baselines reduce nuisance alarms while preserving sensitivity to true degradation.
- **Operationally usable RUL**  
  Uncertainty-bounded outputs support planning decisions rather than overconfident predictions.
- **Trust via auditability**  
  Evidence packs and operator validation pathways make alarms defensible and easier to adopt.
- **Demonstrator-first realism**  
  Demonstrator evaluation exposes deployment issues (context shifts, phase alignment, alert storms) that static datasets often hide.

{{< /expand-card >}}
</div>

