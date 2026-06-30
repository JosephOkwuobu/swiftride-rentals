import {
  Shield,
  Lock,
  Database,
  Mail,
  Phone,
} from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <div className="inline-flex bg-blue-600 p-4 rounded-full mb-5">
            <Shield size={36} />
          </div>

          <h1 className="text-5xl font-bold">
            Privacy Policy
          </h1>

          <p className="mt-4 text-gray-400">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-8">

          <section className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-semibold mb-4">
              Information We Collect
            </h2>

            <p className="text-gray-300 leading-8">
              SwiftRide Rentals collects customer information including
              your full name, phone number, email address, pickup and
              return dates, selected vehicle, and booking details solely
              for processing reservations and providing our rental
              services.
            </p>
          </section>

          <section className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Database className="text-blue-400" />
              <h2 className="text-2xl font-semibold">
                How We Use Your Information
              </h2>
            </div>

            <ul className="space-y-3 text-gray-300 list-disc pl-6">
              <li>Process vehicle reservations.</li>
              <li>Verify customer identity.</li>
              <li>Provide customer support.</li>
              <li>Send booking confirmations.</li>
              <li>Improve our rental services.</li>
            </ul>
          </section>

          <section className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="text-green-400" />
              <h2 className="text-2xl font-semibold">
                Data Security
              </h2>
            </div>

            <p className="text-gray-300 leading-8">
              We implement reasonable technical and organizational
              measures to safeguard your personal information against
              unauthorized access, disclosure, alteration, or destruction.
            </p>
          </section>

          <section className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-semibold mb-4">
              Sharing Information
            </h2>

            <p className="text-gray-300 leading-8">
              We do not sell or rent your personal information. We may
              disclose information only when required by law or when
              necessary to complete your booking.
            </p>
          </section>

          <section className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-semibold mb-4">
              Your Rights
            </h2>

            <ul className="space-y-3 text-gray-300 list-disc pl-6">
              <li>Request access to your personal data.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion where legally permitted.</li>
              <li>Contact us regarding privacy concerns.</li>
            </ul>
          </section>

          <section className="bg-blue-900/30 border border-blue-700 rounded-2xl p-8">

            <div className="flex items-center gap-3 mb-4">
              <Mail className="text-blue-400" />
              <Phone className="text-blue-400" />
              <h2 className="text-2xl font-semibold">
                Contact Us
              </h2>
            </div>
            

            <p className="text-gray-300 mt-2">
              Phone: 804-397-2181
            </p>

          </section>

        </div>

      </div>
    </div>
  );
};

export default Privacy;