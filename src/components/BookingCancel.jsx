"use client";

import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function BookingCancelAlert({ bookingId }) {
//   const router = useRouter();

//   const { _id, name } = room;

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:5000/bookings/${bookingId}`, {
        method: "DELETE", headers: {
          "Content-Type": "application/json",
        }
      });

      const data = await res.json();
      console.log(data);

      if (data.deletedCount > 0) {
        toast.success("Booking cancel successfully!");
        window.location.reload();
        router.replace("/rooms");
        router.refresh();
      } else {
        toast.error("Delete failed!");
      }
    } catch (error) {
    //   toast.error("Something went wrong!");
    }
  };

  return (
    <AlertDialog>
      <Button className={'rounded-none border-red-500 text-red-500'} variant="outline" > <TrashBin/> Cancel Booking</Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                This will permanently Cancel{" "}
                <strong>{name}</strong>.
                <br />
                This action cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button
                slot="close"
                variant="danger"
                onClick={handleDelete}
              >
                Confirm Cancel
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}

