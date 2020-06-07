import React from 'react'
import { Form, FormGroup , Input , Label} from 'reactstrap'
import { useSelector } from 'react-redux'

export default function UserProfile() {
    const score = useSelector(state => state.score)
    return (
        <div>
            <div class="container-fluid">
                <div class="page1 row justify-content-between">
                    <div class=" col-lg-6 col-sm-12">
                        <div class="mt-5 profile p-5">
                            <div class="title d-flex justify-content-center">
                                <h3 class="mt-3 text-uppercase font-bold">Your Profile</h3>
                            </div>
                            <Form>
                                <FormGroup>
                                    <div className="d-flex justify-content-center">
                                        <div className="align-items-center">
                                            <h1>{score}</h1>
                                            <p>points</p>
                                        </div>
                                    </div>
                                    
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleInputEmail1">Name :</Label>
                                    <Input
                                        type="text"
                                        name="exampleInputEmail1"
                                        id="exampleEmail"
                                        placeholder="with a placeholder"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleInputAddress">Address :</Label>
                                    <Input
                                        type="text"
                                        name="exampleInputEmail1"
                                        id="exampleEmail"
                                        placeholder="with a placeholder"
                                    />
                                    <small  class="form-text text-muted">Street Address</small>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input
                                    type="email"
                                    name="email"
                                    id="exampleEmail"
                                    placeholder="with a placeholder"
                                    />
                                </FormGroup>
                                
                                {/* <button type="submit" class="btn btn-primary mt-3">Save</button> */}
                            </Form>
                        </div>
                    </div>
                    <div class=" col-lg-6 col-sm-12">
                        <img src="../img/undraw_going_offline_ihag.svg" className='img-fluid' alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
