import "./ImageCard.css";
function ImageCard({
  title = "Event Title",
  date = "From: Month Day - To: Month Day",
  imageID = "01",
}) {
  return (
    <>
      <div className={`image-card event-image-${imageID}`}>
        <div className="image-card__info">
          <p className="title title--low-emphasis image-title">{title}</p>
          <p className="p--low-emphasis image-subtitle">{date}</p>
        </div>
      </div>
    </>
  );
}

export default ImageCard;
