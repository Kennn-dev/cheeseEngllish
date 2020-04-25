import React, { useState } from 'react';

import {
    Card, CardBody,
    CardTitle,Button,
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Video(props) {
    
    const [open, setopen] = useState(false);
    const handleClick = (e) =>{
        e.preventDefault();
        setopen(!open)
    }
    return (
        <div>
            <Card>
                <CardBody>
                <iframe 
                    title="vimeo-player" 
                    src={`https://player.vimeo.com/video/${props.lesson.videoId}`} 
                    width="600" 
                    height="360"
                    frameborder="0" 
                    allowfullscreen
                >
                </iframe>
                <CardTitle>
                    <h3 
                        className='font-weight-bold'
                    >
                        {props.lesson.name}
                    </h3>
                </CardTitle>
                <Button onClick={handleClick}>Show Script</Button>
                { open ? 
                    <div className='mt-3 container-fluid'>
                        <Card>
                            <CardBody>
                                <p>
                                    {props.lesson.script}
                                </p>
                            </CardBody>
                        </Card>
                    </div>
                : <div></div>}
                </CardBody>     
            </Card>
        </div>
    )
}
