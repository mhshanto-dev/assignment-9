import { EditModalForm } from "@/components/EditModal";
import { Button } from "@heroui/react";
import Image from "next/image";

const RoomDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/rooms/${id}`, {
    cache: "no-store",
  });

  const room = await res.json();

  const {
  image,
  name,
  description,
  floor,
  capacity,
  price,
  amenities,
  ownerName,
  ownerEmail,
  ownerImage,
} = room;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

        <EditModalForm id={id} room={room}></EditModalForm>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side */}
        <div className="lg:col-span-2">

          <Image
            src={image}
            alt={name}
            width={800}
            height={500}
            className="w-full h-[450px] object-cover rounded-xl"
          />

          <h1 className="text-4xl font-bold mt-6">
            {name}
          </h1>

          <p className="text-gray-600 mt-4">
            {description}
          </p>

          <div className="grid grid-cols-3 gap-4 mt-8 border rounded-lg p-5">

            <div className="text-center">
              <h3 className="font-semibold">Floor</h3>
              <p>{floor}</p>
            </div>

            <div className="text-center">
              <h3 className="font-semibold">Capacity</h3>
              <p>{capacity} Person</p>
            </div>

            <div className="text-center">
              <h3 className="font-semibold">Price</h3>
              <p>${price}/hr</p>
            </div>

          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">
              Amenities
            </h2>

            <div className="flex flex-wrap gap-3">
              {amenities?.map((item, index) => (
                <span
                  key={index}
                  className="border rounded-full px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>

          <div className="border rounded-xl p-6 shadow">

            <h2 className="text-4xl font-bold text-blue-600">
              ${price}
            </h2>

            <p className="text-gray-500 mb-6">
              Per Hour
            </p>

            <div className="space-y-3">

              <p>
                <strong>Floor:</strong> {floor}
              </p>

              <p>
                <strong>Capacity:</strong> {capacity} Person
              </p>

            </div>

            {/* Owner Card */}
<div className="border rounded-xl p-5 shadow mt-6">

  <h3 className="text-gray-500 text-sm mb-4">
    Listed By
  </h3>

  <div className="flex items-center gap-4">

    <Image
      src={room.ownerImage}
      alt={room.ownerName}
      width={60}
      height={60}
      className="rounded-full"
    />

    <div>
      <h2 className="font-semibold text-lg">
        {room.ownerName}
      </h2>

      <p className="text-gray-500 text-sm">
        {room.ownerEmail}
      </p>
    </div>

  </div>

</div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6">
              Book Now
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default RoomDetailsPage;