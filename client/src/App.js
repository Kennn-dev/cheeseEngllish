import React from 'react';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';

//components
import HomeNavbar from './components/Navbars/HomeNavbar';
import home from './pages/Home/home';
import login from './pages/Login/login'
import register from './pages/Register/register'
import profile from './pages/Profile/profile'
import CourseTab from './components/Courses/CourseTab'
import LessonInfo from './components/Courses/LessonInfo'
function App() {
  // optional cofiguration
  
  return (
      <Router>
          <HomeNavbar/>
          <Switch>
            <Route exact path='/' component={home}></Route>
            <Route exact path='/login' component={login}></Route>
            <Route exact path='/register' component={register}></Route>
            <Route exact path='/profile' component={profile}></Route>
            <Route exact path='/course' component={CourseTab}></Route>
            <Route exact path='/learn' component={LessonInfo}></Route>
          </Switch>
      </Router>
  );
}

export default App;
