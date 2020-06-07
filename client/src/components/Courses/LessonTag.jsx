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


export default function LessonTag({lesson,userLessons}) {
    return (
        <div>
            <Breadcrumb className='lesson-tag'>
                <BreadcrumbItem >{lesson.name} &nbsp;
                <Badge color="secondary">{lesson.level}</Badge>
                </BreadcrumbItem>
                <hr className="my-2" />
                
                {
                    userLessons.indexOf(lesson._id) !== -1 ?
                    <Button 
                    color="success" 
                    size="sm"
                    >
                        <Link 
                            to={`/learn/${lesson._id}`} 
                            className='text-light'
                        >
                            Learn again
                        </Link>
                    </Button>
                    :
                    <Button 
                    color="primary" 
                    size="sm"
                    >
                        <Link 
                            to={`/learn/${lesson._id}`} 
                            className='text-light'
                        >
                            Learn now
                        </Link>
                    </Button>
                }
            </Breadcrumb>
        </div>
    )
}
