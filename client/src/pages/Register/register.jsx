import React from 'react'
import {FormRegister} from '../../components/FormRegister/FormRegister'
import './styles.css'

export default function register() {
    return (
        <div>
             <div className="bg-img">
                {/* <img src="../img/cheeseBackground.jpg" alt="img"/> */}
            </div>
            <div className="container mb-5">
                <FormRegister/>
            </div>
        </div>
    )
}