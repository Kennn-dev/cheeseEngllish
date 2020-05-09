import React ,{useState , useEffect}from 'react'
import io from 'socket.io-client';
import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
    Alert 
   } from 'reactstrap';

let socket;
export default function Translate() {
    const [text, setText] = useState('')
    const [textTranslated, setTextTranslated] = useState(null)
    const handleClick = ()=>{
        socket.emit('TextToTranslate',(text));
    }
    useEffect(() => {
        socket = io('http://localhost:9000');
        socket.on('TextTranslated',(textTrans => setTextTranslated(textTrans)))
    }, [textTranslated])
    return (
        <div>
            <InputGroup>
            <Input 
                value={text}
                placeholder='Nhập văn bản '
                onChange={(e)=> setText(e.target.value)}
            />
            <InputGroupAddon addonType="prepend">
                <Button
                    onClick={handleClick}
                >I'm a button
                </Button>
            </InputGroupAddon>
            </InputGroup>
            {
                textTranslated ? 
                <Alert color="success">
                    {textTranslated}
                </Alert>
                : null
            }
            
        </div>
    )
}
