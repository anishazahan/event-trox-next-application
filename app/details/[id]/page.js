import EventDetails from "@/app/Components/Details/EventDetails";
import EventVenue from "@/app/Components/Details/EventVenue";
import HeroSection from "@/app/Components/Details/HeroSection";

const page = () => {
  return (
    <>
      <HeroSection />
      <section class="container mx-auto">
        <div class="grid grid-cols-5 gap-12 my-12 mx-auto">
          <EventDetails />
          <EventVenue />
        </div>
      </section>
    </>
  );
};

export default page;
