const Footer = () => {
  return (
    <footer className="border-t bg-white/90 mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">
          © {new Date().getFullYear()} Pure Velocity — Powering Sri Lanka’s EV
          future.
        </div>
        <div className="flex items-center gap-4">
          <a href="#about" className="text-sm text-gray-700 hover:underline">
            About
          </a>
          <a href="#services" className="text-sm text-gray-700 hover:underline">
            Services
          </a>
          <a href="#contact" className="text-sm text-gray-700 hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
