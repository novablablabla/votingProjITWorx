import styles from "./home.module.css";
import { useState } from "react";
import { ChangeList } from "./nomineeList";

const Nomination = ({addnominee}) => {

const [nname, setnname] = useState();
const [nEmail, setnEmail] = useState();
const [nominationReason, setnReason] = useState();
const [yname, setyname] = useState();
const [yEmail, setyEmail] = useState();

const handleSubmit = (e) => {
    e.preventDefault();
    // Pass data to parent component
    onSubmit({ nname, nEmail });
    // Reset form fields
    setnname('');
    setnEmail('');
  };

return(
<main>
            <form onSubmit={addnominee}>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 className={styles.h1}>
                        <br/>Nominate a Colleague
                    </h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class={styles.inputstuff} id="inputstuff">
                <div class="col-12">
                    <label for="basic-url" class="form-label">Nominee Name</label>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="First and Last Name" value={nname} onChange={(e) => setnname(e.target.value)}
                            aria-label="Nominee's Name" aria-describedby="basic-addon2" style={{"backgroundColor": "lightgrey"}}/>
                        <span class="input-text" id="basic-addon2"></span>
                    </div>
                    <label for="basic-url" class="form-label">Nominee Email</label>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Nominee's Username" value={nEmail} onChange={(e) => setnEmail(e.target.value)}
                            aria-label="Nominee's username" aria-describedby="basic-addon2" style={{"backgroundColor": "lightgrey"}}/>
                        <span class="input-group-text" id="basic-addon2">@acme.com</span>
                    </div>
                    <label for="basic-url" class="form-label">Reason For nomination</label>
                    <div class="input-group">
                        <span class="input-text"></span>
                        <textarea class="form-control" value={nominationReason}  onChange={(e) => setnReason(e.target.value)}
                            aria-label="With textarea" style={{"backgroundColor": "lightgrey"}}></textarea>
                    </div>
                    <label for="basic-url" class="form-label">Your Name</label>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="First and Last Name" value={yname}  onChange={(e) => setyname(e.target.value)}
                            aria-label="Nominee's Name" aria-describedby="basic-addon2" style={{"backgroundColor": "lightgrey"}}/>
                        <span class="input-text" id="basic-addon2"></span>
                    </div>
                    <label for="basic-url" class="form-label">Your Email</label>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Username" value={yEmail}  onChange={(e) => setyEmail(e.target.value)}
                            aria-label="Nominee's username" aria-describedby="basic-addon2" style={{"backgroundColor": "lightgrey"}}/>
                        <span class="input-group-text" id="basic-addon2">@acme.com</span>
                    </div>
                </div> 
            </div>
        </div> 

        <div class="container text-right">
            <div class="row justify-content-end">
                <div class="col-4">
                <button type="submit" class="btn btn-success btn-lg rounded" style={{'font-weight': 600}} onClick={addnominee}>Submit Nomination</button>
                </div> 
            </div>
        </div>
        </form>
    </main>
);
};

export default Nomination;