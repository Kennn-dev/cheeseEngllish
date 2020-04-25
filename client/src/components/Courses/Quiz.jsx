import React,{useState} from 'react';
import {
    Card, CardBody,Button,
    Breadcrumb,BreadcrumbItem,
    ListGroup, ListGroupItem,Label
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Quiz(props) {
    // const [quizData, setQuizData] = useState([quizs]);
    return (
        <div>
            {
                props.lesson.quizs.map((quiz,index) =>
                    <Card className='mt-3'>
                        <CardBody>
                        <Breadcrumb>
                            <BreadcrumbItem active>{quiz.question}</BreadcrumbItem>
                        </Breadcrumb>
                        <ListGroup className='mt-3'>
                            {   
                                quiz.answers.map((answer)=>
                                <ListGroupItem >
                                    <input type="radio" name={index}/>&nbsp;
                                    <Label >{answer}</Label>
                                </ListGroupItem>)
                            }
                            
                        </ListGroup>
                        </CardBody>
                    </Card>
                )
            }
            <Button className='mt-3'>Submit</Button>
        </div>
    )
}
