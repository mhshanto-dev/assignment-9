import RoomsCard from "@/components/RoomsCard";
import SearchFilter from "@/components/SearchFilter";

const RoomsPage = async ({ searchParams }) => {
  // Next.js 16
  const params = await searchParams;
  const search = params?.search ?? "";

  console.log("Search:", search);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms?search=${encodeURIComponent(search)}`,
    {
      cache: "no-store",
    }
  );

  const rooms = await res.json();

  console.log("Rooms:", rooms.length);

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <SearchFilter />

      <h1 className="text-3xl font-bold my-6">
        All Rooms ({rooms.length})
      </h1>

      {rooms.length === 0 ? (
        <h2 className="text-center text-2xl font-semibold mt-20">
          No Rooms Found
        </h2>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <RoomsCard key={room._id} room={room} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RoomsPage;


// import RoomsCard from "@/components/RoomsCard";


// const roomsPage = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`);
//     const rooms = await res.json();
//     console.log(rooms);
//     return (
//         <div>
//             <h1>All Rooms </h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {
//                     rooms.map((room) => (
//                         <div key={room._id}>
//                             <RoomsCard room={room}></RoomsCard>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };

// export default roomsPage;



// import RoomsCard from "@/components/RoomsCard";
// import SearchFilter from "@/components/SearchFilter";

// const RoomsPage = async ({ searchParams }) => {
//   const search = searchParams?.search || "";

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms?search=${search}`,
//     {
//       cache: "no-store",
//     }
//   );

//   const rooms = await res.json();

//   return (
//     <div className="max-w-7xl mx-auto px-5 py-10">

//       <SearchFilter />

//       <h1 className="text-3xl font-bold my-6">
//         All Rooms ({rooms.length})
//       </h1>

//       {rooms.length === 0 ? (
//         <h2 className="text-center text-2xl font-semibold mt-20">
//           No Rooms Found
//         </h2>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {rooms.map((room) => (
//             <RoomsCard
//               key={room._id}
//               room={room}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default RoomsPage;
