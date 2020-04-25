import React, { useEffect ,useState} from 'react';

import { 
    Jumbotron, 
    Spinner,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import LessonTag from './LessonTag'

export default function CourseTab() {
    const [loading, setLoading] = useState(true);
    const [lessons, setLessons] = useState([]);
    const url = 'http://localhost:9000/users/lesson';

    useEffect(()=>{
        async function getData(){
            const response = await fetch(url);
            const responseJSON = await response.json();
            setLoading(false);
            setLessons(responseJSON.result)
            // console.log(responseJSON.result);
        }
        getData();
    },[])

    return (
        <div className="row container-fluid mt-3">
            <div className='col-8'>
                <Jumbotron>
                    <h2 className="display-3">Listening Course</h2>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, id?</p>
                    <hr className="my-2" />
                    <div className="courses">
                    {
                        loading ?  <Spinner color="warning" /> : null
                    }
                    {   
                         
                        lessons.map((lesson,index) =>{
                            return <LessonTag key={index} lesson={lesson}/>
                        })
                    }
                    </div>  
                </Jumbotron>
            </div>
        </div>
    )
}
