---
title: "Human-Centric Spatial Augmented Reality for Interactive (Dis)assembly Operator Assistance"

summary: >
  Developing a computer vision-enabled Spatial Augmented Reality framework
  for intelligent, privacy-preserving operator assistance in human-centric smart (dis)assembly.

authors: [Naimul, Louie, Malar, Bugra]

tags:
  - Industry 5.0
  - Operator 5.0
  - Human-in-the-Loop
  - Mixed Reality
  - Privacy-by-Design
  - Cognitive Ergonomics
  - Ergonomics

project_style: "sar"

image:
  main: "/media/projects/AR.png"
  caption: "Vision-enabled SAR setup for in-situ guidance and operator assistance."

highlights:
  - Vision-based (dis)assembly monitoring and progress verification
  - Spatial AR projection guidance with adaptive, in-situ cues
  - Gesture-controlled, touchless interaction for step control
  - Operator physical and cognitive state awareness (posture, workload) for capability augmentation
  - Privacy-preserving sensing and identity protection for deployable shop-floor assistance

related_publications:
  - title: "Spatial Augmented Reality in Manual Assembly: An Empirical Investigation of Its Effects on Assembly Performance and Cognitive Ergonomics"
    authors: "Bugra, Naimul, Louie, Malarvizhi"
    url: "/publication/preprint/preprint2/"

  - title: "Gest-SAR: A Gesture-Controlled Spatial AR System for Interactive Manual Assembly Guidance with Real-Time Operational Feedback"
    authors: "Naimul, Bugra"
    url: "/publication/journal-article/journal1/"

related_authors:
  - id: Naimul
  - id: Louie
  - id: Malar
  - id: Bugra
---

This project develops a human-centric Spatial Augmented Reality (SAR) system that projects adaptive, light-guided (dis)assembly instructions directly onto the workspace and is controlled through AI-based hand gesture recognition. The system delivers real-time guidance and error feedback without requiring handheld or wearable devices. Beyond guidance, the framework is designed as an intelligent operator assistance system that augments physical and cognitive capabilities, informing users about posture-related physical risk and cognitive state (e.g., workload) while protecting operator identity via privacy-by-design sensing and data handling. User studies show significant reductions in task time, error rates, and perceived workload compared to conventional instruction methods.

{{< expand-card title="Motivation" >}}
This project addresses limitations of conventional assembly instructions that rely
on static manuals or wearable devices. By projecting guidance directly onto the
workspace, SAR reduces cognitive load and improves task flow. The project further
targets Industry 5.0 operator assistance by extending SAR from guidance-only to
capability augmentation, combining task awareness with posture and cognitive-state
feedback under privacy-preserving constraints suitable for real shop-floor deployment.
{{< /expand-card >}}

{{< expand-card title="System Architecture" >}}
The system integrates computer vision, gesture recognition, and spatial projection
to deliver adaptive (dis)assembly instructions in real time. A closed-loop operator
assistance layer estimates task progress and deviations, then adapts projected
cues and feedback. Optional operator-state modules provide posture-aware physical
support and cognitive workload cues, enabling adaptive assistance without exposing
operator identity.
{{< /expand-card >}}

{{< expand-card title="Key Components" >}}
- Vision-based workspace perception (parts/steps/progress verification)
- Gesture-controlled SAR interface for touchless step navigation and confirmations
- Projection mapping and calibration for spatially registered overlays
- Error detection and feedback cues (missed step, wrong part/order, misalignment)
- Operator assistance modules (posture/physical risk cues, cognitive workload inference)
- Privacy-by-design pipeline (identity suppression, minimal logging, policy-based retention)
{{< /expand-card >}}

{{< expand-card title="Evaluation" >}}
User studies compared SAR guidance with conventional instructions.
Participants showed reduced completion time and fewer errors. Evaluation also
considers cognitive ergonomics and operator acceptance, and, where enabled,
assesses the feasibility of posture- and workload-aware assistance under
privacy-preserving sensing constraints.
{{< /expand-card >}}

{{< expand-card title="Key Findings" >}}

- Faster task completion
- Lower error rate
- Reduced perceived workload
- Improved interaction flow via touchless gesture control
- Practical pathway to privacy-preserving operator assistance (capability augmentation)

{{< /expand-card >}}
