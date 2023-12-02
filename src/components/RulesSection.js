import "./RulesSection.css";
import SegmentedRulesCard from "./SegmentedRulesCard";

function RulesSection() {
  return (
    <section className="rules-section">
      <div className="rules-section__title">
        <h3>How It Works</h3>
      </div>
      <SegmentedRulesCard />
    </section>
  );
}

export default RulesSection;
