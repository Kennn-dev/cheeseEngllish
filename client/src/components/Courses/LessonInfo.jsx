import React from 'react';

import Video from './Video';
import Quiz from './Quiz';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LessonInfo() {
    return (
        <div className='mt-3'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <Video/>
                    </div>
                    <div className="col-6">
                        <Quiz/>
                    </div>
                </div>
            </div>
        </div>
    )
}
