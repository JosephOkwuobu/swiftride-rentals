import { FileText, ShieldCheck, Car, AlertTriangle } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white pt-28 pb-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 p-4 rounded-full shadow-lg shadow-blue-500/30">
              <FileText size={36} />
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-4">
            Terms & Conditions
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto">
            Please read these Terms & Conditions carefully before renting a
            vehicle from SwiftRide Rentals. By making a booking, you agree to
            comply with the following policies.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">

          <section className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Car className="text-blue-400" />
              <h2 className="text-2xl font-semibold">
                Vehicle Rental
              </h2>
            </div>

            <p className="text-gray-300 leading-8">
              SwiftRide Rentals provides vehicles for short-term and long-term
              rental services. Every booking is subject to vehicle availability,
              identity verification, and successful payment confirmation.
            </p>
          </section>

          <section className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-green-400" />
              <h2 className="text-2xl font-semibold">
                Driver Requirements
              </h2>
            </div>

            <ul className="space-y-3 text-gray-300 list-disc pl-6">
              <li>Drivers must be at least 21 years old.</li>
              <li>A valid driver's license is required.</li>
              <li>Government-issued identification may be requested.</li>
              <li>The renter is responsible for all traffic violations incurred during the rental period.</li>
            </ul>
          </section>

          <section className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-semibold mb-4">
              Booking & Payment
            </h2>

            <ul className="space-y-3 text-gray-300 list-disc pl-6">
              <li>Bookings are confirmed only after approval by SwiftRide Rentals.</li>
              <li>Rental charges must be paid before vehicle pickup unless otherwise agreed.</li>
              <li>Additional charges may apply for late returns, fuel shortages, or damages.</li>
            </ul>
          </section>

          <section className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-semibold mb-4">
              Cancellation Policy
            </h2>

            <p className="text-gray-300 leading-8">
              Customers may request cancellation before the scheduled pickup
              time. Refund eligibility depends on the timing of the cancellation
              and the payment method used. Administrative charges may apply.
            </p>
          </section>

          <section className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-semibold mb-4">
              Vehicle Use
            </h2>

            <ul className="space-y-3 text-gray-300 list-disc pl-6">
              <li>No reckless or illegal driving.</li>
              <li>No racing or commercial use without authorization.</li>
              <li>Smoking inside the vehicle is prohibited.</li>
              <li>The renter must return the vehicle in substantially the same condition it was received.</li>
            </ul>
          </section>

          <section className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="text-yellow-400" />
              <h2 className="text-2xl font-semibold">
                Liability
              </h2>
            </div>

            <p className="text-gray-300 leading-8">
              The renter accepts responsibility for any loss, theft, damage, or
              fines incurred during the rental period except where prohibited by
              applicable law. SwiftRide Rentals is not liable for personal items
              left inside rented vehicles.
            </p>
          </section>

          <section className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-semibold mb-4">
              Privacy
            </h2>

            <p className="text-gray-300 leading-8">
              Customer information is collected solely for booking,
              identification, customer support, and legal compliance. Personal
              information is handled responsibly and is not sold to third
              parties.
            </p>
          </section>

          <section className="bg-blue-900/30 border border-blue-700 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Agreement
            </h2>

            <p className="text-gray-300 leading-8">
              By making a reservation or renting a vehicle from SwiftRide
              Rentals, you acknowledge that you have read, understood, and agree
              to these Terms & Conditions.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Terms;