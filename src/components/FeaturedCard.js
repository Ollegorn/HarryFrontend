import "./FeaturedCard.css";
function FeaturedCard() {
  return (
    <>
      <section className="featured">
        <div className="featured-card">
          <div className="featured-card__overlay">
            <div className="featured-card__Image border-gradient border-gradient--01 border-gradient--only-right">
              <div className="icon--big icon-wand"></div>
            </div>
            <div className="featured-card__content">
              <div className="featured-card__content__text">
                <h4>Become A Master Duellist</h4>
                <p>
                  Engage in spellbinding tournaments, rise through the ranks,
                  and become part of a magical community.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="featured-card">
          <div className="featured-card__overlay">
            <div className="featured-card__content">
              <div className="featured-card__content__text">
                <h4>Organize Your Own Tournaments</h4>
                <p>
                  MasterOfMagic offers a seamless experience in organizing and
                  participating in duelling leagues. With intuitive tournament
                  management, real-time leaderboards, and a vibrant community,
                  immerse yourself in the spellbinding world of competitive
                  magic.
                </p>
              </div>
            </div>
            <div className="featured-card__Image border-gradient border-gradient--01 border-gradient--only-left">
              <div className="icon--big icon-tournament"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedCard;
