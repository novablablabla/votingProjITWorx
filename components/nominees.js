import Image from "next/image";
import { NomineeList } from "./nomineeList";
const Nominees = () => {
    return (
        
    <main>
    <div class="container mt-5">
        <div class="row mb-3">
            <div class="col-sm">
                <h1><b>Nominees:</b></h1>
            </div>
        </div>
        <div>
            <NomineeList />
        </div>
    </div>
</main>
    );
};

export default Nominees;