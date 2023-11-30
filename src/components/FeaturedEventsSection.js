import "./FeaturedEventsSection.css";
import EventCard from "./EventCard";

function FeaturedEventsSection() {
  return (
    <section className="featured-events">
      <div className="featured-events__header">
        <h2>Join Today’s Magical Battles</h2>
        <p>
          Participate in our exclusive Solo Tournaments or team up for the Duo
          Leagues. The magic awaits!
        </p>
      </div>
      <div className="featured-events__events">
        <EventCard
          title="Snatch Duo Tournament"
          date="November 13th - December 3rd"
          description="In this event, duellers team up in pairs to showcase their magical prowess. Navigate through challenging rounds, strategize with your partner, and aim for the win to receive special rewards."
          primaryAction={false}
          secondaryAction={true}
          primaryLabel=""
          secondaryLabel="Learn More"
          imageID="01"
          status="current"
          featured={true}
          teamType="duo"
          tournamentType="Round Robin"
        />
        <EventCard
          title="Snatch Solo Tournament"
          date="December 11th - December 31st"
          description="This tournament challenges individual wizards and witches to demonstrate their solo magical skills in a series of intense, one-on-one duels."
          primaryAction={true}
          secondaryAction={true}
          primaryLabel="Register Now"
          secondaryLabel="Learn More"
          imageID="02"
          status="upcoming"
          featured={true}
          teamType="solo"
          tournamentType="Knockout"
        />
      </div>
    </section>
  );
}

export default FeaturedEventsSection;
