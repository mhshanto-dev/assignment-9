"use client";

import { useState } from "react";
import { Envelope } from "@gravity-ui/icons";
import { Button, Modal, Surface } from "@heroui/react";
import Link from "next/link";

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

    const res = await fetch("http://localhost:5000/add-room", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addroom),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <Modal>
      <div className="flex justify-end mx-auto">
        
        <Button className="rounded-none mt-5 mb-3" variant="outline" href={`/edit-room/${id}`}>Edit</Button>
      </div>

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
                  className="max-w-3xl mx-auto p-6 border rounded-lg space-y-5"
                >
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
                      Add Room
                    </button>

                    <button
                      type="button"
                      onClick={() => setAmenities([])}
                      className="border px-5 py-2 rounded"
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>

            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>

              <Button slot="close">Close</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}