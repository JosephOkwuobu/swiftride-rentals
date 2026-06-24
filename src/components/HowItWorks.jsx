const HowItWorks = () => {
  return (
    <section
      id="works"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-blue-900 mb-4">
            How It Works
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Renting a vehicle with SwiftRide Rentals is simple,
            transparent, and efficient.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-slate-50 p-8 rounded-2xl">

            <div className="text-4xl font-bold text-red-600 mb-4">
              01
            </div>

            <h3 className="text-xl font-bold mb-3">
              Choose A Vehicle
            </h3>

            <p className="text-gray-600">
              Browse our available fleet and select
              the vehicle that meets your needs.
            </p>

          </div>

          <div className="bg-slate-50 p-8 rounded-2xl">

            <div className="text-4xl font-bold text-red-600 mb-4">
              02
            </div>

            <h3 className="text-xl font-bold mb-3">
              Submit Inquiry
            </h3>

            <p className="text-gray-600">
              Contact us by phone, SMS to inquire about availability
              or our rental application form.
            </p>

          </div>

          <div className="bg-slate-50 p-8 rounded-2xl">

            <div className="text-4xl font-bold text-red-600 mb-4">
              03
            </div>

            <h3 className="text-xl font-bold mb-3">
              Verification
            </h3>

            <p className="text-gray-600">
              Provide the required documents
              for verification and approval.
            </p>

          </div>

          <div className="bg-slate-50 p-8 rounded-2xl">

            <div className="text-4xl font-bold text-red-600 mb-4">
              04
            </div>

            <h3 className="text-xl font-bold mb-3">
              Pick Up & Drive
            </h3>

            <p className="text-gray-600">
              Complete payment, collect your vehicle,
              and enjoy a smooth driving experience.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;