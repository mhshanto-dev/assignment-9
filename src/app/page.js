import Banner from "@/components/Banner";
import FeaturedPage from "@/components/Featured";
import Testimonials from "@/components/Testimonials";

export default async function Home() {
  let rooms = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`, {
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) rooms = data;
    }
  } catch (error) {
    console.error("Featured fetch error:", error.message);
  }

  return (
    <div>
      <Banner />
      <FeaturedPage rooms={rooms} />
      <Testimonials></Testimonials>
    </div>
  );
}

