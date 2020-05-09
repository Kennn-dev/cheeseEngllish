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
import DeleteUser from '../Ad_User/DeleteUser'
import ViewLesson from '../Ad_Lessons/ViewLesson'


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
                <Route exact path='/lessons' component={Lessons}></Route>
                <Route path='/viewUser/:id' component={ViewUser}></Route>
                <Route path='/lesson/:id' component={ViewLesson}></Route>
                <Route path='/deleteUser/:id' component={DeleteUser}></Route>
            </Switch>
        </Router>
            
        
    )
}
