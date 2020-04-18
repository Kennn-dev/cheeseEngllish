import React, { useState } from 'react';
import Script from './Script'
import {
    Card, CardBody,
    CardTitle,Button,
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Video() {
    const [open, setopen] = useState(false);
    const handleClick = () =>{
        setopen(!open)
    }
    return (
        <div>
            <Card>
                <CardBody>
                <iframe 
                    title="vimeo-player" 
                    src="https://player.vimeo.com/video/365176979" 
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
                        Would you like to live on a desert island?
                    </h3>
                </CardTitle>
                <Button onClick={handleClick}>Show Script</Button>
                </CardBody>
                
                { open ? <Script/> : null}
            </Card>
        </div>
    )
}
