import "./HighlightSection.css";

function HighlightSection() {
  return (
    <section className="highlight-section">
      <div className="highlight-section__title">
        <h3>Highlights</h3>
      </div>
      <div className="highlight-section__video-gallery">
        <div className="row">
          <div className="tile">
            <iframe
              className="video"
              src="https://www.youtube.com/embed/_nekgDAdXAg?si=R4FileJaeFaz0DzH"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="tile">
              <iframe
                className="video"
                src="https://www.youtube.com/embed/wMZzXYJGIDA?si=4ge0_DfOZhtGZMKS"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="tile">
              <iframe
                className="video"
                src="https://www.youtube.com/embed/2Q50fsKhMgA?si=gqAewtnepiiYaEej"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="tile">
            <iframe
              className="video"
              src="https://www.youtube.com/embed/sDHYpxP5Us0?si=5YqwdsPct9MDQzOi"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="row">
          <div className="tile">
            <iframe
              className="video"
              src="https://www.youtube.com/embed/_nekgDAdXAg?si=R4FileJaeFaz0DzH"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HighlightSection;
