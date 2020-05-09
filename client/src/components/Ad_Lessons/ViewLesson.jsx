import React ,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Select from 'react-select';
import axios from 'axios'
import {useAlert} from 'react-alert'
import { useHistory } from "react-router-dom";
import { 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText 
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ViewLesson() {
    let history = useHistory();
    const alert = useAlert();
    const id = match.params.id;
    const url = `http://localhost:9000/admin/lesson/${id}`;
    const [lessonData, setLessonData] = useState({})
    
    const [name, setName] = useState('')
    const [level, setLevel] = useState('')
    const [videoId, setVideoId] = useState('')
    const [levelOption, setLevelOption] = useState({})
    const [selectedTypeOption, setSelectedTypeOption] = useState({})
    const typeOptions = [
        { value : 'user' , label : 'user'},
        { value : 'admin' , label : 'admin'}
    ]
    const options = [
        { value: 'beginner', label: 'beginner' },
        { value: 'intermediate', label: 'intermediate' },
        { value: 'advanced', label: 'advanced' },
      ];
    const handleChange = (selectedOption)=>{
        setSelectedOption(selectedOption)
        console.log(`Option selected:`, selectedOption);

    }
    const handleChangeType = (selectedOption)=>{
        setSelectedTypeOption(selectedOption)
        console.log(`Option selected:`, selectedOption);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('Clicked !')
        axios.post(`http://localhost:9000/admin/updateUser/${id}`,{
            name : name,
            email : email,
            score : score,
            type : selectedTypeOption.value,
            level : selectedOption.value //Level
        })
          .then(
            res => {
                let x = res.data ;
                if(x.success){
                    alert.success(x.success)
                    history.push('/users')
                }else{alert.error(x.error)}
                
            }
            
          )
          .catch(err => console.log(err))
    }
    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then((jsonData) => {
            // jsonData is parsed json object received from url
            // console.log(jsonData.user);
            setUserData(jsonData.user);
            setSelectedOption({
                value : jsonData.user.level,
                label :  jsonData.user.level
            })
            setSelectedTypeOption({
                value : jsonData.user.type,
                label :  jsonData.user.type
            })
            setName(jsonData.user.name)
            setEmail(jsonData.user.email)
            setScore(jsonData.user.score)
        })
        .catch((error) => {
            // handle your errors here
            console.error(error)
        })
        
    },[])
    return (
        <div>
           <h2>View User</h2>
            <div className="container">
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="exampleName">Name</Label>
                    <Input 
                        type="text" 
                        name="name" 
                        id="exampleName" 
                        placeholder="with a placeholder" 
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleemail">Email</Label>
                    <Input 
                        type="email"
                        name="email" 
                        id="exampleemail" 
                        placeholder="email placeholder" 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplescore">Score</Label>
                    <Input 
                        type="number"
                        name="score" 
                        id="examplescore" 
                        placeholder="score placeholder" 
                        value={score}
                        onChange={(e)=> setScore(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleLevel">Level</Label>
                    <Select
                        name='level'
                        value={selectedOption}
                        onChange={handleChange}
                        options={options}
                        // defaultValue={{ value: 'userData.level', label: 'userData.level' }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleLevel">Type</Label>
                    <Select
                        name='level'
                        value={selectedTypeOption}
                        onChange={handleChangeType}
                        options={typeOptions}
                        // defaultValue={{ value: 'userData.level', label: 'userData.level' }}
                    />
                </FormGroup>
                <Button>
                    Update
                </Button>
                </Form>
            </div>
        </div>
    )
}
