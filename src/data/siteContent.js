export const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Platform', href: '#platform' },
  { label: 'System', href: '#system' },
  { label: 'Specs', href: '#technical-specs' },
  { label: 'Resources', href: '#resources' },
  { label: 'Team', href: '#team' },
]

export const heroContent = {
  eyebrow: 'Grocery Operations & Fulfillment Robot',
  titlePrefix: 'A retail robotics platform built to tackle',
  titleHighlight: 'everyday challenges.',
  text: 'GOFR is an autonomous grocery assistant designed for customer support and store operations. Our product connects a web app, backend, software autonomy stack, embedded control, and a robotics manipulation into one cohesive robotics system.',
}

export const marketStats = [
  {
    value: '$11.9T+',
    label: 'global grocery retail market',
    detail: 'The opportunity is large even before adding labor shortages, store pressure, and accessibility gaps.',
    sourceLabel: 'Grand View, 2024',
    sourceHref: 'https://www.grandviewresearch.com/industry-analysis/food-grocery-retail-market',
  },
  {
    value: '68%',
    label: 'of grocery managers report labor difficulty',
    detail: 'Shelf checks, restocking, and fulfillment work remain repetitive, time-sensitive, and understaffed.',
    sourceLabel: 'SMN, 2023',
    sourceHref: 'https://www.supermarketnews.com/grocery-technology/here-s-what-the-grocery-workforce-wants',
  },
  {
    value: '1 in 4',
    label: 'U.S. adults live with a disability',
    detail: 'GOFR treats accessibility as part of the product requirement, not a secondary add-on.',
    sourceLabel: 'CDC, 2024',
    sourceHref: 'https://www.cdc.gov/media/releases/2024/s0716-adult-disability.html',
  },
  {
    value: '27%+',
    label: 'of U.S. adults report a disability',
    detail: 'Accessible navigation and item retrieval support matter in real grocery environments.',
    sourceLabel: 'CDC, 2025',
    sourceHref: 'https://www.cdc.gov/cdi/indicator-definitions/disability.html',
  },
]

export const overviewPanels = [
  {
    title: 'Customer-facing and operations-facing',
    text: 'GOFR is designed to support both shopping assistance and store workflow support. That means helping customers find items and helping staff with repetitive fulfillment and restock tasks using one shared robotic platform.',
  },
  {
    title: 'More than a robot demo',
    text: 'The project includes the physical robot, embedded controllers, navigation stack, manipulation stack, camera pipeline, app backend, and fleet-facing dashboard. This is a full systems integration, not a standalone arm or mobile base.',
  },
]

export const platformCards = [
  {
    title: 'Retail Task Orchestration',
    badge: 'Flow',
    text: 'Customer and employee requests are coordinated through ROS 2 behavior trees, semantic target resolution, and action sequencing.',
    bullets: ['Customer and staff task entry', 'Behavior-tree execution', 'Order-driven task routing'],
  },
  {
    title: 'Autonomous Navigation',
    badge: 'Nav',
    text: 'LiDAR, odometry, IMU, Cartographer, and Nav2 allow GOFR to localize, plan, and move through mapped store spaces.',
    bullets: ['Cartographer mapping', 'Nav2 planning stack', 'STM32 serial bridge'],
  },
  {
    title: 'Vision-Guided Manipulation',
    badge: 'Pick',
    text: 'The validated pick path uses a ViperX arm, RealSense camera, YOLO detections, and MoveIt-based execution.',
    bullets: ['RealSense detections', 'YOLO object pipeline', 'MoveIt action execution'],
  },
  {
    title: 'Safety And Edge Devices',
    badge: 'Safe',
    text: 'STM32 firmware handles base control while ESP32 boards support ultrasonic sensing and actuator-side experiments.',
    bullets: ['Ultrasonic alert topics', 'Low-level mobility control', 'Edge device integration'],
  },
  {
    title: 'App + Backend',
    badge: 'App',
    text: 'The web layer gives GOFR a usable store operations surface for order intake, inventory, and fleet-facing workflows.',
    bullets: ['Node.js + PostgreSQL backend', 'Vue fleet-manager dashboard', 'Inventory and order records'],
  },
  {
    title: 'Robot Intelligence',
    badge: 'AI',
    text: 'ROS 2 Humble packages connect semantics, perception, behavior orchestration, and task execution into one stack.',
    bullets: ['ROS 2 Humble', 'py_trees orchestration', 'Semantic target resolution'],
  },
]

