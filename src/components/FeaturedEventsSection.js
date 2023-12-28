import "./FeaturedEventsSection.css";
import EventCard from "./EventCard";
import SectionHeading from "./SectionHeading";

function FeaturedEventsSection() {
  return (
    <section>
      <SectionHeading>Join Today's Magical Battles</SectionHeading>
      <div className="featured-events">
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
