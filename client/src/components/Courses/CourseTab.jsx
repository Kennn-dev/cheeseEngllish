import React from 'react'
import { 
    Jumbotron, 
    Button,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import LessonTag from './LessonTag'

export default function CourseTab() {
    return (
        <div className="row container-fluid mt-3">
            <div className='col-6'>
                <Jumbotron>
                    <h2 className="display-3">Course's Name</h2>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, id?</p>
                    <hr className="my-2" />
                    <div className="courses">
                        <LessonTag />
                    </div>  
                </Jumbotron>
            </div>
            <div className='col-6'>
                <Jumbotron>
                    <h2 className="display-3">Course's Name</h2>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, id?</p>
                    <hr className="my-2" />
                    
                </Jumbotron>
            </div>
        </div>
    )
}
