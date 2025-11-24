const Contact = () => {
  return (
    <div className="relative top-10 mb-8">
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
                <strong>Service Centre:</strong> 75, Station Road, Kandana, Sri
                Lanka
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
    </div>
  );
};

export default Contact;
