import React ,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useAlert} from 'react-alert'
import axios from 'axios'
import 
    {   Table,
        Button 
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Lessons() {
    const alert = useAlert();
    const [listLessons, setListLessons] = useState([])
    useEffect(() => {
        async function getLessons(){
            const response = await fetch('http://localhost:9000/admin/lessons');
            const responseJSON = await response.json();
            setListLessons(responseJSON.lessons)
        }
        getLessons();
    }, [listLessons])
    const handleDelete = (id)=>{
        console.log(id)
        axios.post(`http://localhost:9000/admin/deleteLesson/${id}`)
        .then(res => {
            alert.success(res.data)
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <h2>Lessons List</h2>
            <div className="container">
                <Button
                    className='mb-3'
                    color='success'
                >
                    <Link
                        className='text-light'
                        to = {`/addLesson`}
                    >
                        Add
                    </Link>
                </Button>
                <Table hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Video ID</th>
                    <th>Level</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                {
                    listLessons.map((lesson,index)=>
                        <tbody>
                            <tr>
                            <th scope="row">{index+1}</th>
                            <td>{lesson.name}</td>
                            <td>
                                <a 
                                    href={`https://vimeo.com/${lesson.videoId}`}
                                >
                                    {lesson.videoId}
                                </a>
                            </td>
                            <td>{lesson.level}</td>
                            <td>
                                <Button color="primary">
                                    <Link 
                                        className='text-light' 
                                        to = {`/lesson/${lesson._id}`}
                                    >
                                        View
                                    </Link>
                                </Button>{' '}
                                <Button
                                    onClick={() => handleDelete(lesson._id)} 
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
