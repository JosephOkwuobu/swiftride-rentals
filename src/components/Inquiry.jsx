const Inquiry = () => {
  return (
    <section
      id="inquire"
      className="py-24 bg-white"
    >

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-blue-900 mb-4">
            Contact Information
          </h2>

          <p className="text-gray-600">
            We'd love to hear from you. Whether you have questions about our rental process, need assistance with a booking, or want to provide feedback, our team is here to help. Reach out to us via phone, SMS, or visit our location in Arlington, VA. 
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-50 p-8 rounded-2xl shadow">

            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Phone
            </h3>

            <p className="text-gray-600">
              804-397-2181
            </p>

          </div>

          <div className="bg-slate-50 p-8 rounded-2xl shadow">

            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              SMS / Call
            </h3>

            <p className="text-gray-600">
              804-397-2181
            </p>

          </div>

          <div className="bg-slate-50 p-8 rounded-2xl shadow">

            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Address
            </h3>

            <p className="text-gray-600">
              3030 Potomac Ave
              <br />
              Arlington, VA 22202
              <br />
              United States
            </p>

          </div>

        </div>

        <div className="mt-16">

          <iframe
            title="SwiftRide Rentals Location"
            src="https://maps.google.com/maps?q=3030%20Potomac%20Ave%20Arlington%20VA%2022202&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            className="rounded-2xl shadow-lg"
          ></iframe>

        </div>

      </div>

    </section>
  );
};

export default Inquiry;