import React ,{useState} from 'react';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';

//components
import HomeNavbar from './components/Navbars/HomeNavbar';
import home from './pages/Home/home';
import login from './pages/Login/login';
import register from './pages/Register/register';
import Profile from './pages/Profile/Profile';
import admin from "./pages/Admin/admin";

//Context
// export const ScoreContext = React.createContext()

// const initialState = 0 
// const reducer = ( state , action ) =>{
//   switch(action.type) {
//     case 'updateScore' : 
//       return state = action.value
//     default : return state
//   }
// }

function App() {
  // const [ score , dispatch ] = useReducer(reducer , initialState)
  // optional cofiguration
  const [ isLogin , setIsLogin ] = useState(false)
  const changeLoginStatus = () => {
    setIsLogin(!isLogin)
  }
  return (    
      // <ScoreContext.Provider 
      //   value ={{
      //     scoreState : score,
      //     scoreDispatch : dispatch
      //   }}
      // >
      <Router>
          <HomeNavbar isLogin={isLogin} changeLoginStatus={changeLoginStatus}/>
          <Switch>
            <Route exact path='/' component={home}></Route>
            <Route exact path='/login' component={login} ></Route>
            <Route exact path='/register' component={register}></Route>
            <Route exact path='/profile' component={Profile}></Route>
            <Route exact path='/admin' component={admin}></Route>
          </Switch>
      </Router>
      // </ScoreContext.Provider>
  );
}

export default App;
