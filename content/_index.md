---
# Leave the homepage title empty to use the site title
title:
date: 2025-09-24
type: landing

sections:
  - block: hero
    content:
      title: |
        HCI² – Human-Centred Industrial Intelligence Lab, LSBU

      image:
        # filename: welcome.jpg
        filename: 
      text: |
        <br>
        Welcome to the Human-Centred Industrial Intelligence Lab (HCI²) at London South Bank University. We design and study human-centred, AI-enabled manufacturing and remanufacturing systems that bring together digital twins, collaborative robotics and data-driven decision support.
        
  - block: hero
    content:
      title: |
        Reserach Area

      # image:
      #   filename: welcome.jpg
      text: |
        <br>
        Our research focuses on multi-fidelity digital twins for factories and logistics, ergonomics-aware human–robot collaboration, augmented reality for operator support, and AI for disassembly, remanufacturing and circular production. Working at the intersection of computer science, human sciences, robotics and industrial engineering, we develop and validate methods on real industrial use-cases, from adaptive AMR fleet management to ergonomics-aware task allocation in Industry 5.0-aligned production systems.


  
  # - block: collection
  #   content:
  #     title: Latest News
  #     subtitle:
  #     text:
  #     count: 5
  #     filters:
  #       author: ''
  #       category: ''
  #       exclude_featured: false
  #       publication_type: ''
  #       tag: ''
  #     offset: 0
  #     order: desc
  #     page_type: post
  #   design:
  #     view: card
  #     columns: '1'
  
  # - block: markdown
  #   content:
  #     title:
  #     subtitle: ''
  #     text:
  #   design:
  #     columns: '1'
  #     background:
  #       image: 
  #         filename: coders.jpg
  #         filters:
  #           brightness: 1
  #         parallax: false
  #         position: center
  #         size: cover
  #         text_color_light: true
  #     spacing:
  #       padding: ['20px', '0', '20px', '0']
  #     css_class: fullscreen

  - block: collection
    content:
      title: Latest Preprints
      text: ""
      count: 5
      filters:
        folders:
          - publication
        publication_type: 'article'
    design:
      view: citation
      columns: '1'

  - block: markdown
    content:
      title:
      subtitle:
      text: |
        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
    design:
      columns: '1'

  # 2) Contact section —
  - block: features
    content:
      title: Contact Us
      text: Get in touch with our research team.
      items:
        - name: "Visit Our Lab"
          description: >
            Human-Centred Industrial Intelligence | Room: FW104
            
            School of Computer Science & Digital Technology |
            London South Bank University |
            Faraday Wing,
            103 Borough Rd, London, SE10AA,
            United Kingdom
            <hr class="feature-divider" />
            Office Hours
            Monday – Friday: 9:00 AM – 5:00 PM |
            Lab Meetings: Wednesday 11:00 AM
            <p><a class="btn btn-primary" href="https://www.google.com/maps/place/Chemical+and+Energy+Engineering/@51.4973128,-0.1009395,19.71z/data=!4m7!3m6!1s0x487604a3bc2ea87d:0xd0701caad9538f67!4b1!8m2!3d51.4971773!4d-0.1006029!16s%2Fg%2F11c555ljnk?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"><i class="fas fa-map-marked-alt"></i> View on Map</a></p>
          icon: map-marker-alt
          icon_pack: fas
          cta: "View on Map"
          cta_url: ""

        - name: "Connect With Us"
          description: >
            Email: lab@example.edu
            Phone: +44 (0) 123-4567

            <hr class="feature-divider" />
            
            <p class="social-links">Follow us:&nbsp;
              <a href="#" class="social-icon" aria-label="X"><i class="fab fa-x"></i></a>
              <a href="#" class="social-icon" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
              <a href="#" class="social-icon" aria-label="GitHub"><i class="fab fa-github"></i></a>
            </p>
            <hr class="feature-divider" />

            Interested in joining our lab? We're always looking for motivated researchers.

            <p><a class="btn btn-primary" href="./opportunities/"><i class="fas fa-user-plus"></i> View Open Positions</a></p>
          icon: comments
          icon_pack: fas
          cta: "View Open Positions"
          cta_url: "./opportunities/"

    design:
      columns: "2"
---
