import React ,{useState,useEffect}from 'react'
import jwt_decode from 'jwt-decode';
import { 
    
} from 'reactstrap';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css';
import SideBarAdmin from './SideBarAdmin'
import User from '../Ad_User/User'
import Lessons from '../Ad_Lessons/Lessons'
import ViewUser from '../Ad_User/ViewUser'
import ViewLesson from '../Ad_Lessons/ViewLesson'
import AddLesson from '../Ad_Lessons/AddLesson'

export default function AdminTab() {
    const [user, setUser] = useState({
        name:'',
        email:''
    })
    useEffect(() => {
        const token = localStorage.adminToken;
        const decode = jwt_decode(token);
        setUser({
            ...user,
            name: decode.name,
            email: decode.email,
        })
    }, [])
    

    return (
        <Router>
            <SideBarAdmin user = {user} />
            <Switch>
                <Route exact path='/users' component={User}></Route>
                <Route path='/viewUser/:id' component={ViewUser}></Route>
                <Route path='/lesson/:id' component={ViewLesson}></Route>
                <Route exact path='/lessons' component={Lessons}></Route>
                <Route exact path='/addLesson' component={AddLesson}></Route>
            </Switch>
        </Router>
            
        
    )
}
