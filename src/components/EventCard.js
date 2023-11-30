import "./EventCard.css";
import CustomBadge from "./CustomBadge";
import CustomButton from "./CustomButton";

function Eventcard({
  title = "Event Title",
  date = "From: Month Day - To: Month Day",
  description = "Event Description",
  primaryAction = true,
  secondaryAction = true,
  onClickPrimary,
  onClickSecondary,
  primaryLabel = "Primary Action",
  secondaryLabel = "Secondary Action",
  imageID = "01",
  status = "current",
  featured = true,
  teamType = "duo",
  tournamentType = "Round Robin",
}) {
  return (
    <>
      <div className="event-card">
        <div className="event-card__content">
          <div className="event-card__content__text">
            <div className="badge-stack">
              <CustomBadge type={status} style="filled">
                {status === "past"
                  ? "Past Event"
                  : status === "upcoming"
                  ? "Upcoming Event"
                  : "Current Event"}
              </CustomBadge>
              {featured && (
                <CustomBadge type={status} style="outlined">
                  Featured
                </CustomBadge>
              )}
              <CustomBadge type={status} style="outlined">
                {teamType === "duo" ? "Duo" : "Solo"}
              </CustomBadge>
              <CustomBadge type={status} style="outlined">
                {tournamentType}
              </CustomBadge>
            </div>
            <h4>{title}</h4>
            <p className="date">{date}</p>
            <p className="description">{description}</p>
          </div>
          {primaryAction | secondaryAction && (
            <div className="event-card__content__actions">
              {secondaryAction && (
                <CustomButton
                  type={"outlined"}
                  size={"medium"}
                  onClick={onClickSecondary}
                >
                  {secondaryLabel}
                </CustomButton>
              )}
              {primaryAction && (
                <CustomButton
                  type={"default"}
                  size={"medium"}
                  onClick={onClickPrimary}
                >
                  {primaryLabel}
                </CustomButton>
              )}
            </div>
          )}
        </div>
        <div className="event-card__image">
          <div className={`event-card__image-${imageID}`}></div>
        </div>
      </div>
    </>
  );
}

export default Eventcard;
