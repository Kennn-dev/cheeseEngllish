import React,{useState , useEffect} from 'react';
import { useAlert} from 'react-alert';
import { useHistory } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {
    Card, CardBody,Button,
    Breadcrumb,BreadcrumbItem,
    ListGroup, ListGroupItem,Label
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {bonusScore} from '../../Actions/score'

export default function Quiz(props) {
    let history = useHistory();
    const alert = useAlert();
    const dispatch = useDispatch();
    
    const newScore = useSelector(state => state.score)
    const [lessonId , setLessonId] = useState(props.idLesson)
    const [userId, setUserId] = useState('')
    const [score, setScore] = useState(0)
    const [choice,setChoice] = useState([]);
    const correctArr = [];
    const [correct,setCorrect] = useState([]); 

    useEffect(() => {
        setCorrect(correctArr);
        const token = localStorage.userToken;
        const decode = jwt_decode(token);
        setUserId(decode._id)
        setScore(decode.score)
    }, [])
    const handleSubmit = () =>{
        const answers_correct = [ ... correct];
        const answers = [ ...choice];
        const result = answers.every(i=> answers_correct.includes(i.value));
        if(result){
            // Update new score here
            const action = bonusScore(score)
            dispatch(action)
            // axios post update Score
            // ...
            
            axios.post(`http://localhost:9000/users/updateScore/${userId}`,{score : newScore})
            .then(res =>
                    console.log(res.success)
                )
            .catch(err => console.log(err))
            // Update lessons history
            axios.post(`http://localhost:9000/users/lessonUpdate/${userId}`,{lessonId})
            .then(res =>
                    console.log(res),
                    history.push('/course'),
                    alert.success('Congratulation 💛')
                )
            .catch(err => console.log(err))
        }else{

            alert.error('Check again  😥')
            // console.log('Collect : ',choice)
        }
    }
    const handleOnChange = (e) =>{
        var getData = {
            name: e.target.name,
            value:e.target.value
        }
        let arr = [...choice];
        console.log('selected : ',getData);
        if(arr.length <= 0){
            arr.push(getData);
            setChoice(arr);
            return;
        }else{
            const index = arr.findIndex(x => x.name === getData.name);
            if(index >= 0 ){ 
                // Exist 
                arr[index] = getData;
                setChoice(arr);
          
            }else{
                arr.push(getData);
                setChoice(arr); 
            }
        }
        
        
    }
    return (
        <div>
            {
                props.lesson.quizs.map((quiz,index) =>
                    <Card className='mt-3'>
                        <CardBody>
                        <Breadcrumb>
                            <BreadcrumbItem active>
                                {
                                    correctArr.push(quiz.correct_Answer)
                                }
                                &nbsp;
                                {quiz.question}
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <ListGroup className='mt-3'>
                            {   
                                quiz.answers.map((answer)=>
                                <ListGroupItem >
                                    <input 
                                        type="radio" 
                                        name={index}
                                        value={answer}
                                        onClick={handleOnChange}     
                                    />&nbsp;
                                    <Label >{answer}</Label>
                                    
                                </ListGroupItem>)
                            }          
                        </ListGroup>
                        {/* <Breadcrumb>
                            <BreadcrumbItem active>{quiz.correct_Answer}</BreadcrumbItem>
                        </Breadcrumb> */}
                        </CardBody>
                    </Card>
                )
            }
            <Button 
                className='mt-3'
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </div>
    )
}
