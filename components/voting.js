import Image from "next/image";
import { VotingList } from "./nomineeList";
const Voting = () => {
    const h1Style = {
        'font-size': 25,
        'font-weight': 800
    }
    return (
        <main>
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-8">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h1 style={{h1Style}}>
                                    <b>Employee of the Month</b>
                                </h1>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                Vote for your favourite employee <br/><br/>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-">
                                <VotingList />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-4">
                                <h5>
                                    <b>Prizes</b>
                                </h5>
                            </div>
                        </div>
                        <div class="row justify-content-end">
                            <div class="col-4">
                                <h6>
                                    <b>1st place</b><br/>
                                    $500 gift card
                                </h6>
                            </div>
                            <div class="col-4">
                                <Image src="/1giftcard.jpeg" alt="here" width={100} height={50} class="img-fluid" style={{width: '60%'}} />
                            </div>
                        </div>
                        <div class="row justify-content-end">
                            <div class="col-4">
                                <h6>
                                    <b>2nd place</b><br/>
                                    $250 gift card
                                </h6>
                            </div>
                            <div class="col-4">
                                <Image src="/2giftcard.jpeg" alt="here" width={100} height={50} class="img-fluid" style={{width: '60%'}} />
                            </div>
                        </div>
                        <div class="row justify-content-end">
                            <div class="col-4">
                                <h6>
                                    <b>3rd place</b><br/>
                                    $100 gift card
                                </h6>
                            </div>
                            <div class="col-4">
                                <Image src="/3giftcard.jpeg" alt="here" width={100} height={50} class="img-fluid" style={{width: '60%'}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </main>
    );
};
export default Voting;