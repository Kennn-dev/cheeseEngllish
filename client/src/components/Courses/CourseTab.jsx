import React, { useEffect ,useState} from 'react';
import ScrollToBottom  from 'react-scroll-to-bottom';
import { 
    Jumbotron, 
    Spinner,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import LessonTag from './LessonTag';
import ScoreBoard from '../ScoreBoard/ScoreBroad';

export default function CourseTab() {
    const [loading, setLoading] = useState(true);
    const [lessons, setLessons] = useState([]);
    const [scores, setScores] = useState([]);
    const url1 = 'http://localhost:9000/users/lesson';
    const url2 = 'http://localhost:9000/users/scores';

    useEffect(() => {
        async function getScores(){
            const response = await fetch(url2);
            const responseJSON = await response.json();
            setScores(responseJSON)
        }
        getScores();
    }, [])

    useEffect(()=>{
        async function getData(){
            const response = await fetch(url1);
            const responseJSON = await response.json();
            setLoading(false);
            setLessons(responseJSON.result)
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
                    <ScrollToBottom>
                    <div className="courses">
                    {
                        loading ?  <Spinner color="warning" /> : null
                    }
                    
                    {   
                         
                        lessons.map((lesson,index) =>{
                            return <LessonTag key={index} lesson={lesson} />
                        })
                    }
                    </div>  
                    </ScrollToBottom>
                </Jumbotron>
            </div>
            <div className="col-4">
                <ScoreBoard dataScores={scores}/>
            </div>
        </div>
    )
}
