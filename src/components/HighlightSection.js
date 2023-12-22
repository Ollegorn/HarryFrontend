import { useScreenSize, breakPoint } from "./useScreenSize";
import SectionHeading from "./SectionHeading";
import YTVideo from "./YTVideo";

function HighlightSection() {
  const screenSize = useScreenSize();
  return (
    <section>
      <SectionHeading>Highlights</SectionHeading>
      {
        /**Top 9 highlights */
        screenSize.width > breakPoint.desktopLarge ? (
          <article>
            <div className="row">
              <YTVideo
                url={
                  "https://www.youtube.com/embed/_nekgDAdXAg?si=R4FileJaeFaz0DzH"
                }
              />

              <YTVideo
                url={
                  "https://www.youtube.com/embed/wMZzXYJGIDA?si=4ge0_DfOZhtGZMKS"
                }
              />
              <YTVideo
                url={
                  "https://www.youtube.com/embed/wMZzXYJGIDA?si=4ge0_DfOZhtGZMKS"
                }
              />
            </div>

            <div className="row">
              <YTVideo
                url={
                  "https://www.youtube.com/embed/2Q50fsKhMgA?si=gqAewtnepiiYaEej"
                }
              />

              <YTVideo
                url={
                  "https://www.youtube.com/embed/_nekgDAdXAg?si=R4FileJaeFaz0DzH"
                }
              />

              <YTVideo
                url={
                  "https://www.youtube.com/embed/2Q50fsKhMgA?si=gqAewtnepiiYaEej"
                }
              />
            </div>

            <div className="row">
              <YTVideo
                url={
                  "https://www.youtube.com/embed/sDHYpxP5Us0?si=5YqwdsPct9MDQzOi"
                }
              />

              <YTVideo
                url={
                  "https://www.youtube.com/embed/sDHYpxP5Us0?si=5YqwdsPct9MDQzOi"
                }
              />
              <YTVideo
                url={
                  "https://www.youtube.com/embed/sDHYpxP5Us0?si=5YqwdsPct9MDQzOi"
                }
              />
            </div>
          </article>
        ) : /**Top 7 highlights */
        screenSize.width > breakPoint.desktop ? (
          <article>
            <div className="row">
              <YTVideo
                url={
                  "https://www.youtube.com/embed/_nekgDAdXAg?si=R4FileJaeFaz0DzH"
                }
              />

              <YTVideo
                url={
                  "https://www.youtube.com/embed/wMZzXYJGIDA?si=4ge0_DfOZhtGZMKS"
                }
              />
            </div>

            <div className="row">
              <YTVideo
                url={
                  "https://www.youtube.com/embed/2Q50fsKhMgA?si=gqAewtnepiiYaEej"
                }
              />

              <YTVideo
                url={
                  "https://www.youtube.com/embed/_nekgDAdXAg?si=R4FileJaeFaz0DzH"
                }
              />

              <YTVideo
                url={
                  "https://www.youtube.com/embed/2Q50fsKhMgA?si=gqAewtnepiiYaEej"
                }
              />
            </div>

            <div className="row">
              <YTVideo
                url={
                  "https://www.youtube.com/embed/sDHYpxP5Us0?si=5YqwdsPct9MDQzOi"
                }
              />

              <YTVideo
                url={
                  "https://www.youtube.com/embed/sDHYpxP5Us0?si=5YqwdsPct9MDQzOi"
                }
              />
            </div>
          </article>
        ) : screenSize.width > breakPoint.tablet ? (
          /*space for top 5 highlights */
          <article>
            <div className="row">
              <YTVideo
                url={
                  "https://www.youtube.com/embed/_nekgDAdXAg?si=R4FileJaeFaz0DzH"
                }
              />

              <YTVideo
                url={
                  "https://www.youtube.com/embed/wMZzXYJGIDA?si=4ge0_DfOZhtGZMKS"
                }
              />
            </div>
            <div className="row">
              <YTVideo
                url={
                  "https://www.youtube.com/embed/2Q50fsKhMgA?si=gqAewtnepiiYaEej"
                }
              />
            </div>
            <div className="row">
              <YTVideo
                url={
                  "https://www.youtube.com/embed/sDHYpxP5Us0?si=5YqwdsPct9MDQzOi"
                }
              />

              <YTVideo
                url={
                  "https://www.youtube.com/embed/_nekgDAdXAg?si=R4FileJaeFaz0DzH"
                }
              />
            </div>
          </article>
        ) : (
          /*space for top 3 highlights */
          <article>
            <div className="col">
              <YTVideo
                url={
                  "https://www.youtube.com/embed/_nekgDAdXAg?si=R4FileJaeFaz0DzH"
                }
              />

              <YTVideo
                url={
                  "https://www.youtube.com/embed/wMZzXYJGIDA?si=4ge0_DfOZhtGZMKS"
                }
              />

              <YTVideo
                url={
                  "https://www.youtube.com/embed/sDHYpxP5Us0?si=5YqwdsPct9MDQzOi"
                }
              />
            </div>
          </article>
        )
      }
    </section>
  );
}

export default HighlightSection;
