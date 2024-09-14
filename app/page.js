import EventList from "./Components/Landing/EventList";
import Header from "./Components/Landing/Header";

export default function Home() {
  return (
    <section className="container mx-auto">
      <Header />
      <EventList />
    </section>
  );
}
