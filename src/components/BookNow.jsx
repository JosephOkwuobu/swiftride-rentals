const BookNow = () => {
  return (
    <section
      id="book"
      className="py-24 bg-white"
    >

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold text-blue-900 mb-6">
          Ready To Book Your Rental?
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto leading-8 mb-10">
          Reserve one of our professionally maintained vehicles today.
          Our team is ready to assist you with a fast and simple booking process.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="tel:8043972181"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl"
          >
            Call 804-397-2181
          </a>

          <a
            href="sms:+18043972181"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl"
          >
            Send an SMS
          </a>

        </div>

      </div>

    </section>
  );
};

export default BookNow;
