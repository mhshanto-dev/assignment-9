"use client";

import { useState } from "react";
import { Envelope } from "@gravity-ui/icons";
import { Button, Modal, Surface } from "@heroui/react";
import { Pencil } from "@gravity-ui/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

const amenitiesList = [
  "WiFi",
  "Air Conditioning",
  "Whiteboard",
  "Projector",
  "Parking",
  "Coffee",
];

export function EditModalForm({ id, room }) {
  const [amenities, setAmenities] = useState([]);
  const router = useRouter();
   const [open, setOpen] = useState(false);
  const {
  image,
  name,
  description,
  floor,
  capacity,
  price,
  _id,
  ownerName,
  ownerEmail,
  ownerImage,
} = room;


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

    addroom.amenities = amenities;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addroom),
    });
    const data = await res.json();

if (data.modifiedCount > 0) {
  setOpen(false);    
  router.refresh();
}
    
    console.log(data);
  };

  return (
    <Modal>
        <Button
  className="rounded-none"
  variant="outline"
  href={`/edit-room/${id}`}
>
  <Pencil className="w-4 h-4 mr-2" />
  Edit
</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>

              <Modal.Heading>Edit Room</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form
                  onSubmit={onSubmit}
                  className="max-w-2xl mx-auto p-6 border rounded-lg space-y-4"
                >
                  <div>
                    <label >Room Name</label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={name}
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
                      defaultValue={description}
                      className="w-full border p-2 rounded mt-1"
                    />
                  </div>

                  <div>
                    <label>Image URL</label>
                    <input
                      type="url"
                      name="image"
                      required
                      defaultValue={image}
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
                        defaultValue={floor}
                        className="w-full border p-2 rounded mt-1"
                      />
                    </div>

                    <div>
                      <label>Capacity</label>
                      <input
                        type="number"
                        name="capacity"
                        required
                        defaultValue={capacity}
                        className="w-full border p-2 rounded mt-1"
                      />
                    </div>

                    <div>
                      <label>Hourly Rate</label>
                      <input
                        type="number"
                        name="price"
                        required
                        defaultValue={price}
                        className="w-full border p-2 rounded mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Amenities</h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {amenitiesList.map((item) => (
                        <label
                          key={item}
                          className="flex items-center gap-2"
                        >
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
                      Save
                    </button>

                    <button
                      type="button"
                      onClick={() => setAmenities([])}
                      className="border px-5 py-2 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>

            <Modal.Footer>
              <Button slot="close">Close</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}