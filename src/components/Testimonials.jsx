const testimonials = [
  {
    name: "James R.",
    rating: 5,
    review:
      "Excellent customer service and a very smooth rental process. The vehicle was clean, reliable, and exactly as advertised."
  },

  {
    name: "Sarah M.",
    rating: 5,
    review:
      "SwiftRide Rentals made my trip stress-free. The booking process was simple and the staff was very professional."
  },

  {
    name: "David L.",
    rating: 5,
    review:
      "Affordable weekly pricing and outstanding communication throughout the rental period. Highly recommended."
  },

  {
    name: "Jennifer T.",
    rating: 5,
    review:
      "The vehicle was in excellent condition and the customer support was exceptional from start to finish."
  },

  {
    name: "Michael P.",
    rating: 5,
    review:
      "One of the best rental experiences I've had. Transparent pricing and great customer care."
  },

  {
    name: "Chris W.",
    rating: 5,
    review:
      "Fast approval process, professional service, and dependable vehicles. I will definitely rent again."
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-blue-900 mb-4">
            Customer Testimonials
          </h2>

          <p className="text-gray-600">
            See what our customers have to say about
            their experience with SwiftRide Rentals.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >

              <div className="text-yellow-500 text-2xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-600 leading-8 mb-6">
                "{item.review}"
              </p>

              <h3 className="font-bold text-lg">
                {item.name}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;