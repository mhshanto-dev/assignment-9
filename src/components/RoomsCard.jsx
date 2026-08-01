import Image from "next/image";

const RoomsCard = ({ room }) => {
  const {
    image,
    name,
    description,
    floor,
    capacity,
    price,
    amenities,
  } = room;

  return (
    <div className="border rounded-lg p-4 shadow">
      {/* Room Image */}
      <Image
        src={image}
        alt={name}
        width={400}
        height={250}
        className="w-full h-56 object-cover rounded"
      />

      {/* Room Info */}
      <div className="mt-4">
        <h2 className="text-xl font-bold">{name}</h2>

        <p className="text-gray-600 mt-2">{description}</p>

        {/* Floor, Capacity, Price */}
        <div className="grid grid-cols-3 gap-4 mt-4 text-center">
          <div>
            <p className="font-semibold">Floor</p>
            <p>{floor}</p>
          </div>

          <div>
            <p className="font-semibold">Capacity</p>
            <p>{capacity}</p>
          </div>

          <div>
            <p className="font-semibold">Price</p>
            <p>${price}</p>
          </div>
        </div>

        {/* Amenities */}
        <div className="mt-4">
          <p className="font-semibold">Amenities</p>
          <p>{amenities?.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default RoomsCard;