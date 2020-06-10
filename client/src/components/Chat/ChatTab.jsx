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
    const [messages, setMessages] = useState([]);
    const [chats, setChats] = useState([]);
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
        
    },[url,location.search])

    useEffect(() => {
        socket.on('otherMessage',(message =>{
            setMessages([...messages,message]);
            console.log(message);
        }))
    }, [messages])
    
    useEffect(() => {
        async function getChats(){
            const res = await fetch('http://localhost:9000/users/chats')
            const resJSON = await res.json();
            setChats(resJSON.result)
        }

        getChats();
    }, [])

    return (
        <div>
            <h1>Chat</h1>
            <div className="d-flex">
                <div className="col-4 container">
                <ul class="list-group">
                <li class="list-group-item active"><h4>Current users :</h4></li>
                    {
                        roomList.map(user =>
                        <li class="list-group-item">{user}</li>
                        )
                    }
                </ul>
                </div>
                <div className="col-8">
                    <ChatBox chats = {chats} messages ={messages} name={name}/>
                    <div className="container input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Recipient's username" 
                        aria-label="Recipient's username" 
                        aria-describedby="button-addon2"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        onKeyPress={ e => e.key === 'Enter' ? sendMessage(e) : null}
                    />
                    <div 
                        className="input-group-append"
                    >
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

        </div>
    )
}
