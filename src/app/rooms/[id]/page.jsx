// import BookingCard from "@/components/BookingCard";
// import { DeleteAlert } from "@/components/DeleteAlert";
// import { EditModalForm } from "@/components/EditModal";
import Image from "next/image";
import BookingCard from "@/components/BookingCard";
import { DeleteAlert } from "@/components/DeleteAlert";
import { EditModalForm } from "@/components/EditModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const RoomDetailsPage = async ({ params }) => {
  const { id } = await params;
  const {token} = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`http://localhost:5000/rooms/${id}`,
     {
      headers: {
        authorization: `Bearer ${token}`,
      },
    cache: "no-store",
  });

  const room = await res.json();

  if (!room) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-3xl font-bold">Room Not Found</h1>
      </div>
    );
  }

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
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Action Buttons */}
      <div className="mb-4 mt-5 flex justify-end gap-3">
        <EditModalForm id={id} room={room} />
        <DeleteAlert room={room} />
      </div>

      {/* Top Image */}
      <Image
        src={image}
        alt={name}
        width={1200}
        height={600}
        className="h-[250px] w-full rounded-xl object-cover sm:h-[350px] lg:h-[500px]"
      />

      {/* Content + Booking Card */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Side */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold lg:text-4xl">{name}</h1>

          <p className="mt-4 leading-7 text-gray-600">
            {description}
          </p>

          
          {/* Amenities */}
          <div className="mt-8">
            <h2 className="mb-4 text-2xl font-bold">
              Amenities
            </h2>
        <div className="flex flex-wrap gap-3">
              {amenities?.map((item, index) => (
                <span
                  key={index}
                  className="rounded-full border px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
            
          </div>
        </div>

        {/* Right Side */}
        <div>
          <BookingCard room={room} />
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsPage;