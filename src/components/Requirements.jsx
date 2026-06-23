const Requirements = () => {
  const items = [
    "Valid driver’s license",
    "Government issued ID (NIN, Passport or Voter’s card)",
    "Minimum age requirement: 21+",
    "Security deposit may be required",
    "Basic driving experience required",
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