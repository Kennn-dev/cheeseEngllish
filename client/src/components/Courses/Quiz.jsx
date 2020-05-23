import React,{useState , useEffect} from 'react';
import { useAlert} from 'react-alert'
import {
    Card, CardBody,Button,
    Breadcrumb,BreadcrumbItem,
    ListGroup, ListGroupItem,Label
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Quiz(props) {
    const alert = useAlert();
    const [choice,setChoice] = useState([]);
    const correctArr = [];
    const [correct,setCorrect] = useState([]); 
    useEffect(() => {
        setCorrect(correctArr);
    }, [])
    const handleSubmit = () =>{
        const answers_correct = [ ... correct];
        const answers = [ ...choice];
        const result = answers.every(i=> answers_correct.includes(i.value));
        result ? 
        alert.success('Congratulation 💛') 
        // Update new score here
        
        :
        alert.error('Check again  😥')
        // console.log('Collect : ',choice)
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
