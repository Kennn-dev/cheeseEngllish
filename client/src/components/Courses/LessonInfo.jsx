import React,{useEffect ,useState} from 'react';

import {  
    Spinner,
} from 'reactstrap';

import Video from './Video';
import Quiz from './Quiz';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LessonInfo({match}) {
    const id = match.params.id;
    const url = `http://localhost:9000/users/learn/${id}`;
    const [lessonData, setLessonData] = useState({})
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then((jsonData) => {
            // jsonData is parsed json object received from url
            console.log(jsonData);
            setLessonData(jsonData);
            setLoading(false);
        })
        .catch((error) => {
            // handle your errors here
            console.error(error)
        })
        
    },[])



    return (
        <div className='mt-3'>
            <div className="container-fluid">
                <div className="row">
                    {
                        loading ? <Spinner color="warning" /> : 
                        <div className="col-6">
                            <Video  lesson={lessonData}/>
                        </div>
                    }
                    
                    {
                        loading ? <Spinner color="warning" /> :
                        <div className="col-6">
                            <Quiz  
                                lesson={lessonData}
                                idLesson = {id}
                            />
                        </div>
                    }
                     
                </div>
            </div>
        </div>
    )
}
