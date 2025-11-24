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

const Testing = () => {
  return (
    <div className="min-h-screen text-gray-900 bg-gradient-to-b from-white via-gray-50 to-white">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center font-semibold">
                PV
              </div>
              <div>
                <a href="#home" className="text-lg font-bold leading-none">
                  Pure Velocity
                </a>
                <p className="text-xs text-gray-600">
                  Sri Lanka's Tesla specialists
                </p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
              <a href="#services" className="hover:text-black">
                Services
              </a>
              <a href="#about" className="hover:text-black">
                About
              </a>
              <a href="#team" className="hover:text-black">
                Team
              </a>
              <a href="#why-evs" className="hover:text-black">
                Why EVs
              </a>
              <a href="#contact" className="hover:text-black">
                Contact
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="tel:+94XXXXXXXX"
                className="hidden sm:inline-block px-4 py-2 rounded-md border border-gray-200 hover:bg-gray-100"
              >
                Hotline
              </a>
              <button className="inline-flex items-center rounded-md bg-black text-white px-3 py-2 text-sm font-medium">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="relative">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0">
              {/* Replace with a hero video or image background - keep alt content for accessibility */}
              <div className="w-full h-96 sm:h-[36rem] bg-[url('/hero-placeholder.jpg')] bg-cover bg-center filter brightness-75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/20"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
              <div className="text-center max-w-3xl mx-auto text-white">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                  Welcome to Pure Velocity
                </h1>
                <p className="mt-4 text-lg sm:text-xl text-gray-100">
                  Sri Lanka’s first specialist Tesla service, diagnostics, and
                  repair ecosystem — powered by cutting-edge tech, global
                  expertise, and a team that eats, sleeps, and breathes EVs.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 font-semibold shadow"
                  >
                    Our Services
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-md border border-white text-white px-5 py-3"
                  >
                    Contact Us
                  </a>
                </div>

                <p className="mt-8 text-sm text-gray-200">
                  From advanced diagnostics to high-voltage repairs, from
                  software-level troubleshooting to general maintenance — Pure
                  Velocity is where Tesla owners come when they want the job
                  done right the first time.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">
                Pure Velocity — Sri Lanka’s Home of Tesla Expertise
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Pure Velocity began with a simple idea: to bring world-class
                Tesla servicing to Sri Lanka. Founded by Shanil and Dilin — two
                entrepreneurs, tech lovers, and unapologetic car addicts — PV
                has grown into a full-service Tesla workshop backed by global
                experience.
              </p>

              <p className="mt-4 text-gray-700">
                With Sanjeev leading operations on the ground, Dinesh
                maintaining standards and finances with military precision, and
                Rukshan powering customer support and admin, PV runs like a
                perfectly balanced EV drivetrain.
              </p>

              <ul className="mt-6 space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span> Honest
                  work.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>{" "}
                  Cutting-edge diagnostics.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span> Global
                  knowledge. Local trust.
                </li>
              </ul>

              <p className="mt-6 text-sm text-gray-500">
                Our Mission: To become Sri Lanka’s most trusted and advanced
                Tesla service ecosystem, setting a new benchmark for EV
                maintenance, transparency, and customer care.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg bg-white">
              <img
                src="/about-hero.jpg"
                alt="Workshop image"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </section>

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
        <section id="team" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center">Our Team</h2>
            <p className="text-center text-gray-600 mt-2">
              Passionate people building a better EV experience for Sri Lanka.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Shanil */}
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 overflow-hidden mb-4">
                  <img
                    src="/team/shanil.jpg"
                    alt="Shanil Wijewardena"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold">Shanil Wijewardena</h4>
                <p className="text-sm text-gray-600">
                  Co-Founder / Growth, Technology & Finance Director
                </p>
                <p className="mt-3 text-sm text-gray-700">
                  The brains, calculator, and turbocharger behind Pure Velocity
                  — a systems builder who dreams in KPIs and Autopilot quirks.
                </p>
              </div>

              {/* Dilin */}
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 overflow-hidden mb-4">
                  <img
                    src="/team/dilin.jpg"
                    alt="Dilin Arambewela"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold">Dilin Arambewela</h4>
                <p className="text-sm text-gray-600">
                  Co-Founder / Growth, Sales & Operations Director
                </p>
                <p className="mt-3 text-sm text-gray-700">
                  A sales powerhouse with entrepreneurial instincts and a knack
                  for closing deals at lightning speed.
                </p>
              </div>

              {/* Sanjeev */}
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 overflow-hidden mb-4">
                  <img
                    src="/team/sanjeev.jpg"
                    alt="Sanjeev Dassanayake"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold">Sanjeev Dassanayake</h4>
                <p className="text-sm text-gray-600">Managing Director</p>
                <p className="mt-3 text-sm text-gray-700">
                  The steady engine running operations — part businessman, part
                  mechanic whisperer.
                </p>
              </div>

              {/* Dinesh */}
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 overflow-hidden mb-4">
                  <img
                    src="/team/dinesh.jpg"
                    alt="Dinesh Wijewardena"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold">Dinesh Wijewardena</h4>
                <p className="text-sm text-gray-600">
                  Servicing & Finance Manager
                </p>
                <p className="mt-3 text-sm text-gray-700">
                  Guardian of inventory and strict keeper of standards and
                  finances.
                </p>
              </div>

              {/* Rukshan */}
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 overflow-hidden mb-4">
                  <img
                    src="/team/rukshan.jpg"
                    alt="Rukshan Hewage"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold">Rukshan Hewage</h4>
                <p className="text-sm text-gray-600">
                  Sales, Support & Administration Manager
                </p>
                <p className="mt-3 text-sm text-gray-700">
                  The customer support all-rounder — always ready with a smile
                  and a solution.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="why-evs"
          className="py-16 bg-gradient-to-b from-white to-gray-50"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center">Why EVs?</h2>
            <p className="text-center text-gray-600 mt-2">
              The Future Isn’t Coming — It’s Parked in Your Garage.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold">EVs Are Cheaper to Run</h3>
                <p className="mt-2 text-gray-700">
                  Fewer moving parts means less maintenance — no oil changes,
                  spark plugs, gearboxes or radiators to worry about. Lower
                  long-term cost.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold">EVs Are Better for the Planet</h3>
                <p className="mt-2 text-gray-700">
                  No tailpipe emissions and far fewer lifetime emissions even
                  when charged from mixed energy sources.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold">
                  Performance That Petrol Can't Match
                </h3>
                <p className="mt-2 text-gray-700">
                  Instant torque, silent acceleration, and smooth power delivery
                  — Teslas outrun most petrol cars without breaking a sweat.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold">
                  Less Maintenance = Less Headache
                </h3>
                <p className="mt-2 text-gray-700">
                  No engine, no gearbox, no exhaust — your main maintenance
                  items are tyres and washer fluid.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold">Get in Touch With Us</h2>
              <p className="mt-2 text-gray-600">
                Whether your Tesla needs a quick check-up or a full diagnostic
                deep dive, our team is here to help.
              </p>

              <div className="mt-6 space-y-4 text-sm text-gray-700">
                <p>
                  <strong>Hotline:</strong> +94 XXXXXXXX
                </p>
                <p>
                  <strong>Corporate Office:</strong> 11/3/2, Marine Drive,
                  Wellawatte Colombo 06
                </p>
                <p>
                  <strong>Service Centre:</strong> 75, Station Road, Kandana,
                  Sri Lanka
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:headoffice@purevelocity.lk"
                    className="text-blue-600 underline"
                  >
                    headoffice@purevelocity.lk
                  </a>
                </p>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                We respond fast — usually within minutes.
              </p>
            </div>

            <div>
              <form
                className="bg-white rounded-xl p-6 shadow-sm space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-200 shadow-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-200 shadow-sm"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    className="mt-1 block w-full rounded-md border-gray-200 shadow-sm"
                    rows={4}
                    placeholder="How can we help?"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center rounded-md bg-black text-white px-4 py-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Pure Velocity — Powering Sri Lanka’s EV
            future.
          </div>
          <div className="flex items-center gap-4">
            <a href="#about" className="text-sm text-gray-700 hover:underline">
              About
            </a>
            <a
              href="#services"
              className="text-sm text-gray-700 hover:underline"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-sm text-gray-700 hover:underline"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Testing;
