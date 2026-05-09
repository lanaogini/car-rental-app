export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-white">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-gray-400 mb-12">Our rules and conditions</p>

      <div className="flex flex-col gap-6">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">🪪 Age Requirement</h2>
          <p className="text-gray-400">
            Minimum age to rent a car is 21 years. A valid driver's license is
            required.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">💳 Payment</h2>
          <p className="text-gray-400">
            We accept all major credit and debit cards. Payment is processed at
            the time of booking.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">⛽ Fuel Policy</h2>
          <p className="text-gray-400">
            Cars must be returned with the same fuel level as at pickup.
            Additional charges apply otherwise.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">🛡️ Insurance</h2>
          <p className="text-gray-400">
            Basic insurance is included in all rentals. Full coverage is
            available as an upgrade.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">❌ Cancellation</h2>
          <p className="text-gray-400">
            Free cancellation up to 24 hours before pickup. Late cancellations
            may incur a fee.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">📍 Return Policy</h2>
          <p className="text-gray-400">
            Cars must be returned to the same location unless otherwise agreed
            in advance.
          </p>
        </div>
      </div>
    </div>
  );
}
