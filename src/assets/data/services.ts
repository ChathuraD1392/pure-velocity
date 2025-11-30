import advanced from "../images/service_diagnostic.jpg";
import voltage from "../images/service_highvoltage.jpg";
import maintenance from "../images/service_maintenance.webp";
import electrical from "../images/services_electrical.png";
import battery from "../images/services_battery.png";
import software from "../images/services_software.webp";
import remote from '../images/Model3Standard_95.jpg'

export interface Service {
  id: number;
  title: string;
  bullets: string[];
  image: string;
  hasgTag?:string;
  beforeHashTag?:string;
  afterHasgTag?:string;
};

export const services: Service[] = [
  {
    id: 1,
    title: "Advanced Diagnostics & Troubleshooting",
    bullets: [
      "Full Tesla Toolbox diagnostics",
      "Remote support",
      "Sensor/module testing",
      "HVIL, BMS, PCS, charge port, and inverter issues",
      "Drivetrain fault tracing",
      "CAN bus error interpretation",
    ],
    image: advanced,
    hasgTag:"slide1",
    beforeHashTag:"#",
    afterHasgTag:"slide2"
  },
  {
    id: 2,
    title: "High Voltage System Repairs",
    bullets: [
      "HV battery analysis",
      "Contactor & fuse inspections",
      "HV wiring, HVIL loop testing",
      "DC-DC converter faults",
      "Main pack troubleshooting",
    ],
    image: voltage,
    hasgTag:"slide2",
    beforeHashTag:"slide1",
    afterHasgTag:"slide3"
  },
  {
    id: 3,
    title: "Electrical & Mechanical Repairs",
    bullets: [
      "Steering, suspension, braking systems",
      "AC / HVAC repairs",
      "Cooling systems",
      "12V system faults",
      "Body harness and connector repairs",
    ],
    image: electrical,
    hasgTag:"slide3",
    beforeHashTag:"slide2",
    afterHasgTag:"slide4"
  },
  {
    id: 4,
    title: "Preventative Maintenance",
    bullets: [
      "Brake servicing",
      "Coolant system checks",
      "Suspension checks",
      "Cabin filters",
      "General inspections",

    ],
    image: maintenance,
    hasgTag:"slide4",
    beforeHashTag:"slide3",
    afterHasgTag:"slide5"
  },
  {
    id: 5,
    title: "Battery & Range Health Evaluation",
    bullets: [
      "SOH (State of Health) reports",
      "Efficiency checks",
      "Thermal performance testing",
      "Charging behaviour diagnostics",

    ],
    image: battery,
    hasgTag:"slide5",
    beforeHashTag:"slide4",
    afterHasgTag:"slide6"
  },
  {
    id: 6,
    title: "Software & Configuration Support",
    bullets: [
      "Software-related troubleshooting",
      "OTA update assistance",
      "Connectivity and configuration issues",

    ],
    image: software,
    hasgTag:"slide6",
    beforeHashTag:"slide5",
    afterHasgTag:"#"
  },

  {
    id: 7,
    title: "Remote Diagnostics",
    bullets: [
      "Our international EV technicians connect directly to your vehicle for deep-dive analysis and expert-level troubleshooting — something no other workshop in Sri Lanka offers.",

    ],
    image: remote,
    hasgTag:"slide6",
    beforeHashTag:"slide5",
    afterHasgTag:"#"
  },
];