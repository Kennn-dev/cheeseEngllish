import React ,{useState,useEffect}from 'react'
import jwt_decode from 'jwt-decode';
import { ListGroup, ListGroupItem} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div>
            <ListGroup>
                <ListGroupItem>Name :{user.name}</ListGroupItem>
                <ListGroupItem>Email :{user.email}</ListGroupItem>
                <ListGroupItem>Level :{user.level}</ListGroupItem>
            </ListGroup>
        </div>
    )
}
