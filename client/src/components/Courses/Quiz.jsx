import React from 'react';
import {
    Card, CardBody,Button,
    Breadcrumb,BreadcrumbItem,
    ListGroup, ListGroupItem
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Quiz() {
    return (
        <div>
            <Card>
                <CardBody>
                <Breadcrumb>
                    <BreadcrumbItem active>Question here</BreadcrumbItem>
                </Breadcrumb>
                <ListGroup className='mt-3'>
                    <ListGroupItem>Answer here</ListGroupItem>
                    <ListGroupItem>Answer here</ListGroupItem>
                    <ListGroupItem>Answer here</ListGroupItem>
                    <ListGroupItem>Answer here</ListGroupItem>
                </ListGroup>
                </CardBody>
            </Card>
            
            <Button className='mt-3'>Submit</Button>
        </div>
    )
}
