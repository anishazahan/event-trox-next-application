import EventList from "./Components/Landing/EventList";
import Footer from "./Components/Shared/Footer";

export default function Home() {
  return (
    <section className="container mx-auto">
      {/* <Header /> */}
      <EventList />
      <Footer />
    </section>
  );
}
