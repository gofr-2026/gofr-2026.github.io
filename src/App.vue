<script setup>
const base = import.meta.env.BASE_URL
const asset = (path) => `${base}assets/${path}`

const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'System', href: '#system' },
  { label: 'Run Guide', href: '#run-guide' },
  { label: 'Senior Project', href: '#senior-project' },
  { label: 'Resources', href: '#resources' },
  { label: 'Team', href: '#team' },
]

const marketStats = [
  {
    value: '$12T+',
    label: 'global grocery retail market',
    detail: 'The opportunity is massive even before adding accessibility and labor constraints.',
  },
  {
    value: '68%',
    label: 'of grocery managers report labor difficulty',
    detail: 'Shelf checks, restocking, and fulfillment remain repetitive and understaffed.',
  },
  {
    value: '1 in 4',
    label: 'U.S. adults live with a disability',
    detail: 'GOFR treats accessibility as a first-class design goal, not an afterthought.',
  },
  {
    value: '27%+',
    label: 'experience recurring shopping barriers',
    detail: 'Navigation and item retrieval support matter in real store environments.',
  },
]

const capabilityCards = [
  {
    title: 'Retail Task Orchestration',
    text: 'Customer and employee flows are coordinated through ROS 2 Behavior Trees, order intake, semantic target resolution, and blackboard-driven action sequencing.',
  },
  {
    title: 'Autonomous Navigation',
    text: 'LiDAR, odometry, IMU, Cartographer, and Nav2 allow GOFR to localize, plan, and navigate in mapped store spaces.',
  },
  {
    title: 'Vision-Guided Manipulation',
    text: 'The current validated pick path uses a ViperX arm, RealSense camera, YOLO detections, and MoveIt-based arm execution through /pick_viperx.',
  },
  {
    title: 'Safety And Edge Devices',
    text: 'STM32 firmware handles base control, while ESP32 boards support ultrasonic sensing and actuator-side experiments for safe mobile operation.',
  },
]

const stackPillars = [
  {
    title: 'App + Backend',
    bullets: [
      'Node.js + PostgreSQL order and inventory backend',
      'Vue fleet-manager dashboard',
      'Customer and employee task entry',
    ],
  },
  {
    title: 'Robot Intelligence',
    bullets: [
      'ROS 2 Humble',
      'py_trees behavior orchestration',
      'semantic map target resolution',
    ],
  },
  {
    title: 'Mobility + Manipulation',
    bullets: [
      'Cartographer + Nav2 for navigation',
      'MoveIt 2 + Interbotix ViperX arm path',
      'RealSense + YOLO perception pipeline',
    ],
  },
  {
    title: 'Embedded Layer',
    bullets: [
      'STM32 mecanum base controller',
      'ESP32 ultrasonic and actuator experiments',
      'I2C and serial device integration',
    ],
  },
]

const workflowSteps = [
  'The web app and backend create customer or employee tasks and store inventory plus semantic-map data.',
  'robot_task_manager accepts or polls those orders and builds the correct Behavior Tree flow.',
  'robot_navigation localizes the robot, plans routes, and executes mobile-base movement.',
  'robot_vision verifies the target product and publishes detections with camera-frame data.',
  'robot_manipulation transforms the target into the arm frame and executes the pick or place motion.',
  'robot_perception and embedded controllers provide hardware-level safety and low-level control.',
]

const setupSteps = [
  {
    title: '1. Flash Embedded Controllers',
    body: 'Flash the STM32 mobile-base firmware from the STM32Cube project, then flash the ESP32 boards that match your hardware configuration, including ultrasonic_I2C and any custom actuator-side prototypes.',
    code: [
      'cd ESP32/ultrasonic_I2C',
      'idf.py set-target esp32',
      'idf.py build',
      'idf.py -p /dev/ttyUSB0 flash monitor',
    ].join('\n'),
  },
  {
    title: '2. Build Robot Software',
    body: 'Build the Interbotix workspace first, then build the main ROS workspace that contains navigation, manipulation, perception, task manager, and interfaces.',
    code: [
      'cd workspace/interbotix_ws',
      'source /opt/ros/humble/setup.bash',
      'colcon build',
      '',
      'cd ../',
      'source /opt/ros/humble/setup.bash',
      'source interbotix_ws/install/setup.bash',
      'colcon build --base-paths src',
      'source install/setup.bash',
    ].join('\n'),
  },
  {
    title: '3. Start Backend + Robot Stack',
    body: 'Bring up the backend and app in separate terminals, then launch the integrated ViperX stack from robot_task_manager for the current full-system demo path.',
    code: [
      'cd order-api-postgre',
      'npm install',
      'npm run dev',
      '',
      'cd order-api-postgre/fleet-manager',
      'npm install',
      'npm run dev -- --host 0.0.0.0',
      '',
      'source /opt/ros/humble/setup.bash',
      'source workspace/interbotix_ws/install/setup.bash',
      'source workspace/install/setup.bash',
      'ros2 launch robot_task_manager viperx_nav_camera_bt.launch.py \\',
      '  motor_port:=/dev/ttyUSB1 serial_port:=/dev/ttyUSB0 include_ultrasonic:=true',
    ].join('\n'),
  },
]

