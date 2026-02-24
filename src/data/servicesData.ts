export interface ServiceItem {
  title: string;
  points: string[];
}

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
  image: string;
}

export interface ServiceSection {
  id: string;
  title: string;
  subtitle?: string;
  categories: ServiceCategory[];
}

export const serviceSections: ServiceSection[] = [
  {
    id: "physical-security",
    title: "Physical Security",
    categories: [
      {
        title: "Surveillance & Monitoring",
        image: "/images/pdf-img-2.jpg",
        items: [
          {
            title: "CCTV & Video Surveillance Systems",
            points: [
              "High-resolution IP cameras (fixed, PTZ, thermal, low-light)",
              "Indoor and outdoor surveillance solutions",
              "Video Management Systems (VMS) with scalable storage",
              "Redundant recording and failover architecture",
              "Compliance with regulatory and data-handling requirements",
            ],
          },
          {
            title: "Intrusion Detection Systems",
            points: [
              "Motion sensors and detectors",
              "Door and window contact sensors",
              "Perimeter and fence-mounted detection systems",
              "Alarm management and alert mechanisms",
              "Integration with CCTV and access control systems",
            ],
          },
          {
            title: "AI-Powered Video Analytics",
            points: [
              "Anomaly and behavior detection",
              "Intrusion and loitering detection",
              "Object classification and tracking",
              "Automated alerts and event prioritization",
              "Integration with security dashboards and PSIM platforms",
            ],
          },
          {
            title: "Central & Remote Monitoring Solutions",
            points: [
              "Security Operations Centers (SOC)",
              "Video walls and operator workstations",
              "Remote monitoring platforms",
              "Secure network connectivity and redundancy",
              "Real-time alerting and escalation workflows",
            ],
          },
          {
            title: "Integration with Command & Control Centers",
            points: [
              "PSIM platforms",
              "Incident management systems",
              "Multi-system data visualization",
              "Inter-system automation and response workflows",
            ],
          },
        ],
      },
      {
        title: "Access Control System",
        image: "/images/pdf-img-4.jpg",
        items: [
          {
            title: "Electronic Access Control Systems",
            points: [
              "Key card-based access systems",
              "Biometric authentication (fingerprint, facial recognition, iris)",
              "Proximity, smart card, and multi-factor readers",
              "Door controllers, relays, and monitoring devices",
              "Zoning, time-based access rules, and role-based permissions",
            ],
          },
          {
            title: "Visitor Management Systems (VMS)",
            points: [
              "Visitor pre-registration and approval workflows",
              "ID verification and badge issuance",
              "Temporary access rights and expiry controls",
              "Visitor logs, reports, and compliance records",
              "Integration with access control and security systems",
            ],
          },
          {
            title: "Mechanical Locks & Key Management",
            points: [
              "High-security mechanical locks",
              "Master key systems",
              "Electronic key cabinets and tracking systems",
              "Key issuance, return, and audit logs",
              "Integration with electronic access control policies",
            ],
          },
          {
            title: "Integration with Enterprise & Security Platforms",
            points: [
              "Human Resources systems for automated access provisioning",
              "CCTV systems for video-based event verification",
              "Intrusion detection and alarm systems",
              "Central security management platforms",
            ],
          },
          {
            title: "Card-Based & Mobile Credential Systems",
            points: [
              "Smart cards and proximity credentials",
              "Mobile credentials using secure smartphone applications",
              "Encrypted authentication protocols",
              "Credential lifecycle management (issuance, revocation, renewal)",
            ],
          },
        ],
      },
      {
        title: "Perimeter & Facility Protection",
        image: "/images/pdf-img-6.jpg",
        items: [
          {
            title: "Fencing, Barriers & Bollards",
            points: [
              "High-security perimeter fencing (anti-climb, welded mesh, palisade)",
              "Crash-rated vehicle barriers and road blockers",
              "Fixed, retractable, and removable bollards",
              "Controlled entry points for vehicles and pedestrians",
              "Structural integration with site layouts and access routes",
            ],
          },
          {
            title: "Fence-Mounted Intrusion Detection Systems",
            points: [
              "Fiber-optic and vibration-based fence sensors",
              "Microphonic and accelerometer-based detection technologies",
              "Precise zone identification and alarm localization",
              "Integration with CCTV for visual verification",
              "Reduced false alarms through intelligent signal processing",
            ],
          },
          {
            title: "Radar, Infrared & Motion Sensors",
            points: [
              "Ground and perimeter radar systems for wide-area detection",
              "Infrared (IR) and thermal sensors for low-visibility conditions",
              "Motion sensors for open and restricted areas",
              "Detection coverage for complex terrains and large perimeters",
              "Integration with video analytics and alarm platforms",
            ],
          },
          {
            title: "Gate Automation & Access Systems",
            points: [
              "Automated sliding, swing, and cantilever gates",
              "Vehicle access control systems (RFID, ANPR/LPR)",
              "Safety devices and emergency override mechanisms",
              "Integration with access control and security platforms",
              "Centralized monitoring and control",
            ],
          },
          {
            title: "Integrated Alarms & Alert Mechanisms",
            points: [
              "Real-time alarm generation and escalation",
              "Integration with CCTV, access control, and PSIM platforms",
              "Audio and visual alerts",
              "Incident logging and reporting",
              "Automated response workflows",
            ],
          },
        ],
      },
      {
        title: "Installation & Integration Services",
        image: "/images/pdf-img-8.jpg",
        items: [
          {
            title: "ELV & Low Current Systems Installation",
            points: [
              "Installation of CCTV, access control, intrusion detection, intercom & public address systems",
              "Deployment of field devices, control panels, and termination points",
              "Equipment mounting, alignment, and labeling",
              "Compliance with OEM installation manuals and standards",
              "Site coordination with civil, MEP, and IT teams",
            ],
          },
          {
            title: "Network & Structured Cabling",
            points: [
              "Copper and fiber optic cabling (backbone and horizontal)",
              "Rack installation, patch panels, and cable management",
              "Labeling, testing, and certification",
              "Network segregation for security systems",
              "Compliance with international cabling standards and OEM requirements",
            ],
          },
          {
            title: "System Integration & Automation",
            points: [
              "Integration of CCTV, access control, intrusion, and perimeter systems",
              "Configuration of system workflows and automated responses",
              "Integration with command & control centers and PSIM platforms",
              "Alarm correlation and event-driven automation",
              "User interface configuration and system dashboards",
            ],
          },
          {
            title: "Testing, Commissioning & Handover",
            points: [
              "Functional and performance testing",
              "Integration testing across platforms",
              "Compliance verification against specifications",
              "As-built documentation and manuals",
              "Operator training and handover support",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "data-center",
    title: "Data Center Solutions",
    categories: [
      {
        title: "Power, Cooling & Fire Systems",
        image: "/images/pdf-img-9.jpg",
        items: [
          {
            title: "UPS & Power Distribution",
            points: [
              "Uninterruptible Power Supply (UPS) systems with N+1 / 2N redundancy",
              "Battery banks and energy storage systems",
              "Power Distribution Units (PDUs) and Remote Power Panels (RPPs)",
              "Busbar trunking systems for scalable power delivery",
              "Electrical panels, switchgear, and protection devices",
              "Earthing and grounding systems",
            ],
          },
          {
            title: "Precision Cooling Systems",
            points: [
              "CRAC and CRAH units",
              "In-row and overhead cooling systems",
              "Hot aisle / cold aisle containment solutions",
              "Variable speed fans and intelligent cooling controls",
              "Redundancy and failover configurations",
            ],
          },
          {
            title: "Environmental Monitoring",
            points: [
              "Temperature and humidity sensors",
              "Differential pressure monitoring",
              "Power and energy consumption monitoring",
              "Leak detection systems",
              "Centralized monitoring dashboards and alerts",
            ],
          },
          {
            title: "Early Smoke Detection Systems",
            points: [
              "Very Early Smoke Detection Apparatus (VESDA)",
              "Air sampling and aspirating smoke detection",
              "Integration with fire alarm and suppression systems",
              "Compliance with Saudi Civil Defense requirements",
            ],
          },
          {
            title: "Gas-Based Fire Suppression Systems",
            points: [
              "FM-200, NOVEC 1230, or equivalent gas-based systems",
              "Zoned suppression for data halls and technical rooms",
              "Integration with detection and alarm systems",
              "Safety interlocks and emergency shutdown mechanisms",
            ],
          },
          {
            title: "Chilled Water & Air Distribution Systems",
            points: [
              "Chilled water piping and insulation",
              "Pumps, valves, and control systems",
              "Air distribution ductwork and airflow management",
              "Redundant distribution paths",
              "Integration with building management systems (BMS)",
            ],
          },
        ],
      },
      {
        title: "ELV & Network Solutions",
        image: "/images/pdf-img-11.jpg",
        items: [
          {
            title: "Structured Cabling (Copper & Fiber)",
            points: [
              "Copper cabling systems (Cat 6, Cat 6A, and higher)",
              "Fiber optic cabling (single-mode and multi-mode)",
              "Backbone and horizontal cabling infrastructure",
              "Rack, cabinet, and patch panel installation",
              "Cable labeling, testing, and certification",
              "Compliance with international cabling standards",
            ],
          },
          {
            title: "Trunking & Power Cabling",
            points: [
              "Cable trays, conduits, and containment systems",
              "Power cabling for ELV equipment and network devices",
              "Separation of power and data cables to avoid interference",
              "Fire-rated and compliant cabling solutions",
              "Coordination with MEP and civil works",
            ],
          },
          {
            title: "IP Networks & Switching",
            points: [
              "Network switches and routers",
              "VLAN and network segmentation for security systems",
              "Redundant network paths and failover configurations",
              "Network performance monitoring",
              "Secure network architecture design",
            ],
          },
          {
            title: "Audio-Visual Systems",
            points: [
              "Video walls and display systems",
              "Control room AV solutions",
              "Conferencing and presentation systems",
              "AV control and automation",
              "Integration with command and control centers",
            ],
          },
          {
            title: "Public Address & Voice Alarm Systems",
            points: [
              "PA/VA system design and speaker layout",
              "Emergency voice evacuation systems",
              "Integration with fire alarm and security systems",
              "Zoning, paging, and announcement controls",
              "Compliance with life safety regulations",
            ],
          },
          {
            title: "Building Management System (BMS) Integration",
            points: [
              "Integration of HVAC, power, and environmental systems",
              "Centralized monitoring and control dashboards",
              "Alarm and event integration",
              "Data exchange and system interoperability",
            ],
          },
          {
            title: "Redundant Power Architectures",
            points: [
              "Dual power feeds",
              "Redundant power supplies",
              "Automatic failover mechanisms",
              "Integration with UPS and backup power systems",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "integrated-platforms",
    title: "Integrated Platforms",
    categories: [
      {
        title: "Unified Monitoring & Interoperability",
        image: "/images/pdf-img-13.jpg",
        items: [
          {
            title: "Unified Monitoring",
            points: [
              "Centralized dashboards for real-time system status",
              "Unified monitoring of CCTV, access control, intrusion, perimeter, BMS, and environmental systems",
              "Event correlation and real-time alerts",
              "Video walls and operator workstations for control rooms",
              "Secure remote access for authorized users",
            ],
          },
          {
            title: "Interoperability",
            points: [
              "Integration of security, ELV, IT, and building systems",
              "Open architecture and standards-based integration",
              "Data exchange between platforms and subsystems",
              "Elimination of system silos",
              "Scalability for future technologies and expansions",
            ],
          },
        ],
      },
    ],
  },
];
