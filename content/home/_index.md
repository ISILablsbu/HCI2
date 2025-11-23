---
# Leave the homepage title empty to use the site title
title:
date: 2025-09-24
type: landing

sections:
  - block: hero
    content:
      title: |
        ISI
        Research Group
      image:
        filename: welcome.jpg
      text: |
        <br>
        
        The **LSBU ISI Research Group** has been a center of excellence for Artificial Intelligence research, teaching, and practice since its founding in 2025.
  
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
  # Contact section
  - block: features
    content:
      title: Contact Us
      text: Get in touch with our research team.
      items:
        - name: "Visit Our Lab"
          description: >
            Smith Laboratory
            Department of Computer Science
            University of Excellence
            123 Science Drive
            Excellence City, EC 12345
            United States
            
            Office Hours
            Monday – Friday: 9:00 AM – 5:00 PM
            Lab Meetings: Fridays 2:00 PM
          icon: map-marker-alt
          icon_pack: fas
          cta: "View on Map"
          cta_url: "/map/"

        - name: "Connect With Us"
          description: >
            Email: lab@example.edu
            Phone: +1 (555) 123-4567
            
            Follow us on X, LinkedIn, and GitHub for updates.
            Interested in joining our lab? We're always looking for motivated researchers.
          icon: comments
          icon_pack: fas
          cta: "View Open Positions"
          cta_url: "/join/"

    design:
      columns: "2"
---
