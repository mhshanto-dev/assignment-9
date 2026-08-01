import RoomsCard from "@/components/RoomsCard";


const roomsPage = async () => {
    const res = await fetch("http://localhost:5000/rooms");
    const rooms = await res.json();
    console.log(rooms);
    return (
        <div>
            <h1>All Rooms </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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