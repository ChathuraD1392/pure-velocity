type Service = {
  id: number;
  title: string;
  bullets: string[];
};

const services: Service[] = [
  {
    id: 1,
    title: "Advanced Diagnostics & Troubleshooting",
    bullets: [
      "Full Tesla Toolbox diagnostics",
      "Remote support & sensor/module testing",
      "HVIL, BMS, PCS, inverter & CAN bus interpretation",
    ],
  },
  {
    id: 2,
    title: "High Voltage System Repairs",
    bullets: [
      "HV battery analysis & main pack troubleshooting",
      "Contactor, fuse inspections & HV wiring",
      "DC-DC and pack level diagnostics",
    ],
  },
  {
    id: 3,
    title: "Electrical & Mechanical Repairs",
    bullets: [
      "Steering, suspension & braking systems",
      "AC / HVAC, cooling systems, 12V faults",
      "Body harness and connector repairs",
    ],
  },
  {
    id: 4,
    title: "Preventative Maintenance",
    bullets: [
      "Brake servicing & coolant checks",
      "Suspension checks & cabin filters",
      "General vehicle inspections",
    ],
  },
  {
    id: 5,
    title: "Battery & Range Health Evaluation",
    bullets: [
      "SOH (State of Health) reports",
      "Thermal performance & efficiency checks",
      "Charging behaviour diagnostics",
    ],
  },
  {
    id: 6,
    title: "Software & Configuration Support",
    bullets: [
      "Software-related troubleshooting & OTA help",
      "Connectivity, configuration & firmware support",
    ],
  },
];

const Services = () => {
  return (
    <div className="relative top-10 mb-8">
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">
            Tesla Services & Repairs
          </h2>
          <p className="text-center mt-3 text-gray-600">
            We specialise 100% in Tesla vehicles — nothing else.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article
                key={s.id}
                className="bg-white rounded-xl p-6 shadow-sm border"
              >
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <ul className="mt-3 text-sm text-gray-600 space-y-2">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-700">
              If it has a battery, a motor, and a Tesla badge — we’ve got it
              covered.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
