import Image from "next/image";
const Dashboard = () => {
    return (
        <main>
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-8">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h2>Employee of the Month</h2>
                                <h5><br/>Current Voting</h5>
                                <h6>votes recieved:</h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="70"
                                    aria-valuemin="0" aria-valuemax="100" style={{height: '10px'}}>
                                    <div class="progress-bar bg-success" style={{width: '50%'}}></div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-5 mb-3">
                            <div class="col-sm-4" style={{'max-width': '100pt'}}>
                                <Image src="/dwight.jpeg" alt="dwight" width={100} height={100} style={{height: '50pt'}}
                                    class="rounded mx-auto d-block"/>
                            </div>
                            <div class="col-sm">
                                <b>Dwight Schrute</b><br/>
                                Votes: 10
                            </div>
                            <div class="col-sm" style={{'text-align': 'right'}}>
                                70%
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-4" style={{'max-width': '100pt'}}>
                                <Image src="/dwight.jpeg" alt="dwight" width={100} height={100} style={{height: '50pt'}}
                                    class="rounded mx-auto d-block"/>
                            </div>
                            <div class="col-sm">
                                <b>Dwight Schrute</b><br/>
                                Votes: 10
                            </div>
                            <div class="col-sm" style={{'text-align': 'right'}}>
                                70%
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-4" style={{'max-width': '100pt'}}>
                                <Image src="/dwight.jpeg" alt="dwight" width={100} height={100} style={{height: '50pt'}}
                                    class="rounded mx-auto d-block"/>
                            </div>
                            <div class="col-sm">
                                <b>Dwight Schrute</b><br/>
                                Votes: 10
                            </div>
                            <div class="col-sm" style={{'text-align': 'right'}}>
                                70%
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-4" style={{'max-width': '100pt'}}>
                                <Image src="/dwight.jpeg" alt="dwight" width={100} height={100} style={{height: '50pt'}}
                                    class="rounded mx-auto d-block"/>
                            </div>
                            <div class="col-sm">
                                <b>Dwight Schrute</b><br/>
                                Votes: 10
                            </div>
                            <div class="col-sm" style={{'text-align': 'right'}}>
                                70%
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-4" style={{'max-width': '100pt'}}>
                                <Image src="/dwight.jpeg" alt="dwight" width={100} height={100} style={{height: '50pt'}}
                                    class="rounded mx-auto d-block"/>
                            </div>
                            <div class="col-sm">
                                <b>Dwight Schrute</b><br/>
                                Votes: 10
                            </div>
                            <div class="col-sm" style={{'text-align': 'right'}}>
                                70%
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4" style={{'text-align': 'end'}}>
                    <div class="container mt-5">
                        <div class="row">
                            <div class="col">
                                <h6><b>Voting Started on</b></h6>
                                1/8/2024
                                <h6><b>Voting Ends on</b></h6>
                                30/8/2024
                            </div>
                        </div>
                        <div class="row justify-content-end">
                            <div class="col-sm-4">
                                <br/>
                                <button class="btn btn-sm btn-danger rounded" type="button">End Voting</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
};

export default Dashboard;