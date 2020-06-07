import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
export default function home() {
    return (
        <div>
            <div class="container mt-5">
                <div class="circle"></div>
                <div class="circle2"></div>
                <div class="page1 row justify-content-between">
                    <div class="col-lg-6 col-sm-12">
                        <img src="../img/undraw_annotation_7das.svg" className="img-fluid" alt="Responsive image" />
                    </div>
                    <div className="col-lg-5 mt-5 col-sm-12">
                        <div className="introduce-text mb-5">
                            <h2 className="font-weight-bold">Cheese English - Ez like a Cheese</h2>
                        </div>
                        <div className="infor-p">
                            <p className="text-left">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Adipisci culpa excepturi alias error in? Labore consectetur molestias enim. Nihil a eum perferendis eligendi
                                veritatis recusandae maiores nemo obcaecati asperiores voluptas!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="page1 row justify-content-between">
                    <div className="col-lg-5 col-sm-12 mt-5 align-self-end">
                        <div className="introduce-text mb-5">
                            <h2 className="font-weight-bold">Cheese English - Ez like a Cheese</h2>
                        </div>
                        <div className="infor-p">
                            <p className="text-right">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Adipisci culpa excepturi alias error in? Labore consectetur molestias enim. Nihil a eum perferendis eligendi
                                veritatis recusandae maiores nemo obcaecati asperiores voluptas!
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <img src="../img/undraw_by_the_road_4rfk.svg" className="img-fluid" alt="Responsive image" />
                    </div>
                </div>
                <div className="text d-flex justify-content-center">
                    <h1 style={{ color: "#FFCF1F"}} className="font-weight-bold">Join With Us</h1>
                </div>
                <div className="page1 row justify-content-between">
                    <div className="col-lg-5 col-sm-12 mt-5">
                        <div className="row d-flex justify-content-center mb-3">
                            <img src="../img/Cheese English Logo.png" width="200" height="40" alt="Responsive image" />
                        </div>
                        <div className="row  d-flex justify-content-center">
                            <div className="form-layout p-3">
                                <form className="p-3">
                                    <div className="form-group mt-3">
                                        <label for="exampleInputName">Name</label>
                                        <input type="text" className="form-control" id="exampleInputName" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group mt-3">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group mt-3">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                    </div>
                                    <div className="form-check mt-3">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" className="btn mt-3">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-5">
                            <img src="../img/undraw_collaborating_g8k8.svg" className="img-fluid" alt="Responsive image" />
                    </div>
                </div>
            </div>
        </div>
    )
}
