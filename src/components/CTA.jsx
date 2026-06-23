const CTA = () => {
  return (
    <section className="bg-blue-900 py-24">

      <div className="max-w-6xl mx-auto px-6 text-center text-white">

        <h2 className="text-5xl font-bold mb-6">
          Reliable Transportation When You Need It
        </h2>

        <p className="max-w-3xl mx-auto text-lg leading-8 mb-10">
          Whether you need a vehicle for business, personal use,
          rideshare driving, or temporary transportation,
          SwiftRide Rentals has affordable and dependable options
          ready for you.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="tel:8043972181"
            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/18043972181"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold"
          >
            Contact on WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
};

export default CTA;