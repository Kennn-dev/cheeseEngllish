import React ,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useAlert} from 'react-alert'
import axios from 'axios'
import 
    {   Table,
        Button 
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function User() {
    const alert = useAlert();
    const [listUser, setListUser] = useState([])
    useEffect(() => {
        async function getUsers(){
            const response = await fetch('http://localhost:9000/admin/users');
            const responseJSON = await response.json();
            setListUser(responseJSON.users)
        }
        getUsers();
    }, [listUser])
    const handleDelete = (id)=>{
        console.log(id)
        axios.post(`http://localhost:9000/admin/deleteUser/${id}`)
        .then(res => {
            alert.success(res.data)
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <h2>Users List</h2>
            <div className="container">
                <Table hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                {
                    listUser.map((user,index)=>
                        <tbody>
                            <tr>
                            <th scope="row">{index+1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Button color="primary">
                                    <Link 
                                        className='text-light' 
                                        to = {`/viewUser/${user._id}`}
                                    >
                                        View
                                    </Link>
                                </Button>{' '}
                                <Button
                                    onClick={() => handleDelete(user._id)} 
                                    color="danger"
                                >
                                        Delete
                                </Button>{' '}
                            </td>
                            </tr>
                        </tbody>
                    )
                }
                </Table>
            </div>
        </div>
    )
}
