import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    Badge,
    Button,
} from 'reactstrap';
import {
    Link,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'


export default function LessonTag() {
    
    return (
        <div>
            <Breadcrumb className='lesson-tag'>
                <BreadcrumbItem >Lesson's Name &nbsp;
                <Badge color="secondary">Beginner</Badge>
                </BreadcrumbItem>
                <hr className="my-2" />
                <Button 
                    color="primary" 
                    size="sm"
                >
                <Link 
                    to='/learn' 
                    className='text-light'
                >
                    Learn now
                </Link>
                </Button>
            </Breadcrumb>
        </div>
    )
}
