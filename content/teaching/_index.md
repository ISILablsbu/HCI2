---
title: Teaching
type: landing
date: 2024-11-23

sections:
  - block: markdown
    content:
      title: ""
      text: |
        <div class="teaching-hero">
          <div class="teaching-hero-inner">
            <p class="eyebrow">Teaching</p>
            <p class="lead">
              The HCI² Lab delivers postgraduate and undergraduate teaching in artificial intelligence, data science, and industrial cyber-physical systems. Our modules combine theoretical foundations with practical, hands-on experience using modern tools and real-world industrial datasets.
            </p>
          </div>
        </div>
        <div class="course-section">
          <div class="course-section-inner">
            <h1>Our Courses</h1>
            <h3>Taught by members of the HCI² Lab at London South Bank University.</h3>
            <div class="course-grid">
              {{< course-card
                  title="Artificial Intelligence (Level 6)"
                  meta="BSc Computer Science & related programmes"
                  description="Fundamentals of AI, search and optimisation, machine learning, neural networks, and reinforcement learning with Python-based labs."
                  link="ai/"
                  linktext="More about this module →"
              >}}
              {{< course-card
                  title="Industrial Cyber Physical Systems (Level 7)"
                  meta="MSc / Postgraduate"
                  description="Industrial IoT, data pipelines, time-series analytics, deep learning and anomaly detection for smart manufacturing using real industrial datasets."
                  link="icps/"
                  linktext="More about this module →"
              >}}
            </div>
          </div>
        </div>
        
    design:
      # 2 cards per row for the teaching modules
      columns: "2"
---
