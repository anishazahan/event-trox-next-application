import { getEventById } from "@/app/Backend/Queries/queries";
import EventDetails from "@/app/Components/Details/EventDetails";
import EventVenue from "@/app/Components/Details/EventVenue";
import HeroSection from "@/app/Components/Details/HeroSection";

const EventDetailsPage = async ({ params: { id } }) => {
  const eventInfo = await getEventById(id);

  return (
    <>
      <HeroSection eventInfo={eventInfo} />
      <section class="container mx-auto">
        <div class="grid grid-cols-5 gap-12 my-12">
          <EventDetails details={eventInfo?.details} swags={eventInfo?.swags} />
          <EventVenue location={eventInfo?.location} />
        </div>
      </section>
    </>
  );
};

export default EventDetailsPage;
