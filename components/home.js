import styles from "./home.module.css";
import Image from "next/image";
import Nomination from "./nomination";

const Home = ({setPage}) => {
  // var element = document.getElementById("hero");
  // element.className.add("centered img-fluid");
return (
<main>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Image
            src="/the-office.jpg"
            alt="hero"
            width={100000}
            height={100}
            className="img-fluid rounded"
          />
          <div className="centered img-fluid" id="hero">
            <span className="carousel-caption">
            <h1 style={{'font-size': 65}}><b>Employee of the Month</b></h1>
            <p style={{'font-size': 23}}>
              Recognize your peers. Vote for your favourites. Celebrate the
              winners.
            </p>
            <div className="centered" style={{'padding-bottom': 150}}> 
              <a
                href="#"
                className="btn btn-primary btn-lg rounded"
                tabindex="-1"
                role="button"
                onClick={() => setPage("Nomination")}
                >
                Nominate
              </a>
              <a
                href="#"
                className="btn btn-light btn-lg rounded"
                tabindex="-1"
                role="button"
                onClick={() => setPage("VotingPlatform")}
                >
                Vote
              </a>
            </div>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h1 style={{'font-size': 40}}>
            <b>Recent Winners:</b>
          </h1>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="card-deck" style={{'margin-bottom': 30}}>
        <div className="card">
          <Image src="/jim.jpg"             
            width={10000}
            height={450} 
            className="card-img-top" alt="..." 
            />
          <h5 className="card-title">Jim Halpert</h5>
          <p className="card-text">Salesman</p>
          <p className="card-text">May 2024</p>
        </div>
        <div className="card">
          <Image src="/jim.jpg"             
            width={10000}
            height={450} 
            className="card-img-top" alt="..." 
            />
          <h5 className="card-title">Jim Halpert</h5>
          <p className="card-text">Salesman</p>
          <p className="card-text">June 2024</p>
        </div>
        <div className="card">
          <Image
            src="/jim.jpg"
            width={10000}
            height={450} 
            className="card-img-top"
            alt="..."
          />
          <h5 className="card-title">Jim Halpert</h5>
          <p className="card-text">Salesman</p>
          <p className="card-text">July 2024</p>
        </div>
      </div>
    </div>
  </main>
  );
};

export default Home;
