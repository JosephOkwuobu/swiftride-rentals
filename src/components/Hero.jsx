const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/SwiftRide.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <div className="absolute inset-0 bg-blue-950/70"></div>

      <div className="relative z-10 text-center text-white px-6 max-w-5xl">

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Premium Car Rentals
          <span className="block text-blue-500">
            In Arlington, Virginia
          </span>
        </h1>

        <p className="text-lg md:text-xl leading-8 mb-8">

          SwiftRide Rentals provides reliable, affordable,
          and professionally maintained vehicles for
          residents, business travelers, tourists, and
          rideshare drivers throughout Arlington and
          surrounding areas.

        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="#fleet"
            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-semibold"
          >
            View Fleet
          </a>

          <a
            href="https://wa.me/18043972181"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold"
          >
            WhatsApp Us
          </a>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div>
            <h3 className="text-4xl font-bold text-red-500">
              100%
            </h3>
            <p>Customer Focused</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-red-500">
              24/7
            </h3>
            <p>Support Available</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-red-500">
              Affordable
            </h3>
            <p>Weekly Rates</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;