export const workflowSteps = [
  'The app and backend create customer or employee tasks and store semantic map plus inventory data.',
  'robot_task_manager accepts the order and builds the correct behavior-tree flow.',
  'robot_navigation localizes the robot, plans routes, and executes mobile-base movement.',
  'robot_vision verifies the target product and publishes detections with camera-frame data.',
  'robot_manipulation transforms the target into the arm frame and executes the pick or place motion.',
  'robot_perception and embedded controllers add safety checks and low-level hardware control.',
]

export const technicalSpecs = [
  { title: 'Navigation Sensors', value: 'LiDAR + IMU + Odometry', detail: 'Localization and mapping stack from the current robot_navigation pipeline.', icon: '01' },
  { title: 'Manipulator', value: 'Interbotix ViperX 300S', detail: 'The current validated end-to-end pick path is built around the ViperX arm.', icon: '02' },
  { title: 'Perception Stack', value: 'RealSense + YOLO', detail: 'Camera perception verifies products and feeds target data into manipulation.', icon: '03' },
  { title: 'Mobility Base', value: 'STM32 Mecanum Drive', detail: 'Mobile control is handled by the STM32 base controller and serial bridge.', icon: '04' },
  { title: 'Autonomy Software', value: 'ROS 2 Humble + Nav2', detail: 'Behavior trees, navigation, semantic targeting, and execution live in the ROS stack.', icon: '05' },
  { title: 'Power System', value: '24V Battery Architecture', detail: 'The repo documents a 24V lead-acid battery setup with fuse and power distribution.', icon: '06' },
  { title: 'Shelf Interaction Goal', value: '1.5 m Reach Envelope', detail: 'Project targets include higher shelf interaction for grocery assist workflows.', icon: '07' },
  { title: 'Pick Payload Goal', value: '2 lb Per Picking Task', detail: 'Referenced in the project README as the target payload per pick.', icon: '08' },
  { title: 'Safety Sensing', value: 'ESP32 Ultrasonic Alerts', detail: 'Side-specific alert topics support collision-aware motion and safe experimentation.', icon: '09' },
]

export const businessModelIntro = {
  leasingTitle: 'Robot Leasing',
  leasingSubtitle: 'Monthly lease per unit',
  leasingPrice: 'Starting at $2,000 / mo',
  revenueStreams: [
    { title: 'Direct-sell', detail: '$24,000 (~40% margin)' },
    { title: 'Subscription Services (Main)', detail: 'Free 1 month trial', note: 'Detailed package tiers are shown in the table below.' },
    { title: 'Maintenance Contracts', detail: 'Free coverage over 3 years and annual checkups' },
    { title: 'Store Savings', detail: 'Labor cost reduction: 70% monthly (work double shift + cheaper than minimum wage)', note: '$93,000 per year' },
  ],
  marketPotential: [
    'Target Market Size (US Grocery): $900 Billion*',
    '66,000+ stores**',
    '5-Year Revenue Target: $110M ARR based on a 1% conversion rate within the advanced-tier package segment.',
  ],
  sources: [
    '* Market size source: IBISWorld U.S. supermarkets and grocery stores market.',
    '** Number of stores source: Statista food retail topic overview.',
  ],
}

export const businessModelRows = [
  { tier: 'Basic 1', features: '1 robot with shopping feature only', price: '$2000' },
  { tier: 'Basic 2', features: '1 robot with restock feature only', price: '$2000' },
  { tier: 'Advanced', features: '1 robot with restock and shopping features', price: '$3000', badge: '25% off' },
  { tier: 'Advanced Full Store', features: '5 robots to operate the entire stores fully autonomous', price: '$12000', badge: '20% off' },
  { tier: 'Delivery Service', features: 'This package targets the delivery platforms to access the API to place an order for our robot', price: 'Contact us for negotiation' },
]

