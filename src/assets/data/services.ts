import advanced from "../images/service_diagnostic.jpg";
import voltage from "../images/service_highvoltage.jpg";
import maintenance from "../images/service_maintenance.webp";
import electrical from "../images/services_electrical.png";
import battery from "../images/services_battery.png";
import software from "../images/services_software.webp";

export interface Service {
  id: number;
  title: string;
  bullets: string[];
  image: string;
};

export const services: Service[] = [
  {
    id: 1,
    title: "Advanced Diagnostics & Troubleshooting",
    bullets: [
      "Full Tesla Toolbox diagnostics",
      "Remote support & sensor/module testing",
      "HVIL, BMS, PCS, inverter & CAN bus interpretation",
    ],
    image: advanced,
  },
  {
    id: 2,
    title: "High Voltage System Repairs",
    bullets: [
      "HV battery analysis & main pack troubleshooting",
      "Contactor, fuse inspections & HV wiring",
      "DC-DC and pack level diagnostics",
    ],
    image: voltage,
  },
  {
    id: 3,
    title: "Electrical & Mechanical Repairs",
    bullets: [
      "Steering, suspension & braking systems",
      "AC / HVAC, cooling systems, 12V faults",
      "Body harness and connector repairs",
    ],
    image: electrical,
  },
  {
    id: 4,
    title: "Preventative Maintenance",
    bullets: [
      "Brake servicing & coolant checks",
      "Suspension checks & cabin filters",
      "General vehicle inspections",
    ],
    image: maintenance,
  },
  {
    id: 5,
    title: "Battery & Range Health Evaluation",
    bullets: [
      "SOH (State of Health) reports",
      "Thermal performance & efficiency checks",
      "Charging behaviour diagnostics",
    ],
    image: battery,
  },
  {
    id: 6,
    title: "Software & Configuration Support",
    bullets: [
      "Software-related troubleshooting & OTA help",
      "Connectivity, configuration & firmware support",
    ],
    image: software,
  },
];