import Image from "next/image";
import { useState } from "react";
import Nomination from "./nomination";

const nlistArray = [
{
    id: 1,
    name: "Jim Halpert",
    position: "Salesman",
    nEmail: "james@acme.com",
    nominationReason: "James Duncan Halpert is a fictional character in the U.S. version of the television sitcom The Office, portrayed by John Krasinski. He is introduced as a sales representative at the Scranton branch of paper distribution company Dunder Mifflin, before temporarily transferring to the Stamford branch in the third season.",
    nominatedBy: "Micheal",
    byEmail: "Micheal@acme.com",
    numOfVotes: 0,
    pfp: <Image src="/jim.jpg" alt="jim" width={100} height={50} class="img-fluid rounded" 
    style={{width: '50%', 'margin-left': '50%'}} />
},
{   
    id: 2,
    name: "Dwight Schrute",
    position: "Salesman",
    nEmail: "dwight@acme.com",
    nominationReason: "James Duncan Halpert is a fictional character in the U.S. version of the television sitcom The Office, portrayed by John Krasinski. He is introduced as a sales representative at the Scranton branch of paper distribution company Dunder Mifflin, before temporarily transferring to the Stamford branch in the third season.",
    nominatedBy: "Micheal",
    byEmail: "Micheal@acme.com",
    numOfVotes: 0,
    pfp: <Image src="/dwight.jpeg" alt="michael" width={100} height={50} class="rounded img-fluid"
            style={{width: 100}} />
},
{
    id: 3,
    name: "Michael Schrute",
    position: "boss",
    nEmail: "dwight@acme.com",
    nominationReason: "James Duncan Halpert is a fictional character in the U.S. version of the television sitcom The Office, portrayed by John Krasinski. He is introduced as a sales representative at the Scranton branch of paper distribution company Dunder Mifflin, before temporarily transferring to the Stamford branch in the third season.",
    nominatedBy: "Michael",
    byEmail: "Michael@acme.com",
    numOfVotes: 0,
    pfp: <Image src="/michael.png" alt="michael" width={100} height={50} class="rounded img-fluid"
    style={{width: 100}} />
},
];

const NomineeList = () => {
    return (
    <>
    {nlistArray.map((n) => (
    <tr key={n.id}>{<>
        <div class="row mt-5" id="nom1">
            <div class="col-sm" style={{'max-width': 'fit-content'}}>
                {n.pfp}
            </div>
            <div class="col-sm" style={{'padding-top': '40px'}}>
                {n.name} <br/>
                {n.position} @ The Office <br/>
            </div>
        </div>
        <div class="row" style={{'margin-left': '8%', 'margin-right': '8%'}}>
            <h5><b>Nomination reason:</b></h5> 
        </div>
        <div class="row" style={{'margin-left': '8%', 'margin-right': '8%'}}>
            {n.nominationReason}
        </div>
        <div class="row" style={{'margin-left': '8%', 'margin-right': '8%'}}>
            <h5><b>Achievements:</b></h5> 
        </div>
        <div class="row" style={{'margin-left': '8%', 'margin-right': '8%'}}>
            <p>His character serves as the intelligent, mild-mannered straight man role to Michael. He is also notable for his rivalrous pranks on fellow salesman Dwight Schrute and his romantic interest in receptionist Pam Beesly, whom he begins dating in the fourth season, proposes to in the fifth, marries in the sixth, and has children with in the sixth and eighth. Jims co-worker, Andy Bernard, often calls him by the nickname Big Tuna.</p>
        </div>
        </>
    }</tr>
    ))}
    </>
);
};

const ChangeList = () => {
    const [nlist, setnlist] = useState(nlistArray);
    const addNominee = () => {
        setnlist([
            ...nlist,
            {
                id: 4,
                name: "aaa",
                position: "default",
                nEmail: "aaaa" + "@acme.com",
                nominationReason: "defaule",
                nominatedBy: "aaaaaa",
                byEmail: "aaaaaa",
                numOfVotes: 0,
                pfp: "default"
            }
        ]);
    };
    return (
        <>
        {/* <div>
            {nlistArray.map((n) => (
                <tr key={n.id}>

                </tr>
            ))};
        </div> */}
        <button type=" button" class="btn btn-success btn-lg rounded" style={{'font-weight': 600}} onClick={addNominee}>Submit Nomination</button>
        </>
    );
};

const VotingList = () => {
    return (
    <>
    {nlistArray.map((n) => (
    <tr key={n.id}>
        <td>{
            <div class="row mb-3">
                <div class="col">
                    {n.pfp}
                </div>
                <div class="col" style={{'min-width': 'fit-content'}}>
                    {n.name}
                    <br/>{n.position}
                </div>
                <div class="col" style={{'marginLeft': '250px'}}>
                    <button type="button" class="btn btn-light">Vote</button>
                </div>
            </div>
        }</td>
    </tr>   
    ))}
    </>
);
};


export {NomineeList};
export {VotingList};
export {ChangeList};