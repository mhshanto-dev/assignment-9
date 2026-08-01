
"use client";

import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export function DeleteAlert({ room }) {
  const router = useRouter();

  const { _id, name } = room;

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:5000/rooms/${_id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      console.log(data);

      if (data.deletedCount > 0) {
        alert("Room deleted successfully!");

        router.replace("/rooms");
        router.refresh();
      } else {
        alert("Delete failed!");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <AlertDialog>
      <Button
        className="rounded-none text-red-500"
        variant="outline"
      >
        <TrashBin />
        Delete
      </Button>

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
                This will permanently delete{" "}
                <strong>{name}</strong>.
                <br />
                This action cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>

              <Button
                slot="close"
                variant="danger"
                onClick={handleDelete}
              >
                Confirm Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}

// "use client";

// import { TrashBin } from "@gravity-ui/icons";
// import {AlertDialog, Button} from "@heroui/react";
// import { useRouter } from "next/navigation";

// export function DeleteAlert({room}) {
//   const {_id,name} = room;
//   const handleDelete = async () => {
//     const res = await fetch(`http://localhost:5000/rooms/${room._id}`, {
//       method: "DELETE", headers: {
//         "Content-Type": "application/json",
//       }
//     })
//     const data = await res.json();
//     if (data.deletedCount > 0) {
//       router.push("/rooms");
//       router.refresh();
//     }
//     console.log(data);
//   };
//   return (
//     <AlertDialog>
//       <Button className= ' rounded-none text-red-500' variant="outline"><TrashBin></TrashBin> Delete</Button>
//       <AlertDialog.Backdrop>
//         <AlertDialog.Container>
//           <AlertDialog.Dialog className="sm:max-w-[400px]">
//             <AlertDialog.CloseTrigger />
//             <AlertDialog.Header>
//               <AlertDialog.Icon status="danger" />
//               <AlertDialog.Heading>Delete permanently?</AlertDialog.Heading>
//             </AlertDialog.Header>
//             <AlertDialog.Body>
//               <p>
//                 This will permanently delete <strong>Your Awesome Rooms</strong> and all of its
//                 data. This action cannot be undone.
//               </p>
//             </AlertDialog.Body>
//             <AlertDialog.Footer>
//               <Button slot="close" variant="tertiary">
//                 Cancel
//               </Button>
//               <Button onClick={handleDelete} slot="close" variant="danger">
//                 Confirm Delete 
//               </Button>
//             </AlertDialog.Footer>
//           </AlertDialog.Dialog>
//         </AlertDialog.Container>
//       </AlertDialog.Backdrop>
//     </AlertDialog>
//   );
// }