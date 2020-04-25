import React ,{useState,useEffect}from 'react'
import jwt_decode from 'jwt-decode';
import { 
    
} from 'reactstrap';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css';
import Sidebar from './Sidebar';
import CourseTab from '../Courses/CourseTab';
import LessonInfo from '../Courses/LessonInfo';
import ChatTab from '../Chat/ChatTab';

export default function ProfileTab() {
    const [user, setUser] = useState({
        name:'',
        email:'',
        level:''
    })
    useEffect(() => {
        const token = localStorage.userToken;
        const decode = jwt_decode(token);
        setUser({
            ...user,
            name: decode.name,
            email: decode.email,
            level: decode.level
        })
    }, [])
    

    return (
        <Router>
            <Sidebar user={user}/>
            <Switch>
                <Route exact path='/course' component={CourseTab}></Route>
                <Route path='/chat' component={ChatTab}></Route>
                <Route path='/learn/:id' component={LessonInfo}></Route>
            </Switch>
        </Router>
            
        
    )
}
