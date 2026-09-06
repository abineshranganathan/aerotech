import "../styles/pages/_coming-soon.scss";

const ComingSoon = () => {
  return (
    <main className="coming-soon">
      <section className="coming-soon__content">

        <div className="construction">
          <div className="construction__top-line construction__top-line--1" />
          <div className="construction__top-line construction__top-line--2" />

          <div className="construction__title">
            COMING SOON
          </div>

          <div className="construction__subtitle">
            UNDER CONSTRUCTION
          </div>

          <div className="construction__bottom-line construction__bottom-line--1" />
          <div className="construction__bottom-line construction__bottom-line--2" />
        </div>

        <p className="coming-soon__description">
          Our website is under construction, but we are ready to go! We are
          <br />
          preparing something amazing and exciting for you. Special surprise
          for our subscribers only
        </p>

      </section>
    </main>
  );
};

export default ComingSoon;