export const seniorProjectPanels = [
  { heading: 'Senior Design Context', text: 'GOFR is a 1-year senior design project. While it is the prototype phase, this project has proven the feasibility of our approach to tackle grocery retail challenges.' },
  { heading: 'Current Validated Demo', text: 'The most complete integrated system today is app/backend to robot_task_manager to robot_navigation to robot_vision to ViperX manipulation.' },
  { heading: 'Hardware In Progress', text: 'The custom servo arm and racking system remain under development, with software side completed.' },
]

export const futureItems = [
  'Custom lightweight servo arm with rack system that can handle real grocery payloads without overloading the platform',
  'Camera integration on the custom servo arm once the hardware geometry and mounting are finalized',
  'VLA and VLM-assisted arm intelligence for scene understanding and grasp selection',
  'A cloud-hosted app and in-house AI stack that no longer depends on Gemini API',
  'Multi-robot coordination under one fleet manager for larger store deployments',
]

export const awards = [
  {
    title: 'SICK $10K Challenge 2025-26 Finalist',
    photo: 'images/SICKChallenge.png',
    detail: 'Selected as a finalist in the SICK challenge program for our retail robotics concept and system integration work.',
  },
  {
    title: 'Accepted to Capstone Design Conference 2026',
    photo: 'images/CapstoneLogo.png',
    detail: 'Capstone Design Conference 2026: June 1-3, 2026 in College Station, Texas at Texas A&M University.',
  },
]

