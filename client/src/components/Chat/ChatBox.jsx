import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import ScrollToBottom  from 'react-scroll-to-bottom';

export default function ChatBox(props) {
    return (
        <ScrollToBottom>
        <div>
            <div className="container-fluid custom-height">
                <div className="container light-bg">
                    {
                        props.chats.map(chat => 
                        {
                            return(
                                chat.name === props.name ?
// ------------------------------------------------------ self
                                <div className="">
                                    <p 
                                        className='mb-0 d-flex justify-content-end'
                                        style={{
                                            fontSize: '12px'
                                        }}
                                    >{chat.name}</p>
                                    <div className="d-flex justify-content-end">
                                        <div className="mb-3 mr-3 d-flex align-items-center"
                                                style={{
                                                    color:'#6c757d'
                                                }}
                                            >
                                                {chat.createAt}
                                        </div>
                                        <div className="
                                            alert 
                                            alert-warning 
                                        " 
                                        role="alert"
                                        >
                                            {chat.message}
                                        </div>
                                    </div>
                                    </div>
                                :
// =============================================== Other                                
                                <div className="" >
                                    <p 
                                        className='mb-0'
                                        style={{
                                            fontSize: '12px'
                                        }}
                                    >{chat.name}</p>
                                    <div className="d-flex justify-content-start">
                                        <div className="
                                            alert 
                                            alert-light 
                                            allchat
                                        "
                                        role="alert"
                                        >
                                            {chat.message}
                                        </div>
                                        <div className="mb-3 ml-3 d-flex align-items-center"
                                            style={{
                                                color:'#6c757d'
                                            }}
                                        >
                                            {chat.createAt}
                                        </div> 
                                    </div>     
                                </div>
                            )
                            
                        })
                    }
                    {
                        //props
                        props.messages.map( message => 
                            {
                                return message.name === 'Admin'?
                //=============================== Admin 
                                <div className="" >
                                    <p 
                                        className='mb-0'
                                        style={{
                                            fontSize: '12px'
                                        }}
                                    >{message.name} 💎</p>
                                    <div className="d-flex justify-content-start">
                                        <div className="
                                            alert 
                                            alert-light 
                                            allchat
                                        " 
                                        role="alert"
                                        >
                                            {message.text}
                                        </div>
                                        <div className="mb-3 ml-3 d-flex align-items-center"
                                            style={{
                                                color:'#6c757d'
                                            }}
                                        >
                                            {message.createAt}
                                        </div>
                                    </div>        
                                </div>
                                :
                                message.name === props.name ?
// ------------------------------------------------------ self
                                <div className="">
                                    <p 
                                        className='mb-0 d-flex justify-content-end'
                                        style={{
                                            fontSize: '12px'
                                        }}
                                    >{message.name}</p>
                                    <div className="d-flex justify-content-end">
                                        <div className="mb-3 mr-3 d-flex align-items-center"
                                                style={{
                                                    color:'#6c757d'
                                                }}
                                            >
                                                {message.createAt}
                                        </div>
                                        <div className="
                                            alert 
                                            alert-warning 
                                        " 
                                        role="alert"
                                        >
                                            {message.text}
                                        </div>
                                    </div>
                                    </div>
                                :
// =============================================== Other                                
                                <div className="" >
                                    <p 
                                        className='mb-0'
                                        style={{
                                            fontSize: '12px'
                                        }}
                                    >{message.name}</p>
                                    <div className="d-flex justify-content-start">
                                        <div className="
                                            alert 
                                            alert-light 
                                            allchat
                                        "
                                        role="alert"
                                        >
                                            {message.text}
                                        </div>
                                        <div className="mb-3 ml-3 d-flex align-items-center"
                                            style={{
                                                color:'#6c757d'
                                            }}
                                        >
                                            {message.createAt}
                                        </div> 
                                    </div>     
                                </div>
                            }
                            
                        )
                    }
                </div>
            </div>
        </div>
        </ScrollToBottom>
    )
}
