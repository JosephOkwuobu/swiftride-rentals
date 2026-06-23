const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-12">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          <div>

            <h3 className="text-2xl font-bold mb-4">
              SwiftRide Rentals
            </h3>

            <p className="text-gray-400 leading-7">
              Providing dependable and affordable vehicle
              rental services in Arlington, Virginia.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-bold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#fleet">Fleet</a>
              </li>

              <li>
                <a href="#works">How It Works</a>
              </li>

              <li>
                <a href="#book">Book Now</a>
              </li>

            </ul>

          </div>

          <div>

            <h3 className="text-xl font-bold mb-4">
              Contact
            </h3>

            <p className="text-gray-400">
              804-397-2181
            </p>

            <p className="text-gray-400 mt-2">
              Arlington, Virginia
            </p>

          </div>

        </div>

        <hr className="border-slate-800 my-8" />

        <div className="text-center text-gray-500">

          © 2026 SwiftRide Rentals.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;