export const resourceGroups = [
  {
    category: 'Reports',
    links: [
      { label: 'Final Report', path: 'files/BU_GOFR_Grocery_Operations_Fulfillment_Robot.pdf', description: 'Final senior project report and full project writeup.', type: 'pdf' },
      { label: 'Project Proposal', path: 'files/Proposal for EC463.pdf', description: 'Original project framing, goals, and design direction.', type: 'pdf' },
    ],
  },
  {
    category: 'Core Docs',
    links: [
      { label: 'Project Overview', description: 'Full project overview, market framing, architecture, and repository map.', type: 'text', content: ['GOFR is a grocery-assistance and store-operations robot built to combine navigation, perception, manipulation, and accessibility support in one platform.', 'The project connects a web app, backend, ROS 2 autonomy stack, embedded control, and robot hardware into one end-to-end system rather than a single isolated subsystem demo.', 'Its main value proposition is helping customers shop more independently while also helping stores with repetitive tasks like restocking, item retrieval, and order fulfillment.'] },
      { label: 'ESP32 Embedded Layer', description: 'ESP32 firmware notes and embedded setup details.', type: 'text', content: ['The ESP32 boards are used for sensor-side and actuator-side embedded experiments within the GOFR platform.', 'A primary focus is ultrasonic sensing, where ESP32-based boards send distance data that supports collision-awareness and safe navigation behavior.', 'This layer is intended to support fast hardware iteration, low-cost prototyping, and safe communication with the higher-level ROS stack.'] },
      { label: 'STM32 Base Controller', description: 'Base-control firmware notes for the mecanum platform.', type: 'text', content: ['The STM32 controller handles low-level mobile-base control for the mecanum-drive platform.', 'It is responsible for motor control, chassis motion execution, and telemetry or odometry information that feeds the navigation stack.', 'This controller acts as the hardware bridge between commanded motion from ROS and real robot movement on the store floor.'] },
      { label: 'App + Backend', description: 'Backend, database, dashboard, and local tooling notes.', type: 'text', content: ['The GOFR app and backend manage order intake, inventory information, and customer or employee workflows.', 'The stack includes a Node.js and PostgreSQL backend along with a Vue-based dashboard for fleet-facing operations.', 'This layer gives GOFR a usable retail software interface instead of relying only on terminal-based robotics control.'] },
      { label: 'Run Commands', description: 'Key commands for backend, dashboard, and the current validated robot stack.', type: 'text', content: ['Backend: cd order-api-postgre, then run npm install and npm run dev.', 'Dashboard: cd order-api-postgre/fleet-manager, then run npm install and npm run dev -- --host 0.0.0.0.', 'ROS environment: source /opt/ros/humble/setup.bash, source workspace/interbotix_ws/install/setup.bash, and source workspace/install/setup.bash.', 'Validated bring-up: ros2 launch robot_task_manager viperx_nav_camera_bt.launch.py motor_port:=/dev/ttyUSB1 serial_port:=/dev/ttyUSB0 include_ultrasonic:=true.'] },
    ],
  },
  {
    category: 'ROS 2 Packages',
    links: [
      { label: 'robot_task_manager', description: 'Behavior-tree orchestration and high-level robot workflow details.', type: 'text', content: ['robot_task_manager is the high-level orchestration layer for GOFR.', 'It accepts incoming customer or staff requests, resolves semantic targets, and runs the correct behavior-tree workflow.', 'This package coordinates the larger system by deciding when navigation, vision, and manipulation need to act.'] },
      { label: 'robot_manipulation', description: 'ViperX manipulation, MoveIt integration, and rack control notes.', type: 'text', content: ['robot_manipulation contains the current validated arm-side execution path for GOFR.', 'It uses the Interbotix ViperX arm, MoveIt integration, and supporting control logic for picking and placing items.', 'This package is the core of the robot’s item interaction capability and connects perception outputs to physical motion.'] },
      { label: 'robot_navigation', description: 'Localization, mapping, Nav2, serial bridge, and navigation helper docs.', type: 'text', content: ['robot_navigation provides mapping, localization, route planning, and motion execution for the mobile base.', 'The stack combines LiDAR, IMU, odometry, Cartographer, Nav2, and serial communication to the STM32 base controller.', 'It is responsible for moving GOFR through mapped store spaces safely and reliably.'] },
      { label: 'robot_vision', description: 'RealSense, YOLO detection, and camera data pipeline documentation.', type: 'text', content: ['robot_vision is the camera and object-detection stack for GOFR.', 'It uses Intel RealSense sensing and YOLO-based detections to recognize products and publish target information.', 'This package helps the robot verify target items before manipulation and improves confidence during task execution.'] },
      { label: 'robot_perception', description: 'Ultrasonic safety sensing and alert topic documentation.', type: 'text', content: ['robot_perception handles ultrasonic-based safety sensing for the robot.', 'It reads side-specific distance information and publishes alert topics that can be used by navigation or safety logic.', 'This package supports safer motion in crowded or changing environments.'] },
      { label: 'robot_interfaces', description: 'ROS interfaces, messages, and services used across the stack.', type: 'text', content: ['robot_interfaces defines the shared ROS messages and services used across GOFR packages.', 'It standardizes how orders, order items, service calls, and package communication are represented throughout the system.', 'This shared interface layer is important for keeping the multi-package robotics stack organized and consistent.'] },
    ],
  },
]

export const diagrams = [
  { title: 'Overall Architecture', image: 'images/main_arch.png', text: 'End-to-end software architecture linking app workflows, ROS coordination, perception, navigation, and arm execution.' },
  { title: 'Communication Diagram', image: 'images/communication_diagram.png', text: 'The project combines web, embedded, and ROS communication paths into one retail robotics platform.' },
  { title: 'Power Diagram', image: 'images/power_diagram.png', text: 'Distributed power architecture designed for mobile operation, safety, and subsystem isolation.' },
  { title: 'CAD Mechanical Design', image: 'images/CAD_final.png', text: 'Mechanical packaging for mobility, sensing, manipulation, and compute on one platform.' },
]

export const repoLinks = [
  { label: 'Project Repository', href: 'https://github.com/preespp/EC463_Team_21_Grocery_Robot' },
  { label: 'Documentation', href: '#resources' },
]

