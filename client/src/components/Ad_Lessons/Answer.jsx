import React,{createContext} from 'react'
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
import checkedIcon from '../Ad_Lessons/checked-box.svg'
import uncheckedIcon from '../Ad_Lessons/uncheck-box.svg'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Answer({
    answer,
    index,
    indexAnswer,
    handleChangeAnswer,
    correct_Answer,
    handleCheckAnswer
}) {

    

    return (
        <div>
            
            <ListGroup>
                <ListGroupItem>
                    <div className="d-flex align-items-center">
                        <img 
                            src={answer === correct_Answer ? checkedIcon : uncheckedIcon}
                            alt="icon"
                            height='20'
                            width='20'
                            className='mr-3'
                            onClick={()=> handleCheckAnswer(index,indexAnswer)}
                        />
                        <Input
                            type='text'
                            name={index}
                            value={answer}
                            onChange={(e)=>handleChangeAnswer(e,index,indexAnswer)}
                        />
                    </div>
                </ListGroupItem>
            </ListGroup>
        </div>
    )
}
