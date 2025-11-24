const Test_3 = () => {
  return (
    <div className="w-full bg-[#EFF3F3] font-sans overflow-hidden">
      {/* Hero Section */}
      {/* Footer Section */}
      <footer className="grid grid-cols-1 md:grid-cols-4 gap-10 p-10 mx-4 mt-8 bg-[#DBE5E5] rounded-xl relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/stripes-light.png')]" />

        {/* Company */}
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-2 text-gray-700 text-xl font-semibold">
            <div className="w-10 h-10 bg-teal-600 rounded-lg"></div>
            Bexon
          </div>
          <p className="text-gray-600 text-sm max-w-xs">
            Developing personalize our customer journeys to increase
            satisfaction & loyalty of our expansion.
          </p>
          <div className="flex gap-6 pt-2">
            <div className="text-center">
              <p className="text-2xl font-bold">18</p>
              <p className="text-gray-600 text-xs">CLUTCH AWARDS</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">5</p>
              <p className="text-gray-600 text-xs">AWWWARDS</p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="relative z-10 space-y-2 text-gray-700">
          <h3 className="font-semibold text-lg mb-2">Services</h3>
          <p>Customer Experience</p>
          <p>Training Programs</p>
          <p>Business Strategy</p>
          <p>Training Program</p>
          <p>ESG Consulting</p>
          <p>Development Hub</p>
        </div>

        {/* Resources */}
        <div className="relative z-10 space-y-2 text-gray-700">
          <h3 className="font-semibold text-lg mb-2">Resources</h3>
          <p>Contact us</p>
          <p>Team Member</p>
          <p>Recognitions</p>
          <p className="inline-flex items-center gap-2">
            Careers <span className="badge badge-success text-white">NEW</span>
          </p>
          <p>News</p>
          <p>Feedback</p>
        </div>

        {/* Newsletter */}
        <div className="relative z-10 space-y-4 text-gray-700">
          <h3 className="font-semibold text-lg">
            Subscribe to Our Newsletter.
          </h3>

          <div className="flex items-center bg-white rounded-xl shadow p-2">
            <input
              type="email"
              placeholder="Enter email"
              className="input input-sm w-full focus:outline-none"
            />
            <button className="btn btn-sm bg-teal-600 text-white rounded-lg">
              ↗
            </button>
          </div>

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="checkbox checkbox-xs" />
            Agree to our{" "}
            <span className="font-semibold">Terms & Condition?</span>
          </label>
        </div>
      </footer>
      {/* Bottom bar
      <div className="flex flex-col md:flex-row justify-between items-center px-10 py-6 text-gray-600 text-sm">
        <div className="flex items-center gap-4">
          <p>+1 (009) 544-7818</p>
          <p>info@bexon.com</p>
        </div>

        <div className="flex gap-4 text-lg opacity-70">
          <span>🌐</span>
          <span>📸</span>
          <span>✖️</span>
          <span>🔗</span>
        </div>
      </div>
      <div className="text-center text-gray-500 text-xs pb-6">
        © 2025 Bexon All right reserved
      </div> */}
    </div>
  );
};

export default Test_3;
