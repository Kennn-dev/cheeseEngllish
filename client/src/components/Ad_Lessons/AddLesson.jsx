import React ,{useState} from 'react'
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

export default function AddLesson() {

    const url = `http://localhost:9000/admin/addLesson`;
    let history = useHistory();
    const alert = useAlert();

    const [name, setName] = useState('')
    const [videoId, setVideoId] = useState('')
    const [script, setScript] = useState('')
    const [levelOption, setLevelOption] = useState({}) //get .value pls
    const [quizs, setQuizs] = useState([
        {
            question : 'Change your question',
            answers : [
                'Answer 1',
                'Answer 2'
            ],
            correct_Answer : 'Answer 1'
        }
    ])
    const [singleQuiz, setSingleQuiz] = useState(
        {
            question : 'Edit your question',
            answers : [
                'Answer 1',
                'Answer 2'
            ],
            correct_Answer : 'Answer 1'
        }
    )
    const levelOptions = [
        { value: 'beginner', label: 'beginner' },
        { value: 'intermediate', label: 'intermediate' },
        { value: 'advanced', label: 'advanced' },
      ];
    
      const handleChangeQuestion = (e,index) => {
        const quizsClone = [...quizs]
        const typeQuestion = e.target.value
        quizsClone[index].question = typeQuestion
        // console.log(quizsClone)
        setQuizs(quizsClone)
    }
    const handleCheckAnswer = (index,answerIndex) => {
        const quizsClone = [...quizs]
        //Get value being checked
        const valueChecked = quizsClone[index].answers[answerIndex]
        quizsClone[index].correct_Answer = valueChecked
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
        setSingleQuiz({
            question : 'Edit your question',
            answers : [
                'Answer 1',
                'Answer 2'
            ],
            correct_Answer : 'Answer 1'
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newLesson = {
            name : name,
            videoId : videoId,
            level : levelOption.value,
            quizs : quizs
        }
        axios.post(url,newLesson)
        .then(response => {
            console.log(response)
            let x = response.data
            x.success ? alert.success(x.success) : alert.error(x.error)
            history.push('/admin/lessons')
        })
        .catch(err => console.log(err))
    }
    return (
        <div className='container'>
            <h2>Create lesson</h2>
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
                    Create
                </Button>
                </Form>
        </div>
    )
}
