import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "University Student",
    rating: 5,
    comment:
      "Booking a study room was incredibly easy. The space was clean, quiet, and perfect for exam preparation.",
  },
  {
    id: 2,
    name: "Mehedi Hasan",
    role: "Software Engineering Student",
    rating: 5,
    comment:
      "High-speed Wi-Fi, comfortable seating, and a peaceful environment helped me stay productive for hours.",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "Medical Student",
    rating: 5,
    comment:
      "The online booking system is fast and convenient. I highly recommend StudyNook to every student.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 lg:py-24 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-primary font-semibold uppercase tracking-[3px]">
            Testimonials
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            What Our Students Say
          </h2>

          <p className="mt-4 text-gray-500">
            Hear from students who have experienced our comfortable, quiet,
            and fully equipped study spaces.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-base-100 rounded-2xl shadow-md border border-base-300 p-8 hover:shadow-xl transition duration-300"
            >
              <FaQuoteLeft className="text-4xl text-primary mb-5" />

              <p className="text-gray-600 leading-7 mb-6">
                "{item.comment}"
              </p>

              <div className="flex gap-1 text-yellow-400 mb-5">
                {[...Array(item.rating)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              <div className="border-t pt-4">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;