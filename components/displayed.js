import Admin from "./admin";
import Dashboard from "./dashboard";
import Home from "./home";
import Nomination from "./nomination";
import Nominees from "./nominees";
import Voting from "./voting";

const Displayed = ({selectedPage},{addnominee}) => {

    if (selectedPage == "home")
        return <Home />;
    else if (selectedPage == "Nomination")
        return <Nomination addnominee={addnominee} />;
    else if (selectedPage == "VotingPlatform")
        return <Voting />;
    else if (selectedPage == "Nominees")
        return <Nominees />;
    else if (selectedPage == "Dashboard")
        return <Dashboard />;
    else if (selectedPage == "Admin")
        return <Admin />;

}

export default Displayed;