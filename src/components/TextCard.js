import "./TextCard.css";
function TextCard({ heading, body, icon, reverse = false }) {
  return (
    <>
      <div className={reverse ? `text-card reverse` : `text-card`}>
        <div className="text-card__content">
          <h3>{heading}</h3>
          <p className="p--high-emphasis">{body}</p>
        </div>
        <div className="divider"></div>
        <div className={`icon icon--big icon-${icon}`}></div>
      </div>
    </>
  );
}

export default TextCard;
