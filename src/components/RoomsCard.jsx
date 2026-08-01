import Image from "next/image";
import Link from "next/link";

const RoomsCard = ({ room }) => {
  const {
    _id,
    image,
    name,
    description,
    floor,
    capacity,
    price,
    amenities,
  } = room;

  return (
    <div className="bg-white border rounded-xl shadow overflow-hidden">

      {/* Image */}
      <div className="relative">
        <Image
          src={image}
          alt={name}
          width={500}
          height={300}
          className="w-full h-52 object-cover"
        />

        <span className="absolute top-3 right-3 bg-white px-3 py-1 rounded font-semibold text-blue-600">
          ${price}/hr
        </span>
      </div>

      {/* Content */}
      <div className="p-5">

        <h2 className="text-2xl font-bold">{name}</h2>

        <p className="text-gray-600 mt-3 line-clamp-2">
          {description}
        </p>

        {/* Floor Capacity Price */}
        <div className="grid grid-cols-3 gap-4 text-center mt-5">

          <div>
            <p className="text-sm text-gray-500">Floor</p>
            <p className="font-semibold">{floor}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Capacity</p>
            <p className="font-semibold">{capacity}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Price</p>
            <p className="font-semibold">${price}</p>
          </div>

        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mt-5">
          {amenities?.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 border rounded text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Button */}
        <Link href={`/rooms/${_id}`}>
          <button className="w-full mt-6 border rounded-lg py-3 font-medium hover:bg-gray-100">
            View Details
          </button>
        </Link>

      </div>
    </div>
  );
};

export default RoomsCard;