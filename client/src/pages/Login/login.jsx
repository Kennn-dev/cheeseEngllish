import React from 'react'
import {FormLogin} from '../../components/FormLogin/FormLogin';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function login() {
    return (
        <div className='container'>
            <FormLogin 
                className='mt-5'
            />
        </div>
    )
}