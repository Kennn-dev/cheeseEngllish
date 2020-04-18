import React ,{useState}from 'react';
import { useHistory } from "react-router-dom";
import {useAlert} from 'react-alert';
import axios from 'axios';

import { 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input,
  Spinner 
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export const FormLogin = () => {
  const alert = useAlert();
  let history = useHistory();
  const [form, setForm] = useState({
    email:'',
    password: '',
    loading: false
  })
  
  const updateField = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setForm({
      ...form,
      loading: true
    });
    const userData ={
      email: form.email,
      password: form.password
    }
    axios.post('http://localhost:9000/users/login',userData)
    .then(res =>{
      const data = JSON.stringify(res.data);
      const useData = JSON.parse(data);
      if(useData.error){
        setForm({
          ...form,
          loading: false
        })
        alert.error(useData.error);
        return useData;
      }else{
        setForm({
          ...form,
          loading: false
        })
        localStorage.setItem('userToken',useData);
        alert.success('Login success !');
        history.push('/profile');
        return useData;
      }
      // localStorage.setItem('userToken',data);
      // console.log(`Data : ${data}`);
      // console.log(`Token : ${data.token}`);
      // console.log(`Error : ${Object.data['error']}`);
      // history.push('/profile');
      //   return data;
    })
    .catch(err => {
      console.log(err);
    })
  }

 
  return (
    <Form 
      className='mt-5'
      onSubmit={handleSubmit}
    >
    <h1>Login</h1>
    { form.loading ? 
      <Spinner color="warning" />
      : null
    }
      <FormGroup >
        <Label for="exampleEmail">Email</Label>
        <Input onChange={updateField}  type="email" name="email" id="exampleEmail" value={form.email} placeholder="Email " required />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input onChange={updateField} type="password" name="password" id="examplePassword" value={form.password} placeholder="Password" required/>
      </FormGroup>
      <Button type='submit'>Submit</Button>
      </Form>
  );
}


