const Why_Evs = () => {
  return (
    <div className="relative top-10">
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
                No tailpipe emissions and far fewer lifetime emissions even when
                charged from mixed energy sources.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold">
                Performance That Petrol Can't Match
              </h3>
              <p className="mt-2 text-gray-700">
                Instant torque, silent acceleration, and smooth power delivery —
                Teslas outrun most petrol cars without breaking a sweat.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold">
                Less Maintenance = Less Headache
              </h3>
              <p className="mt-2 text-gray-700">
                No engine, no gearbox, no exhaust — your main maintenance items
                are tyres and washer fluid.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Why_Evs;
