import React ,{useState}from 'react';
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
export  const FormRegister = () => {
    let history = useHistory();
    const [form, setForm] = useState({
        name:'',
        email:'',
        password:'',
        passwordConfirm:''
    })
    
    const handleChange = (e) =>{
        setForm({
            ...form,
          [e.target.name] : e.target.value
        })
      }
    const handleSubmit = function(e){
        e.preventDefault();
        const newUser = {
            name: form.name,
            email:form.email,
            password:form.password,
            passwordConfirm:form.passwordConfirm
        }
        axios.post('http://localhost:9000/users/register',newUser)
        .then(res =>{
            history.push('/login');
        })
        .catch(err =>{
            console.log(err);
        })
    }
      return(
        <Form 
            className='mt-5'
            onSubmit={handleSubmit}
        >
        <h1>Register</h1>
        <FormGroup>
          <Label>Name</Label>
          <Input 
            type="text" 
            name="name" 
                
            value={form.name} 
            placeholder="Your name ..."
            onChange={handleChange}
            />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input 
            type="email" 
            name="email" 
             
            value={form.email}
            placeholder="Your email ..."
            onChange={handleChange} 
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input 
            type="password" 
            name="password" 
             
            value={form.password} 
            placeholder="Password ..."
            onChange={handleChange} 
          />
        </FormGroup>
        <FormGroup>
          <Label>Password Confirm</Label>
          <Input 
            type="password" 
            name="passwordConfirm" 
             
            value={form.passwordConfirm} 
            placeholder="Password Confirm ..."
            onChange={handleChange} 
          />
        </FormGroup>
        <Button type='submit'>Register</Button>
        </Form>
      )
  }
