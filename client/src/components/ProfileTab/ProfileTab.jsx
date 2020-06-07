import React ,{useState,useEffect}from 'react'
import jwt_decode from 'jwt-decode';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css';
import Sidebar from './Sidebar';
import CourseTab from '../Courses/CourseTab';
import LessonInfo from '../Courses/LessonInfo';
import ChatTab from '../Chat/ChatTab';
import {updateNewScore} from '../../Actions/score'
import UserProfile from '../UserProfile/UserProfile'
// import profile from '../../pages/Profile/profile'

export default function ProfileTab() {
    const [user, setUser] = useState({
        name:'',
        email:'',
        level:''
    })

    const dispatch = useDispatch();
    const score = useSelector(state => state.score)

    useEffect(() => {
        
        const token = localStorage.userToken;
        const decode = jwt_decode(token);
        setUser({
            ...user,
            name: decode.name,
            email: decode.email,
            level: decode.level,
            score: decode.score
        })
        const score = decode.score;
        const action = updateNewScore(score)
        dispatch(action)
    }, [])
    
    

    return (
        <Router>
            <Sidebar user={user} score={score}/>
            <Switch>
                {/* <Route exact path='/profile' component={profile} user={user}></Route> */}
                <Route exact path='/course' component={CourseTab}></Route>
                <Route path='/chat' component={ChatTab}></Route>
                <Route path='/profile' component={UserProfile}></Route>
                <Route path='/learn/:id' component={LessonInfo}></Route>
            </Switch>
        </Router>
            
        
    )
}