export const photoSlides = [
  { title: 'Conceptual Design', caption: 'Conceptual design direction for the robot and store workflow system.', image: 'images/ConceptualDesign.png' },
  { title: 'Prototype V0', caption: 'Early mechanical prototype stage of the GOFR platform.', image: 'images/PrototypeV0.JPG' },
  { title: 'First Camera Testing', caption: 'Initial camera and perception testing for object interaction workflows.', image: 'images/FirstCameraTesting.JPG' },
  { title: 'MoveIt Calibration', caption: 'Robotic arm calibration and manipulation bring-up with MoveIt.', image: 'images/RobtArmwithMoveitCalibration.JPG' },
  { title: 'Lab Workspace', caption: 'GOFR development workspace in Professor Little’s lab.', image: 'images/OurWorkSpaceinProfLittleLab.JPG' },
  { title: 'Retail Task Orchestration', caption: 'Workflow visualization for order intake, task logic, and execution.', image: 'images/RetailTaskOrchestration.png' },
  { title: 'SLAM Navigation', caption: 'Store-scale navigation and mapping workflow for autonomous motion.', image: 'images/SLAMNavigation.png' },
  { title: 'Vision-Guided Manipulation', caption: 'Perception and manipulation path used for product interaction.', image: 'images/VisionGuideManipulation.png' },
  { title: 'Online Order App', caption: 'Customer-facing online ordering and workflow interface.', image: 'images/OnlineOrderApp.png' },
  { title: 'Store Manager App', caption: 'Fleet and store-manager application dashboard screenshot.', image: 'images/StoreManagerApp1.png' },
  { title: 'Store Manager AI', caption: 'AI-supported dashboard concept for store operations.', image: 'images/StoreManagerAppAI.png' },
  { title: 'Semantic Map', caption: 'Semantic store map tooling for target resolution and manager workflows.', image: 'images/SemanticMapForStoreManager.png' },
]

export const teamMembers = [
  { name: 'Pree Simphliphan', role: 'Computer Engineering, Minor in Mechanical Engineering, Concentration in Robotics', contact: 'prees26@bu.edu', links: ['https://www.github.com/preespp', 'https://www.linkedin.com/in/pree-simphliphan'], photo: 'images/Pree.png' },
  { name: 'Xingjian Jiang', role: 'Computer Engineering', contact: 'starlion@bu.edu', links: ['https://github.com/StarLionJiang'], photo: 'images/Xingjiang.png' },
  { name: 'Feng Tai', role: 'Computer Engineering', contact: 'jimmytai@bu.edu', links: ['https://github.com/TBTB0725'], photo: 'images/Feng.png' },
  { name: 'Darren Figo Sajino', role: 'Mechanical Engineering', contact: 'darrens@bu.edu', links: ['https://github.com/Darr320BU', 'https://www.linkedin.com/in/darren-sajino-894335323/'], photo: 'images/Darren.png' },
  { name: 'Bach Thien Nguyen', role: 'Mechanical Engineering', contact: 'bach3012@bu.edu', links: ['https://github.com/sneaker-bot', 'https://www.linkedin.com/in/thien-bach/'], photo: 'images/Bach.png' },
  { name: 'Bernie Xu', role: 'Mechanical Engineering, Minor in Electrical Engineering', contact: 'bxu01@bu.edu', links: [], photo: 'images/Bernie.png' },
]

export const acknowledgements = [
  { title: 'Faculty Guidance', body: 'Advisor and Sponsor: Professor Thomas Little. Instructors: Professor Ryan Lagoy and Professor Osama Alshaykh. ViperX Sponsor: Professor Eshed Ohn-Bar.' },
  { title: 'Open-Source Foundations', body: 'The project builds on ROS 2, Nav2, MoveIt, Interbotix tooling, RealSense software, and the wider robotics open-source ecosystem.' },
  { title: 'Capstone Collaboration', body: 'GOFR brings together mechanical, electrical, robotics, and software engineering into one multidisciplinary system.' },
]

export const footerLinks = [
  { label: 'GitHub Repository', href: 'https://github.com/preespp/EC463_Team_21_Grocery_Robot' },
  { label: 'Final Report', href: 'files/BU_GOFR_Grocery_Operations_Fulfillment_Robot.pdf' },
  { label: 'YouTube Channel', href: 'https://www.youtube.com/@GOFR-team21' },
]
