import {
  Car,
  FileCheck,
  CreditCard,
  AlertTriangle,
} from "lucide-react";

const RentalPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white pt-28 pb-20 px-6">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">

          <div className="inline-flex bg-blue-600 p-4 rounded-full mb-5">
            <Car size={36} />
          </div>

          <h1 className="text-5xl font-bold">
            Rental Policy
          </h1>

          <p className="mt-4 text-gray-400">
            Please review our rental policies before making a reservation.
          </p>

        </div>

        <div className="space-y-8">

          <section className="bg-gray-900 rounded-2xl p-8 border border-gray-800">

            <div className="flex items-center gap-3 mb-4">
              <FileCheck className="text-blue-400" />
              <h2 className="text-2xl font-semibold">
                Driver Requirements
              </h2>
            </div>

            <ul className="list-disc pl-6 space-y-3 text-gray-300">
              <li>Minimum age of 21 years.</li>
              <li>Valid driver's license.</li>
              <li>Government-issued ID.</li>
              <li>Accurate booking information.</li>
            </ul>

          </section>

          <section className="bg-gray-900 rounded-2xl p-8 border border-gray-800">

            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="text-green-400" />
              <h2 className="text-2xl font-semibold">
                Payment
              </h2>
            </div>

            <ul className="list-disc pl-6 space-y-3 text-gray-300">
              <li>Rental payment may be required before pickup.</li>
              <li>Additional fees may apply for late returns or damages.</li>
              <li>Traffic fines remain the renter's responsibility.</li>
            </ul>

          </section>

          <section className="bg-gray-900 rounded-2xl p-8 border border-gray-800">

            <h2 className="text-2xl font-semibold mb-4">
              Vehicle Usage
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-gray-300">
              <li>No reckless driving.</li>
              <li>No racing or illegal activities.</li>
              <li>No unauthorized commercial use.</li>
              <li>Return the vehicle in good condition.</li>
            </ul>

          </section>

          <section className="bg-gray-900 rounded-2xl p-8 border border-gray-800">

            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="text-yellow-400" />
              <h2 className="text-2xl font-semibold">
                Cancellation Policy
              </h2>
            </div>

            <p className="text-gray-300 leading-8">
              Bookings may be cancelled before the scheduled pickup date.
              Refunds, if applicable, are subject to company review and
              payment method.
            </p>

          </section>

        </div>

      </div>

    </div>
  );
};

export default RentalPolicy;