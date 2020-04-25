import React, { useEffect,useState } from 'react'

import ScrollToBottom  from 'react-scroll-to-bottom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export default function ChatBox(props) {
    return (
        <div>
            <div className="container-fluid">
                <h2>Chat Room</h2>
                <div className="container light-bg" style={{
                    overflow : "auto"
                }}>
                    
                    {
                        props.messages.map( message => 
                            {
                                return message.name === 'Admin'?
                                <div className="" >
                                    <p>{message.name}</p>
                                    <div className="
                                        alert 
                                        alert-light 
                                        allchat
                                    " 
                                    role="alert"
                                    >
                                        {message.text}
                                    </div>
                                </div>
                                :
                                // if(message.name == props.currentName){
                                //     <div className="float-right">
                                //         <div className="
                                //             alert 
                                //             alert-warning 
                                //         " 
                                //         role="alert"
                                //         >
                                //             {message.text}
                                //         </div>
                                //     </div>
                                // }else
                                <div className="" >
                                    <label>{message.name}</label>
                                    <div className="
                                        alert 
                                        alert-light 
                                        allchat
                                    "
                                    role="alert"
                                    >
                                        {message.text}
                                    </div>
                                </div>
                            }
                            
                        )
                    }
                    
                </div>
            </div>
        </div>
    )
}
