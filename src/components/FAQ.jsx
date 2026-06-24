const FAQ = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-blue-900 mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600">
            Answers to common questions about our rental services.
          </p>

        </div>

        <div className="space-y-8">

          <div className="bg-slate-50 p-6 rounded-xl">

            <h3 className="font-bold text-xl mb-3">
              What is the minimum rental period?
            </h3>

            <p className="text-gray-600">
              Our standard rental period begins at one week.
            </p>

          </div>

          <div className="bg-slate-50 p-6 rounded-xl">

            <h3 className="font-bold text-xl mb-3">
              Do I need a security deposit?
            </h3>

            <p className="text-gray-600">
              Yes. Security deposits may be required depending
              on the selected vehicle and rental terms.
            </p>

          </div>

          <div className="bg-slate-50 p-6 rounded-xl">

            <h3 className="font-bold text-xl mb-3">
              Can I extend my rental?
            </h3>

            <p className="text-gray-600">
              Yes. Extensions are available based on vehicle
              availability and approval.
            </p>

          </div>

          <div className="bg-slate-50 p-6 rounded-xl">

            <h3 className="font-bold text-xl mb-3">
              What documents are required?
            </h3>

            <p className="text-gray-600">
              A valid driver's license, government-issued ID,
              proof of address, and other verification documents.
            </p>

          </div>

          <div className="bg-slate-50 p-6 rounded-xl">

            <h3 className="font-bold text-xl mb-3">
              How do I reserve a vehicle?
            </h3>

            <p className="text-gray-600">
              You can call us, send a text message via SMS,
              or complete the rental application form.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FAQ;