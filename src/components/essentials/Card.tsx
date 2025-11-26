export const steps = [
  {
    element: "01",
    title: "Honest work",
    text: "Trust begins with honest, reliable service",
  },
  {
    element: "02",
    title: "ECutting-edge diagnostics",
    text: "Precision technology ensures flawless troubleshooting",
  },
  {
    element: "03",
    title: "Global knowledge",
    text: "International EV knowledge, delivered locally",
  },
  {
    element: "04",
    title: " Local trust",
    text: "Local service backed by strong community trust",
  },
];

export default function Card() {
  return (
    <section className="w-full bg-[#007bff]/40 py-24 px-6 md:px-18 pt-30">
      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row items-start justify-between max-w-400 mx-auto">
        <div>
          <span className="text-xs tracking-wider font-semibold bg-[#007bff] text-white px-4 py-1 pt-2 pb-2 rounded-md">
            Our Philosophy
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-gray-900">
            Seamless Process,
            <br />
            Great <span className="text-white font-light">Results.</span>
          </h2>
        </div>

        <div className="max-w-md mt-6 md:mt-0"></div>
      </div>

      {/* STEPS SECTION */}
      <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-7xl mx-auto relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-10 rounded-xl shadow-sm relative"
          >
            {/* Number */}
            <h3 className="text-6xl font-bold bg-linear-to-b from-[#0a0f2d] to-[#007bff] text-transparent bg-clip-text">
              {step.element}
            </h3>

            {/* Title */}
            <h4 className="mt-4 text-xl font-semibold text-gray-900">
              {step.title}
            </h4>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
