---
title: "Human-State Aware Human-Robot Collaborative Disassembly via Adaptive Agent Models, Negotiation, and Predictive Digital Twins"

summary: >
  Developing a human-centric HRC framework for high-value end-of-life (EoL) disassembly that adapts task allocation and robot behaviour to real-time operator state, combining cognitive and physiological modelling, negotiation-based collaboration, and a predictive digital twin to improve safety, ergonomics, and execution reliability.

project_style: "Funded"

tags:
  - Human-Robot Collaboration
  - Human-State Monitoring
  - Disassembly
  - Digital Twin
  - Task Allocation
  - Negotiation
  - Ergonomics
  - Industry 5.0
  - Society 5.0

weight: 10

image:
  main: "/media/projects/hrc_disassembly_human_state.jpg"
  caption: "Human-state aware HRC for EoL disassembly, integrating operator state estimation, negotiated task allocation, and predictive digital twin validation."

highlights:
  - Human and robot agent models enriched with real-time fatigue, stress, and workload descriptors
  - Negotiation-based task allocation enabling runtime preference updates and ergonomic constraints
  - Predictive digital twin forecasting task durations, workload accumulation, and KPI impacts before execution
  - Disassembly-specific task decomposition into precedence-constrained task graphs informed by product structure
  - Demonstrator/testbed validation focusing on safety, usability, and sustainable manufacturing outcomes

related_publications: []

related_authors:
  - id: Bugra
---

This project develops a **human-state aware Human-Robot Collaboration (HRC) framework** tailored for **end-of-life (EoL) disassembly** of high-value products, where uncertainty, variability, and safety constraints make static task allocation brittle. The central contribution is an integrated architecture in which **human and robot agent models** are continuously updated from operational data, including **operator physiological and cognitive state proxies** (for example fatigue, stress, workload), enabling collaboration policies that respond to human condition and task context rather than assuming a fixed-capacity operator.

A key design choice is **negotiated, runtime task allocation**, not purely centralised optimisation. The human agent can express preferences and constraints in-the-loop, and the system converges to an executable plan through negotiation and conflict resolution. A **predictive digital twin** provides a validation layer, simulating task-level and agent-level dynamics to anticipate KPI impacts, task duration drift, and fatigue accumulation before committing to allocations.

{{< expand-card title="Motivation" >}}
Disassembly remains labour-intensive because it is nonlinear, context-dependent, and highly variable. Robots can deliver precision and repeatability, but effective collaboration fails when assistance is insensitive to operator condition and rapidly changing shop-floor realities. Conventional HRC approaches in disassembly often rely on static allocations and do not integrate real-time ergonomics, workload, and trust calibration into the collaboration loop. This project targets adaptive and human-centric HRC where allocation and assistance policies react to operator state to reduce risk, prevent overload, and improve long-term wellbeing while maintaining throughput.
{{< /expand-card >}}

<div class="project-industrialai">
{{< expand-card title="System Architecture" >}}

### **Adaptive Agent Modelling (Human and Robot)**
- Capability profiles, tool availability, and skill descriptors
- Behavioural descriptors, e.g., preferences, workload thresholds, collaboration acceptance
- Real-time human-state proxies, e.g., fatigue trends, stress indicators, workload and engagement cues

### **Task Decomposition Engine (Disassembly-Aware)**
- Converts disassembly objectives into executable task graphs
- Encodes precedence and dependency logic essential for safe sequencing
- Supports product structure signals (BoM/CAD where available) plus contextual constraints

### **Negotiation-Based Collaboration and Allocation**
- Multi-objective allocation across efficiency, feasibility, and ergonomics
- Negotiation layer enabling runtime preference updates and constraints
- Conflict resolution to ensure convergence to an agreed, executable plan

### **Predictive Digital Twin Validation Layer**
- Simulates system-level and agent-level state evolution over candidate plans
- Forecasts KPIs, e.g., cycle time, workload accumulation, recovery likelihood, stability under uncertainty
- Feeds predictions back into allocation and negotiation to improve robustness

### **Interface and Human-in-the-Loop Control**
- Visualises operator load, task status, and key safety indicators
- Supports escalation and override pathways for practical deployment

{{< /expand-card >}}
</div>

<div class="project-industrialai">
{{< expand-card title="Key Components" >}}

- **Human State Model**  
  A digital representation of operator condition that updates continuously and is used to prevent unsafe allocations and reduce ergonomic strain.

- **Disassembly Task Graph Builder**  
  Generates precedence-constrained task graphs so allocation decisions are executable, context-correct, and aligned with disassembly constraints.

- **Negotiation-Enhanced Task Allocation**  
  Allows the human agent to accept, reject, or modify allocations based on fairness, effort, ergonomics, and situational feasibility, improving autonomy and collaboration quality.

- **Predictive Digital Twin Forecaster**  
  Anticipates timing drift and workload accumulation, enabling proactive planning rather than reactive recovery.

- **Risk-Aware Execution Hooks**  
  Safety-aware triggers for slow-down, pause, re-plan, or request confirmation when uncertainty or risk increases.

{{< /expand-card >}}
</div>

<div class="project-industrialai">
{{< expand-card title="Evaluation" >}}

The framework is designed for validation in an HRC testbed with repeatable EoL disassembly scenarios and controlled variability.

**Evaluation focus includes:**
- Robustness of allocation under changing human state and contextual shifts
- Ergonomic outcomes (proxy measures) and reduced overload or fatigue accumulation
- Task performance KPIs (cycle time, recovery frequency, stability under uncertainty)
- Collaboration quality, including allocation acceptance and perceived usability
- Traceability of decisions, e.g., why an allocation changed and what state signals triggered it

{{< /expand-card >}}
</div>

<div class="project-industrialai">
{{< expand-card title="Expected Outcomes" >}}

- **Safer collaboration under variability**  
  Adaptive policies reduce risk when operator condition deteriorates or the context becomes uncertain.

- **Better workload balancing**  
  Allocation decisions explicitly consider operator state, not just nominal task times or static capability assumptions.

- **Disassembly-ready HRC planning**  
  Task graphs and constraints reflect real disassembly dependencies, enabling executable and safer collaboration plans.

- **Deployable governance posture**  
  Negotiation traces and digital twin forecasts support post hoc analysis, justification, and continuous improvement.

{{< /expand-card >}}
</div>

