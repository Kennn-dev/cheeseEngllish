import React ,{useState} from 'react'
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
import { useEffect } from 'react';
import Answer from './Answer'

export default function Quiz({
    quiz,
    index,
    handleChangeQuestion,
    deleteQuestion,
    handleChangeAnswer,
    correct_Answer,
    handleCheckAnswer
}) {
    
    return (
        <div>
            <Form> 
                <FormGroup>
                    <Label >{`Question ${index+1}`}</Label>
                    <Input 
                        type="text"
                        name="question"  
                        placeholder="question " 
                        value={quiz.question} //Question here
                        onChange={(e)=> handleChangeQuestion(e,index)} //[x]
                    />
                </FormGroup>
                <FormGroup>
                    <Label >Answers :</Label>
                    {
                        quiz.answers.length > 0 ?
                        quiz.answers.map((answer,indexAnswer) =>
                            <Answer 
                                answer={answer} 
                                index={index} 
                                indexAnswer={indexAnswer}
                                handleChangeAnswer={handleChangeAnswer}
                                correct_Answer = {correct_Answer}
                                handleCheckAnswer = {handleCheckAnswer}
                            />
                        )
                        :
                            null
                    }
                </FormGroup>
                <Button 
                    className=' mb-3 bg-danger'
                    onClick={()=> deleteQuestion(quiz)} //[x]
                >
                    Delete Question
                </Button>
            </Form>
        </div>
    )
}
