import { BookingCancelAlert } from "@/components/BookingCancel";
import { auth } from "@/lib/auth";
import { TrashBin } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";


const MyBookings = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    })
    const user = session?.user
    console.log(user);


    const res = await fetch(`http://localhost:5000/bookings/${user?.id}`);
    const bookings = await res.json();
    console.log(bookings);


    return (
        <div className='min-w-3xl mx-auto px-4 py-10'>
            <h2 className="text-3xl font-bold mb-8">My Bookings</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    bookings.map((booking) => (
                        <div
                            key={booking._id}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
                        >
                            <div className="relative w-full h-48">
                                <Image
                                    src={booking.roomImage}
                                    alt={booking.roomName}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-4 space-y-1.5">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {booking.roomName}
                                </h3>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <span>Booked by: {booking.userName}</span>
                                    <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs font-medium">
                                        Floor {booking.roomFloor}
                                    </span>
                                </div>
                                

                                <p className="text-sm text-gray-600 pt-2 border-t border-gray-100 mt-2">
                                    Room Price: <span className="font-medium">${booking.roomPrice}</span>
                                </p>
                                <BookingCancelAlert bookingId={booking._id}></BookingCancelAlert>
                                
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default MyBookings;