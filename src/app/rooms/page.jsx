import RoomsCard from "@/components/RoomsCard";


const roomsPage = async () => {
    const res = await fetch("http://localhost:5000/rooms");
    const rooms = await res.json();
    console.log(rooms);
    return (
        <div>
            <h1>All Rooms </h1>
            <div>
                {
                    rooms.map((room) => (
                        <div key={room._id}>
                            <RoomsCard room={room}></RoomsCard>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default roomsPage;