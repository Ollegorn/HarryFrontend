import TextCard from "./TextCard";

function FeaturedSection() {
  return (
    <>
      <article>
        <TextCard
          heading={"Become A Master Duellist"}
          body={
            "Engage in spellbinding tournaments, rise through the ranks, and become part of a magical community."
          }
          icon={"wand"}
          reverse
        />

        <TextCard
          heading={"Organize Your Own Tournaments"}
          body={
            "With intuitive tournament management, real-time leaderboards, and a vibrant community, immerse yourself in the spellbinding world of competitive magic."
          }
          icon={"tournament"}
        />
      </article>
    </>
  );
}

export default FeaturedSection;
