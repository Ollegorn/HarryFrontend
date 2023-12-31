function YTVideo({ url }) {
  return (
    <>
      <div className="tile">
        <iframe
          className="video"
          src={url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}

export default YTVideo;