const seniorProjectPanels = [
  {
    heading: 'Senior Design Context',
    text: 'GOFR is also a Boston University EC463/EC464 senior design project, so the site keeps the startup-style narrative while still exposing reports, manuals, repository structure, and system documentation.',
  },
  {
    heading: 'Current Validated Demo Path',
    text: 'The most complete integrated path today is app/backend -> robot_task_manager -> robot_navigation -> robot_vision -> ViperX manipulation.',
  },
  {
    heading: 'Hardware In Progress',
    text: 'The custom servo arm and racking system remain under active development. Related BT paths exist in software, but the final hardware integration is still in progress and unvalidated.',
  },
]

const futureItems = [
  'Custom lightweight servo arm with rack system that can handle real grocery payloads without overloading the platform',
  'Camera integration on the custom servo arm once the hardware geometry and mounting are finalized',
  'VLA and VLM-assisted arm intelligence for scene understanding and grasp selection',
  'A cloud-hosted app and in-house AI stack that no longer depends on Gemini API',
  'Multi-robot coordination under one fleet manager for larger store deployments',
]

const resources = [
  {
    category: 'Reports',
    links: [
      {
        label: 'Final Report PDF',
        href: asset('files/BU_GOFR_Grocery_Operations_Fulfillment_Robot.pdf'),
      },
      {
        label: 'Project Proposal PDF',
        href: asset('files/Proposal for EC463.pdf'),
      },
    ],
  },
  {
    category: 'Core Docs',
    links: [
      {
        label: 'Main Repository README',
        href: asset('docs/readmes/main-repo-readme.md'),
      },
      {
        label: 'ESP32 README',
        href: asset('docs/readmes/esp32-readme.md'),
      },
      {
        label: 'STM32 README',
        href: asset('docs/readmes/stm32-readme.md'),
      },
      {
        label: 'Order API README',
        href: asset('docs/readmes/order-api-readme.md'),
      },
    ],
  },
  {
    category: 'ROS 2 Packages',
    links: [
      {
        label: 'robot_task_manager',
        href: asset('docs/readmes/robot_task_manager-readme.md'),
      },
      {
        label: 'robot_manipulation',
        href: asset('docs/readmes/robot_manipulation-readme.md'),
      },
      {
        label: 'robot_navigation',
        href: asset('docs/readmes/robot_navigation-readme.md'),
      },
      {
        label: 'robot_vision',
        href: asset('docs/readmes/robot_vision-readme.md'),
      },
      {
        label: 'robot_perception',
        href: asset('docs/readmes/robot_perception-readme.md'),
      },
      {
        label: 'robot_interfaces',
        href: asset('docs/readmes/robot_interfaces-readme.md'),
      },
      {
        label: 'mvp_robot',
        href: asset('docs/readmes/mvp_robot-readme.md'),
      },
    ],
  },
]

const diagrams = [
  {
    title: 'Overall Architecture',
    image: asset('images/main_arch.png'),
    text: 'End-to-end software architecture linking app workflows, ROS coordination, perception, navigation, and arm execution.',
  },
  {
    title: 'Communication Diagram',
    image: asset('images/communication_diagram.png'),
    text: 'The project combines web, embedded, and ROS communication paths into one retail robotics platform.',
  },
  {
    title: 'Power Diagram',
    image: asset('images/power_diagram.png'),
    text: 'Distributed power architecture designed for mobile operation, safety, and subsystem isolation.',
  },
  {
    title: 'CAD Mechanical Design',
    image: asset('images/CAD_final.png'),
    text: 'Mechanical packaging for mobility, sensing, manipulation, and compute on one platform.',
  },
]

