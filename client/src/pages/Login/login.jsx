import React from 'react'
import {FormLogin} from '../../components/FormLogin/FormLogin';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function login() {
    return (
        <div className="x">
            <div className="bg-img">
                {/* <img src="../img/cheeseBackground.jpg" alt="img"/> */}
            </div>
            <div className='container mb-5'>
                <FormLogin 
                    className='mt-5'
                />
            </div>
        </div>
        
    )
}