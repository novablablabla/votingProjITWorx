import styles from "./banner.module.css";
import Image from "next/image";


const Banner = ({setPage}) => {
  // let pageName = "home";
  // function changeActive  (pageName)  {
  //   console.log(pageName);
  //   switch (pageName) {
  //     case "home":
  //       () => setPage("home");
  //       return(pageName = "home");
  //       // var element = document.getElementById("home");
  //       // element.classList.add("active");
  //       // break;
  //     case "Nomination":
  //       () => setPage("Nomination");
  //       return(pageName);
  //       // var element = document.getElementById("Nomination");
  //       // element.classList.add("active");
  //       // break;
  //     case "VotingPlatform":
  //       () => setPage("VotingPlatform");
  //       return(pageName);
  //       // var element = document.getElementById("VotingPlatform");
  //       // element.classList.add("active");
  //       // break;
  //     case "Nominees":
  //       () => setPage("Nominees");
  //       return(pageName);
  //       // var element = document.getElementById("Nominees");
  //       // element.classList.add("active");
  //       // break;
  //     case "Dashboard":
  //       () => setPage("Dashboard");
  //       return(pageName);
  //       // var element = document.getElementById("Dashboard");
  //       // element.classList.add("active");
  //       // break;
  //     case "Admin":
  //       () => setPage("Admin");
  //       return(pageName);
  //       // var element = document.getElementById("Admin");
  //       // element.classList.add("active");
  //       // break;
  //     default:
  //       break;
  //   };
  // };
  return (
    <>
      <header className="border-bottom mb-3">
        <div className="container">
          <div className="row">
            <div className="col">
                <div className={styles.iconcol}>
                    <Image src="/image.png" alt="logo" width={30} height={24}/>
                    <b>Acme Corp</b>
                </div>
            </div>
            <div className="col-8">
              <nav className="navbar navbar-expand-lg navbar-light bg-white">
                {/* style="padding-left: 0; padding-right: 1pt;"> */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  {/* <a className="navbar-brand" href="#">
                    <Image
                      src="/image.png"
                      alt="Logo"
                      width={30}
                      height={24}
                      class="d-inline-block align-text-top"
                    />
                    <b>Acme Corp</b>
                  </a> */}
                  <ul className="navbar-nav" style={{ fontWeight: "bold" }}>
                    <li className="nav-item" id="home" onClick={() => setPage("home")}>
                      <a className="nav-link" href="#1">
                        Home
                      </a>
                    </li>
                    <li
                      className="nav-item"
                      id="Nomination"
                      onClick={() => setPage("Nomination")}
                    >
                      <a className="nav-link" href="#2">
                        Nomination
                      </a>
                    </li>
                    <li
                      className="nav-item"
                      id="VotingPlatform"
                      onClick={() => setPage("VotingPlatform")}
                    >
                      <a className="nav-link" href="#">
                        VotingPlatform
                      </a>
                    </li>
                    <li
                      className="nav-item"
                      id="Nominees"
                      onClick={() => setPage("Nominees")}
                    >
                      <a className="nav-link" href="#">
                        Nominees
                      </a>
                    </li>
                    <li
                      className="nav-item"
                      id="Dashboard"
                      onClick={() => setPage("Dashboard")}
                    >
                      <a className="nav-link" href="#">
                        Dashboard
                      </a>
                    </li>
                    <li className="nav-item" id="Admin" onClick={() => setPage("Admin")}>
                      <a className="nav-link" href="#">
                        Admin
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            {/* <div className="col-1">
              <div className={styles.navbtnstyle}>
                <div className="input group">
                  <button className="btn btn-secondary rounded" type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="25"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                  </button>
                </div>
              </div>
            </div> */}
            <div className="col-">
              <div className={styles.navbtnstyle}>
                <button type="button" className="btn btn-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="25"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Banner;
