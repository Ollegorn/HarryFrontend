import SectionHeading from "./SectionHeading";
import TextCard from "./TextCard";

function RulesSection() {
  return (
    <section>
      <SectionHeading>How It Works</SectionHeading>
      <article>
        <TextCard
          heading={"Step 1"}
          body={"Sign Up – Create your magical profile."}
          icon={"wizard-hat"}
          reverse
        />

        <TextCard
          heading={"Step 2"}
          body={"Choose a Tournament – Pick from a variety of dueling events."}
          icon={"tournament"}
        />

        <TextCard
          heading={"Step 3"}
          body={"Compete & Win – Duel with others and climb the leaderboard"}
          icon={"reward"}
          reverse
        />
      </article>
    </section>
  );
}

export default RulesSection;
