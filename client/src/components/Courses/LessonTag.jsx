import React  from 'react';
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


export default function LessonTag(props) {
    return (
        <div>
            <Breadcrumb className='lesson-tag'>
                <BreadcrumbItem >{props.lesson.name} &nbsp;
                <Badge color="secondary">{props.lesson.level}</Badge>
                </BreadcrumbItem>
                <hr className="my-2" />
                <Button 
                    color="primary" 
                    size="sm"
                >
                <Link 
                    to={`/learn/${props.lesson._id}`} 
                    className='text-light'
                >
                    Learn now
                </Link>
                </Button>
            </Breadcrumb>
        </div>
    )
}
