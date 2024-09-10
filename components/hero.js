import Image from "next/image";

const Hero = () => {
return (
<div className="container">
      <div className="row">
        <div className="col-12">
          <Image
            src="/the-office.jpg"
            alt="logo"
            width={100}
            height={75}
            className="img-fluid rounded"
          />
          <div className={styles.hero} id="hero">
            <b>Employee of the Month</b>
            <p>
              Recognize your peers. Vote for your favourites. Celebrate the
              winners.
            </p>
            <div className="centered" style="margin-top: 25%;">
              <a
                href="nomination.html"
                className="btn btn-primary btn-lg rounded"
                tabindex="-1"
                role="button"
                style="font-weight: 600;"
              >
                Nominate
              </a>
              <a
                href="voting.html"
                className="btn btn-light btn-lg rounded"
                tabindex="-1"
                role="button"
                style="font-weight: 600;"
              >
                Vote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
);
};

export default Hero;