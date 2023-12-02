import "./SegmentedRulesCard.css";

function SegmentedRulesCard() {
  return (
    <div className="segmented-rules-card">
      <div className="rule-card">
        <div className="rule-card__text">
          <h5>Step 1</h5>
          <p>Sign Up – Create your magical profile.</p>
        </div>
        <div className="rule-card__icon icon-wizard-hat"></div>
      </div>
      <div className="divider"></div>
      <div className="rule-card">
        <div className="rule-card__text">
          <h5>Step 2</h5>
          <p>Choose a Tournament – Pick from a variety of dueling events.</p>
        </div>
        <div className="rule-card__icon icon-tournament-2"></div>
      </div>
      <div className="divider"></div>
      <div className="rule-card">
        <div className="rule-card__text">
          <h5>Step 3</h5>
          <p>Compete & Win – Duel with others and climb the leaderboard.</p>
        </div>
        <div className="rule-card__icon icon-reward"></div>
      </div>
    </div>
  );
}

export default SegmentedRulesCard;
