const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-blue-900 mb-4">
            About SwiftRide Rentals
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 leading-8">
            SwiftRide Rentals is a trusted car rental company serving
            Arlington, Virginia and surrounding communities.
            We specialize in providing dependable and affordable
            weekly vehicle rentals for individuals, families,
            business professionals, tourists, and rideshare drivers.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-slate-50 p-8 rounded-2xl shadow-sm">

            <h3 className="text-3xl font-bold text-blue-900 mb-5">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-8">
              Our mission is to provide safe, affordable,
              and dependable transportation solutions while
              delivering exceptional customer service.
              We are committed to making vehicle rentals
              simple, transparent, and stress-free for every client.
            </p>

          </div>

          <div className="bg-slate-50 p-8 rounded-2xl shadow-sm">

            <h3 className="text-3xl font-bold text-blue-900 mb-5">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-8">
              Our vision is to become one of the most trusted
              independent car rental providers in the United States,
              recognized for reliability, professionalism,
              customer satisfaction, and affordable mobility solutions.
            </p>

          </div>

        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-10">

          <h3 className="text-3xl font-bold text-blue-900 mb-6">
            Meet Our CEO
          </h3>

          <h4 className="text-2xl font-semibold mb-4">
            Michael Sholeye
          </h4>

          <p className="text-gray-700 leading-8">
            Michael Sholeye is the Founder and Chief Executive Officer
            of SwiftRide Rentals. With a passion for entrepreneurship,
            transportation services, and customer satisfaction,
            he established SwiftRide Rentals to provide reliable,
            affordable, and accessible transportation options
            for everyday drivers.
          </p>

          <p className="text-gray-700 leading-8 mt-5">
            Under his leadership, SwiftRide Rentals continues
            to focus on professionalism, integrity, transparency,
            and delivering value-driven services that customers
            can trust. His commitment to operational excellence
            and customer care has positioned SwiftRide Rentals
            as a dependable transportation partner in Arlington, Virginia.
          </p>

        </div>

      </div>
    </section>
  );
};

export default About;