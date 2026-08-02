"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const amenitiesList = [
  "Wi-Fi",
  "Projector",
  "Whiteboard",
  "Air Conditioning",
  "Power Outlet",
  "Quiet Zone",
];

const AddNewRoomForm = () => {
  const router = useRouter();

  const [amenities, setAmenities] = useState([]);

  const handleAmenity = (item) => {
    if (amenities.includes(item)) {
      setAmenities(amenities.filter((a) => a !== item));
    } else {
      setAmenities([...amenities, item]);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const addroom = Object.fromEntries(formData.entries());

    // Add amenities
    addroom.amenities = amenities;

    const res = await fetch("http://localhost:5000/add-room", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addroom),
    });

    const data = await res.json();

    if (data.insertedId) {
  toast.success("Room Added Successfully!");
}

      e.target.reset();
      setAmenities([]);

      router.push("/rooms");
      router.refresh();
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-3xl mx-auto p-6 border rounded-lg space-y-5"
    >
      <h2 className="text-2xl font-bold">Add New Room</h2>

      <div>
        <label>Room Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full border p-2 rounded mt-1"
        />
      </div>

      <div>
        <label>Description</label>
        <textarea
          name="description"
          rows="4"
          required
          className="w-full border p-2 rounded mt-1"
        />
      </div>

      <div>
        <label>Image URL</label>
        <input
          type="url"
          name="image"
          required
          className="w-full border p-2 rounded mt-1"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label>Floor</label>
          <input
            type="number"
            name="floor"
            required
            className="w-full border p-2 rounded mt-1"
          />
        </div>

        <div>
          <label>Capacity</label>
          <input
            type="number"
            name="capacity"
            required
            className="w-full border p-2 rounded mt-1"
          />
        </div>

        <div>
          <label>Hourly Rate</label>
          <input
            type="number"
            name="price"
            required
            className="w-full border p-2 rounded mt-1"
          />
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Amenities</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {amenitiesList.map((item) => (
            <label key={item} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={amenities.includes(item)}
                onChange={() => handleAmenity(item)}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          Add Room
        </button>

        <button
          type="reset"
          onClick={() => setAmenities([])}
          className="border px-5 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default AddNewRoomForm;

// "use client";

// import { useState } from "react";

// const amenitiesList = [
//   "Wi-Fi",
//   "Projector",
//   "Whiteboard",
//   "Air Conditioning",
//   "Power Outlet",
//   "Quiet Zone",
// ];

// const AddNewRoomForm = () => {

//     const onSubmit = async (e) =>{
//         e.preventDefault();
//         const formData = new FormData(e.target);
//         const addroom = Object.fromEntries(formData.entries());
//         console.log(addroom);
//         const res = await fetch("http://localhost:5000/add-room", {
//         method: "POST",
//        headers: {
//       "Content-Type": "application/json",
//   },
//     body: JSON.stringify(addroom),
// })
//         const data = await res.json();
//         console.log(data);
        
//     }

//   const [amenities, setAmenities] = useState([]);

//   const handleAmenity = (item) => {
//     if (amenities.includes(item)) {
//       setAmenities(amenities.filter((a) => a !== item));
//     } else {
//       setAmenities([...amenities, item]);
//     }
//   };

//   return (
//     <form
//       onSubmit={onSubmit}
//       className="max-w-3xl mx-auto p-6 border rounded-lg space-y-5"
//     >
//       <h2 className="text-2xl font-bold">Add New Room</h2>

//       <div>
//         <label>Room Name</label>
//         <input
//           type="text"
//           name="name"
//           required
//           className="w-full border p-2 rounded mt-1"
//         />
//       </div>

//       <div>
//         <label>Description</label>
//         <textarea
//           name="description"
//           rows="4"
//           required
//           className="w-full border p-2 rounded mt-1"
//         ></textarea>
//       </div>

//       <div>
//         <label>Image URL</label>
//         <input
//           type="url"
//           name="image"
//           required
//           className="w-full border p-2 rounded mt-1"
//         />
//       </div>

//       <div className="grid md:grid-cols-3 gap-4">
//         <div>
//           <label>Floor</label>
//           <input
//             type="number"
//             name="floor"
//             required
//             className="w-full border p-2 rounded mt-1"
//           />
//         </div>

//         <div>
//           <label>Capacity</label>
//           <input
//             type="number"
//             name="capacity"
//             required
//             className="w-full border p-2 rounded mt-1"
//           />
//         </div>

//         <div>
//           <label>Hourly Rate</label>
//           <input
//             type="number"
//             name="price"
//             required
//             className="w-full border p-2 rounded mt-1"
//           />
//         </div>
//       </div>

//       <div>
//         <h3 className="font-semibold mb-2">Amenities</h3>

//         <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
//           {amenitiesList.map((item) => (
//             <label key={item} className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 checked={amenities.includes(item)}
//                 onChange={() => handleAmenity(item)}
//               />
//               {item}
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="flex gap-3">
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-5 py-2 rounded"
//         >
//           Add Room
//         </button>

//         <button
//           type="reset"
//           onClick={() => setAmenities([])}
//           className="border px-5 py-2 rounded"
//         >
//           Reset
//         </button>
//       </div>
//     </form>
//   );
// };

// export default AddNewRoomForm;