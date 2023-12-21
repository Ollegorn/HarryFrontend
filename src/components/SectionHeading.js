function SectionHeading({ children }) {
  return (
    <>
      <div className="section-heading">
        <h2>{children}</h2>
        <div className="divider"></div>
      </div>
    </>
  );
}

export default SectionHeading;
