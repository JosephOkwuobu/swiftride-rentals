const Requirements = () => {
  const items = [
  "Valid driver's license with no major driving violations",
  "Minimum age requirement of 21 years (drivers under 25 may incur a young driver fee)",
  "Valid government-issued photo ID required at vehicle pickup",
  "Proof of insurance or purchase of approved rental protection coverage",
  "Credit or debit card required for reservation and security deposit",
  "All renters must agree to SwiftRide Rentals' terms, conditions, and vehicle use policies",
];

  return (
    <section id="requirements" className="bg-gray-950 text-white py-20 px-6">

      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Rental Requirements
        </h2>

        <div className="space-y-5">

          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-gray-900 p-4 rounded-lg border border-gray-800 hover:border-blue-500 transition"
            >

              {/* Modern bullet */}
              <div className="mt-1 w-3 h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50 animate-pulse"></div>

              <p className="text-gray-200">{item}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Requirements;