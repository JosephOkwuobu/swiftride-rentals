const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24"
      style={{
        backgroundImage: "url('/SwiftRide.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-blue-950/70"></div>

      <div className="relative z-10 text-center text-white w-full max-w-5xl">

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Premium Car Rentals
          <span className="block text-blue-500">
            In Arlington, Virginia
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl leading-7 md:leading-8 mb-8 max-w-3xl mx-auto">
          SwiftRide Rentals provides reliable, affordable,
          and professionally maintained vehicles for
          residents, business travelers, tourists, and
          rideshare drivers throughout Arlington and
          surrounding areas.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="#fleet"
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-semibold transition"
          >
            View Fleet
          </a>

          <a
              href="sms:+18043972181"
                   className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold"
>
                     Book Now
            </a>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-14 md:mt-20">

          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-red-500">
              100%
            </h3>
            <p className="text-sm sm:text-base">
              Customer Focused
            </p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-red-500">
              24/7
            </h3>
            <p className="text-sm sm:text-base">
              Support Available
            </p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-red-500">
              Affordable
            </h3>
            <p className="text-sm sm:text-base">
              Weekly Rates
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;