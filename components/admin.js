import Image from "next/image";
const Admin = () => {
    return (
        <main>
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-2">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                                <h5>Admin</h5>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <button class="btn btn-danger rounded" type="button">Add New Candidate</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-8">
                    <div class="container">
                        <div class="row mb-3">
                            <div class="col-sm">
                                <h2><b>Nomination Settings</b></h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <button type="button" class="btn btn-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor"
                                        class="bi bi-plus-lg" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2">
                                        </path>
                                    </svg>
                                     Nominate an empolyee
                                </button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h4>
                                    Current nominations
                                </h4>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm">
                                <Image src="/michael.png" alt="michael"  width={100} height={100} class="rounded img-fluid"
                                    style={{width: 100}}/>
                            </div>
                            <div class="col-sm" style={{'min-width': '50%', 'margin-right': '250px'}}>                                <b>Michael Scott</b>
                                <br/>boss - 5 years experience
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm">
                                <Image src="/michael.png" alt="michael"  width={100} height={100} class="rounded img-fluid"
                                    style={{width: 100}}/>
                            </div>
                            <div class="col-sm" style={{'min-width': '50%', 'margin-right': '250px'}}>                                <b>Michael Scott</b>
                                <br/>boss - 5 years experience
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm">
                                <Image src="/michael.png" alt="michael"  width={100} height={100} class="rounded img-fluid"
                                    style={{width: 100}}/>
                            </div>
                            <div class="col-sm" style={{'min-width': '50%', 'margin-right': '250px'}}>                                <b>Michael Scott</b>
                                <br/>boss - 5 years experience
                            </div>
                        </div>
                        <div class="row justify-content-end">
                            <div class="col-1" style={{'padding-right': '10%'}}>
                                <button class="btn btn-light rounded" type="button">cancel</button>
                            </div>
                            <div class="col-1">
                                <button class="btn btn-success rounded" type="button">save</button>
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="col-sm">
                                <h4>
                                    Previous nominations
                                </h4>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm">
                                <Image src="/michael.png" alt="michael"  width={100} height={100} class="rounded img-fluid"
                                    style={{width: 100}}/>
                            </div>
                            <div class="col-sm" style={{'min-width': '50%', 'margin-right': '250px'}}>                                <b>Michael Scott</b>
                                <br/>boss - 5 years experience
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm">
                                <Image src="/michael.png" alt="michael"  width={100} height={100} class="rounded img-fluid"
                                    style={{width: 100}}/>
                            </div>
                            <div class="col-sm" style={{'min-width': '50%', 'margin-right': '250px'}}>                                <b>Michael Scott</b>
                                <br/>boss - 5 years experience
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm">
                                <Image src="/michael.png" alt="michael"  width={100} height={100} class="rounded img-fluid"
                                    style={{width: 100}}/>
                            </div>
                            <div class="col-sm" style={{'min-width': '50%', 'margin-right': '250px'}}>
                                <b>Michael Scott</b>
                                <br/>boss - 5 years experience
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    );
};

export default Admin;