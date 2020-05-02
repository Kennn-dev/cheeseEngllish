import React from 'react'

import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
export default function ScoreBroad(props) {
    return (
        <div>
            <Table hover>
            <thead className = 'thead-dark'>
                <tr>
                <th>Top</th>
                <th>Name</th>
                <th>Score</th>
                </tr>
            </thead>
            {
                props.dataScores
                .sort((a,b)=>b.score - a.score)
                .map((element,index) => 
                    <tbody>
                        <tr>
                        <th scope="row">{index+1}</th>
                        <td>{element.name}</td>
                        <td>{element.score}</td>
                        </tr>
                    </tbody>    
                )
            }
            </Table>

        </div>
    )
}
