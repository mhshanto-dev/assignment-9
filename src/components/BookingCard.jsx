"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, DateField, Label } from "@heroui/react";
import { Card } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { today, getLocalTimeZone } from "@internationalized/date";
import toast from "react-hot-toast";


const BookingCard = ({ room }) => {
  const router = useRouter();
    const { data: session } = authClient.useSession();
  const user = session?.user;
    console.log(user); 
    const [departureDate, setDepartureDate] = useState(null);
    console.log(new Date (departureDate));
    const { image,
    name,
    description,
    floor,
    capacity,
    price,
    amenities,} = room;

    const handleBooking = async () => {
        const bookingData = {
          userId: user?.id,
          userImage: user?.image,
          userName: user?.name,
          userEmail: user?.email,
          roomId: room._id,
          roomImage: room.image,
          roomName: room.name,
          roomPrice: room.price,
          roomFloor: room.floor,
          departureDate: new Date (departureDate),
        }
        // console.log(bookingData);

        const {data: tokenData} = await authClient.token(
          // console.log(tokenData)
        );

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${tokenData?.token}`,
          },
          body: JSON.stringify(bookingData),
        });
        const data = await res.json();
        toast.success("Booking successfully!");
        router.push("/my-bookings");
        console.log(data);
    }

  

  return (
    <Card className="mt-5 rounded-none border p-5 text-center lg:text-left">
      <p className="text-sm text-muted">Starting From</p>

      <h2 className="mt-1 text-3xl font-bold text-cyan-400 sm:text-4xl">
        ${price}/hr
      </h2>

      <p className="text-lg text-muted">Floor {floor}</p>
      <p className="mb-5 text-sm text-muted">Capacity: {capacity} people</p>

      <DateField
        onChange={setDepartureDate}
        minValue={today(getLocalTimeZone())}
        className="mx-auto w-full max-w-[256px] lg:mx-0"
        name="date"
      >
        <Label className="mb-2 text-sm text-muted">Date</Label>

        <DateField.Group className="w-full">
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>

      <Button onClick={handleBooking} className="w-full rounded-none">
        Book Now
      </Button>
    </Card>
  );
};

export default BookingCard;




// "use client";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { Button, DateField, Label } from "@heroui/react";
// import { Card } from "@heroui/react";
// import { authClient } from "@/lib/auth-client";
// import toast from "react-hot-toast";


// const BookingCard = ({ room }) => {
//   const router = useRouter();
//     const { data: session } = authClient.useSession();
//   const user = session?.user;
//     console.log(user); 
//     const [departureDate, setDepartureDate] = useState(null);
//     console.log(new Date (departureDate));
//     const { image,
//     name,
//     description,
//     floor,
//     capacity,
//     price,
//     amenities,} = room;

//     const handleBooking = async () => {
//         const bookingData = {
//           userId: user?.id,
//           userImage: user?.image,
//           userName: user?.name,
//           userEmail: user?.email,
//           roomId: room._id,
//           roomImage: room.image,
//           roomName: room.name,
//           roomPrice: room.price,
//           roomFloor: room.floor,
//           departureDate: new Date (departureDate),
//         }
//         // console.log(bookingData);

//         const {data: tokenData} = await authClient.token(
//           // console.log(tokenData)
//         );

//         const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             authorization: `Bearer ${tokenData?.token}`,
//           },
//           body: JSON.stringify(bookingData),
//         });
//         const data = await res.json();
//         toast.success("Booking successfully!");
//         router.push("/rooms");
//         console.log(data);
//     }

  

//   return (
//     <Card className="mt-5 rounded-none border p-5 text-center lg:text-left">
//       <p className="text-sm text-muted">Starting From</p>

//       <h2 className="mt-1 text-3xl font-bold text-cyan-400 sm:text-4xl">
//         ${price}/hr
//       </h2>

//       <p className="mb-5 text-lg text-muted">Floor {floor}</p>

//       <DateField onChange={setDepartureDate} className="mx-auto w-full max-w-[256px] lg:mx-0" name="date">
//         <Label className="mb-2 text-sm text-muted">Date</Label>

//         <DateField.Group className="w-full">
//           <DateField.Input>
//             {(segment) => <DateField.Segment segment={segment} />}
//           </DateField.Input>
//         </DateField.Group>
//       </DateField>

//       <Button onClick={handleBooking} className="w-full rounded-none">
//         Book Now
//       </Button>
//     </Card>
//   );
// };

// export default BookingCard;