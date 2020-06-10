import React ,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Select from 'react-select';
import axios from 'axios'
import {useAlert} from 'react-alert'
import { useHistory } from "react-router-dom";
import { 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    ListGroup,
    ListGroupItem,
    InputGroupAddon,
    InputGroup
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Quiz from './Quiz'


export default function ViewLesson({match}) {
    let history = useHistory();
    const alert = useAlert();
    const id = match.params.id;
    const url = `http://localhost:9000/admin/lesson/${id}`;

    const [name, setName] = useState('')
    const [videoId, setVideoId] = useState('')
    const [script, setScript] = useState('')
    const [levelOption, setLevelOption] = useState({})
    const [quizs, setQuizs] = useState([])
    const levelOptions = [
        { value: 'beginner', label: 'beginner' },
        { value: 'intermediate', label: 'intermediate' },
        { value: 'advanced', label: 'advanced' },
      ];

    const [newAnswer, setNewAnswer] = useState('')
    const [singleQuiz, setSingleQuiz] = useState(
        {
            question : 'Edit your question',
            answers : [
                'answer 1',
                'answer 2'
            ],
            correct_Answer : 'answer 1'
        }
    )
   
    // GET API

    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then((jsonData) => {
            // jsonData is parsed json object received from url
            setName(jsonData.name)
            setVideoId(jsonData.videoId)
            setQuizs(jsonData.quizs)
            setScript(jsonData.script)
            setLevelOption({
                value : jsonData.level,
                label :  jsonData.level
            })
        })
        .catch((error) => {
            // handle your errors here
            console.error(error)
        })
        
    },[])

    //////////// Handle Functions ////////////////////////////////////////

    const handleChangeQuestion = (e,index) => {
        const quizsClone = [...quizs]
        const typeQuestion = e.target.value
        quizsClone[index].question = typeQuestion
        // console.log(quizsClone)
        setQuizs(quizsClone)
    }

    const handleChangeLevel = (levelOption)=>{
        const level = levelOption
        if(level != null)
        setLevelOption(levelOption)
        // console.log(`Level selected:`, levelOption);
    }

    const handleChangeAnswer = (e,index,answerIndex) =>{
        const quizsClone = [...quizs]
        const typeAnswer = e.target.value
        quizsClone[index].answers[answerIndex] = typeAnswer
        // console.log(quizsClone)
        setQuizs(quizsClone)
    }

   const deleteQuestion = (quiz) =>{
        const deleteQuiz = quiz 
        const quizClone = quizs
        //find index        
        const deletedQuizClone = quizClone.filter(quiz => quiz.question != deleteQuiz.question)
        setQuizs(deletedQuizClone)
   }

   const createQuestion = () => {
    const quizsClone = [...quizs]
    const singleQuizClone = {...singleQuiz}
    quizsClone.push(singleQuizClone)
    setQuizs(quizsClone)
    setSingleQuiz(singleQuizClone)
    }

    const handleCheckAnswer = (index,answerIndex) => {
        const quizsClone = [...quizs]
        //Get value being checked
        const valueChecked = quizsClone[index].answers[answerIndex]
        quizsClone[index].correct_Answer = valueChecked
        // console.log(quizsClone)
        setQuizs(quizsClone)

    }

    const handleSubmit = (e)=>{
        // Format data to POST 
        const quizsClone = [...quizs]
        e.preventDefault();
        const updateLesson = { 
            name : name,
            videoId : videoId,
            level : levelOption.value,
            script : script,
            quizs : quizsClone

        }
        console.log(updateLesson)
        axios.post(`http://localhost:9000/admin/updateUser/${id}`,updateLesson)
          .then(
            res => {
                let x = res.data ;
                if(x.success){
                    alert.success(x.success)
                    history.push('/lessons')
                }else{alert.error(x.error)}
                
            }
            
          )
          .catch(err => console.log(err))
    }

    /////////////////////////////////////////////////////////////////////////////
    return (
        <div>
           <h2>View Lesson</h2>
            <div className="container">
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="exampleName">Name</Label>
                    <Input 
                        type="text" 
                        name="name" 
                        id="exampleName" 
                        placeholder="with a placeholder" 
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleVideoId">Video ID</Label>
                    <Input 
                        type="text"
                        name="videoId" 
                        id="exampleVideoId" 
                        placeholder="email placeholder" 
                        value={videoId}
                        onChange={(e)=> setVideoId(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleLevel">Level</Label>
                    <Select
                        name='level'
                        value={levelOption}
                        onChange={handleChangeLevel}
                        options={levelOptions}
                        // defaultValue={{ value: 'userData.level', label: 'userData.level' }}
                    />
                </FormGroup>
                {
                    quizs.map((quiz,index) =>   
                        <Quiz 
                            quiz={quiz} 
                            index={index}
                            handleChangeQuestion={handleChangeQuestion}
                            deleteQuestion = {deleteQuestion}
                            handleChangeAnswer={handleChangeAnswer}
                            correct_Answer = {quiz.correct_Answer}
                            handleCheckAnswer = {handleCheckAnswer}
                        />
                    )
                }
                <Button
                    className='mb-3'
                    onClick = {() => createQuestion()} //[x]
                >
                    Create Another Question
                </Button> 
                <FormGroup>
                    <Label for="exampleScirpt">Script</Label>
                    <Input 
                        style={
                            {height : '250px'}
                        }
                        type="textarea" 
                        name="script" 
                        id="exampleScript" 
                        value={script}
                        onChange={(e)=> setScript(e.target.value)}
                    />
                </FormGroup>
                <Button>
                    Update
                </Button>
                </Form>
            </div>
        </div>
    )
}