const repoLinks = [
  {
    label: 'Current Project Repository',
    href: 'https://github.com/preespp/EC463_Team_21_Grocery_Robot',
  },
  {
    label: 'Senior Project Final Report',
    href: asset('files/BU_GOFR_Grocery_Operations_Fulfillment_Robot.pdf'),
  },
  {
    label: 'Manual And Build Docs',
    href: '#resources',
  },
]

const team = [
  'Darren Figo Sajino',
  'Pree Simphliphan',
  'Bach Thien Nguyen',
  'Bernie Xu',
  'Xingjian Jiang',
  'Feng Tai',
]
</script>

<template>
  <div class="site-shell">
    <header class="topbar">
      <a class="brand" href="#top">
        <img :src="asset('images/Logo_black.png')" alt="GOFR logo" />
      </a>

      <nav class="nav">
        <a v-for="item in navItems" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">Grocery Operations &amp; Fulfillment Robot</p>
          <h1>
            A retail robotics platform built to combine
            <span>navigation, perception, manipulation, and accessibility.</span>
          </h1>
          <p class="hero-text">
            GOFR is an autonomous grocery assistant built for customer support and store
            operations. The project combines a web app, backend, ROS 2 autonomy stack,
            embedded control, and a validated ViperX manipulation path into one cohesive
            senior design system.
          </p>

          <div class="hero-actions">
            <a class="button primary" href="#run-guide">View Setup Guide</a>
            <a class="button secondary" href="#resources">Open Project Docs</a>
          </div>

          <ul class="hero-links">
            <li v-for="link in repoLinks" :key="link.label">
              <a :href="link.href" :target="link.href.startsWith('http') ? '_blank' : '_self'">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <div class="hero-visual">
          <div class="hero-card hero-card-main">
            <img :src="asset('images/GOFR.png')" alt="GOFR wordmark" />
          </div>
          <div class="hero-card hero-card-side">
            <img :src="asset('images/workflow.png')" alt="GOFR workflow" />
            <p>From order intake to in-aisle execution.</p>
          </div>
        </div>
      </section>

      <section id="overview" class="section">
        <div class="section-heading">
          <p class="eyebrow">Why GOFR</p>
          <h2>Built for the daily friction points of modern grocery operations.</h2>
        </div>

        <div class="stats-grid">
          <article v-for="stat in marketStats" :key="stat.value" class="stat-card">
            <h3>{{ stat.value }}</h3>
            <p class="stat-label">{{ stat.label }}</p>
            <p class="stat-detail">{{ stat.detail }}</p>
          </article>
        </div>

        <div class="two-column-intro">
          <div>
            <h3>Customer-facing and operations-facing</h3>
            <p>
              GOFR is designed to support both shopping assistance and store workflow
              support. That means helping customers find items and helping staff with
              repetitive fulfillment and restock tasks using one shared robotic platform.
            </p>
          </div>
          <div>
            <h3>More than a robot demo</h3>
            <p>
              The project includes the physical robot, embedded controllers, navigation
              stack, manipulation stack, camera pipeline, app backend, and a fleet-facing
              interface. This is a full systems integration project, not just a standalone
              arm or mobile base.
            </p>
          </div>
        </div>
      </section>

      <section class="section section-alt">
        <div class="section-heading">
          <p class="eyebrow">Platform</p>
          <h2>Four pillars that make the full system work.</h2>
        </div>

        <div class="capability-grid">
          <article v-for="card in capabilityCards" :key="card.title" class="capability-card">
            <h3>{{ card.title }}</h3>
            <p>{{ card.text }}</p>
          </article>
        </div>

        <div class="pillar-grid">
          <article v-for="pillar in stackPillars" :key="pillar.title" class="pillar-card">
            <h3>{{ pillar.title }}</h3>
            <ul>
              <li v-for="bullet in pillar.bullets" :key="bullet">{{ bullet }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="system" class="section">
        <div class="section-heading">
          <p class="eyebrow">System Design</p>
          <h2>Architecture, communication, and mechanical packaging in one stack.</h2>
        </div>

        <div class="diagram-grid">
          <article v-for="diagram in diagrams" :key="diagram.title" class="diagram-card">
            <img :src="diagram.image" :alt="diagram.title" />
            <div class="diagram-copy">
              <h3>{{ diagram.title }}</h3>
              <p>{{ diagram.text }}</p>
            </div>
          </article>
        </div>

        <div class="workflow-panel">
          <div class="workflow-copy">
            <p class="eyebrow">Validated software path</p>
            <h3>Current production-style demo flow</h3>
            <ol>
              <li v-for="step in workflowSteps" :key="step">{{ step }}</li>
            </ol>
          </div>
          <div class="workflow-image">
            <img :src="asset('images/main_arch.png')" alt="GOFR architecture overview" />
          </div>
        </div>
      </section>

      <section id="run-guide" class="section section-alt">
        <div class="section-heading">
          <p class="eyebrow">Run Guide</p>
          <h2>How to bring the system up after hardware assembly.</h2>
        </div>

        <div class="setup-grid">
          <article v-for="step in setupSteps" :key="step.title" class="setup-card">
            <h3>{{ step.title }}</h3>
            <p>{{ step.body }}</p>
            <pre><code>{{ step.code }}</code></pre>
          </article>
        </div>
      </section>

      <section id="senior-project" class="section">
        <div class="section-heading">
          <p class="eyebrow">Senior Project</p>
          <h2>A startup-style story backed by real engineering documentation.</h2>
        </div>

        <div class="senior-grid">
          <article v-for="panel in seniorProjectPanels" :key="panel.heading" class="senior-card">
            <h3>{{ panel.heading }}</h3>
            <p>{{ panel.text }}</p>
          </article>
        </div>

        <div class="future-panel">
          <div>
            <p class="eyebrow">Future development</p>
            <h3>Where GOFR goes next</h3>
          </div>
          <ul>
            <li v-for="item in futureItems" :key="item">{{ item }}</li>
          </ul>
        </div>
      </section>

      <section class="section section-alt media-placeholders">
        <div class="media-card">
          <p class="eyebrow">Photo Gallery</p>
          <h3>Coming soon</h3>
          <p>
            This section is intentionally left blank for future project photos, build
            shots, demo images, and polished product photography.
          </p>
        </div>
        <div class="media-card">
          <p class="eyebrow">Video</p>
          <h3>Coming soon</h3>
          <p>
            This section is intentionally left blank for future demo videos, walkthroughs,
            and investor-style product reels.
          </p>
        </div>
      </section>

      <section id="resources" class="section">
        <div class="section-heading">
          <p class="eyebrow">Resources</p>
          <h2>Manual guides, reports, package docs, and repo links.</h2>
        </div>

        <div class="resources-grid">
          <article v-for="group in resources" :key="group.category" class="resource-card">
            <h3>{{ group.category }}</h3>
            <ul>
              <li v-for="link in group.links" :key="link.label">
                <a :href="link.href" target="_blank" rel="noreferrer">{{ link.label }}</a>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section id="team" class="section section-alt">
        <div class="section-heading">
          <p class="eyebrow">Team</p>
          <h2>Built by Boston University EC463 / EC464 Team 21.</h2>
        </div>

        <div class="team-layout">
          <div class="team-photo-card">
            <img :src="asset('images/Team 21.jpg')" alt="GOFR team photo" />
          </div>
          <div class="team-copy">
            <h3>Project Team</h3>
            <ul class="team-list">
              <li v-for="person in team" :key="person">{{ person }}</li>
            </ul>
            <p><strong>Advisor:</strong> Professor Thomas Little</p>
            <p>
              GOFR was developed as a multidisciplinary senior design effort spanning
              mechanical, electrical, embedded, robotics, and web systems.
            </p>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div>
        <p class="footer-brand">GOFR</p>
        <p>Grocery Operations &amp; Fulfillment Robot</p>
      </div>
      <div class="footer-links">
        <a href="https://github.com/preespp/EC463_Team_21_Grocery_Robot" target="_blank" rel="noreferrer">
          GitHub Repository
        </a>
        <a :href="asset('files/BU_GOFR_Grocery_Operations_Fulfillment_Robot.pdf')" target="_blank" rel="noreferrer">
          Final Report
        </a>
      </div>
    </footer>
  </div>
</template>
