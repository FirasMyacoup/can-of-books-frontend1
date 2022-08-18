import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default class EditBookFormModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }
    handleShow = () => {
        this.setState({
            show: true
        })
    }

    
    render() {
        return (
            <>
                <Button variant="primary" onClick={this.handleShow} > Edit Book </Button>

                <Modal show={this.state.show} onHide={this.handleClose} >

                    <Modal.Header closeButton>
                        <Modal.Title>Add Book</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={this.props.editHandler}>
                            <Form.Group className="mb-3" controlId="bookTitle">
                                <Form.Label>Book Title</Form.Label>
                                <Form.Control type="text" placeholder="Book name" autoFocus />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="bookDescription" >
                                <Form.Label>Book Description</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="bookImgURL" >
                                <Form.Label>Book Image imgURL</Form.Label>
                                <Form.Control type="text" placeholder="Book Image URL" autoFocus />
                            </Form.Group>

                            <Modal.Footer>
                                
                                <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                                <Button type='submit' variant="primary" onClick={this.handleClose}>Save Changes</Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Body>

                </Modal>
            </>
        );

    }
}