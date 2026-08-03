import Link from "next/link";

const Banner = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">

        {/* Small Text */}
        <p className="text-blue-600 font-semibold mb-4">
          Welcome to StudyNook
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Discover the Best
          <span className="text-blue-600"> Study Rooms</span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto mt-6 text-gray-600">
          Search, book and manage study rooms with ease. Find a quiet place
          where you can stay focused and productive.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/rooms">
            <button className="bg-blue-300 text-black font-bold px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200">
              Explore Rooms
            </button>
          </Link>

          <Link href="/add-room">
            <button  className=" bg-blue-300 font-bold text-black px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200">
              List Your Room
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Banner;