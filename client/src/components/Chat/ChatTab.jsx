import React, { useEffect, useState } from 'react'
import io from 'socket.io-client';
import queryString from 'querystring';
import {useAlert} from 'react-alert';

import ChatBox from './ChatBox';

import 'bootstrap/dist/css/bootstrap.min.css';

let socket;

export default function ChatTab({location}) {
    const alert = useAlert();
    const [name , setName] =useState('');
    const [roomList, setRoomList] = useState([]);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        // {
        //     name :'',
        //     text: '',
        //     createAt : new Date().getTime()
        // }
    ]);
    const url = 'http://localhost:9000';

    const sendMessage = (e)=>{
            socket.emit('sendMessage',{name,message});
            setMessage('');
    }

    useEffect(() => {
        const {name} = queryString.parse(location.search)
        setName(name);
        socket = io(url);
        socket.emit('newUserJoin',(name));
        socket.on('updateListUser',list =>{
            setRoomList(list);
        })
        
        // return ()=>{
        //     //Clear
        //     // setRoomList([]);
        //     socket.emit('disconnect',name);
        //     socket.off();
        // }
    },[url,location.search])

    useEffect(() => {
        socket.on('otherMessage',(message =>{
            setMessages([...messages,message]);
            console.log(message);
            // message - Obj name-text-createAt
        }))
    }, [])
    
    return (
        <div>
            <h1>Chat</h1>
            <div className="row">
                <div className="col-6">
                    Current users :
                    {
                        roomList.map(user =>
                        <h3>{user}</h3>
                        )
                    }
                </div>
                <div className="col-6">
                    <ChatBox messages ={messages}/>
                    <input 
                        type="text" 
                        className="form-control"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        onKeyPress={ e => e.key === 'Enter' ? sendMessage(e) : null}
                    />
                    <div className="">
                        <button 
                            className="btn btn-outline-secondary" 
                            type="button" 
                            id="button-addon2"
                            onClick={e=> sendMessage(e)}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
