import "./EventCard.css";
import CustomBadge from "./CustomBadge";
import CustomButton from "./CustomButton";
import ImageCard from "./ImageCard";

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
  teamType = "solo",
  tournamentType = "Round Robin",
}) {
  return (
    <>
      <div className="event-card">
        <ImageCard title={title} date={date} imageID={imageID} />

        <div className="event-card__content">
          <div className="badge-stack">
            <CustomBadge>
              {status === "past"
                ? "Past Event"
                : status === "upcoming"
                ? "Upcoming Event"
                : "Current Event"}
            </CustomBadge>
            {featured && <CustomBadge>Featured</CustomBadge>}
            <CustomBadge>{teamType === "duo" ? "Duo" : "Solo"}</CustomBadge>
            <CustomBadge>{tournamentType}</CustomBadge>
          </div>

          <p className="p--low-emphasis event-description">{description}</p>

          {primaryAction | secondaryAction && (
            <div className="button-stack">
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
      </div>
    </>
  );
}

export default Eventcard;
