import { FaWifi, FaLaptopHouse, FaCalendarCheck } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaLaptopHouse className="text-4xl text-primary" />,
    title: "Quiet Study Environment",
    description:
      "Enjoy a peaceful and distraction-free atmosphere designed to improve focus, productivity, and learning.",
  },
  {
    id: 2,
    icon: <FaWifi className="text-4xl text-primary" />,
    title: "Modern Facilities",
    description:
      "High-speed Wi-Fi, air conditioning, whiteboards, projectors, and comfortable seating for every study session.",
  },
  {
    id: 3,
    icon: <FaCalendarCheck className="text-4xl text-primary" />,
    title: "Easy Online Booking",
    description:
      "Reserve your preferred study room in just a few clicks with a fast, secure, and hassle-free booking system.",
  },
];

const Featured = async () => {
  return (
    <section className="py-16 lg:py-24 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-primary font-semibold uppercase tracking-[3px]">
            Why Choose StudyNook
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Everything You Need for
            <span className="text-primary"> Productive Study</span>
          </h2>

          <p className="mt-5 text-gray-500 leading-7">
            Study smarter in modern, comfortable, and fully equipped study
            spaces. Whether you're preparing for exams, working on projects, or
            attending group discussions, we've got the perfect room for you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-base-100 border border-base-300 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>

              <p className="text-gray-500 leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;