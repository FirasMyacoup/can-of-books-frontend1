import { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Button } from "react-bootstrap";
import UpdateBook from "./UpdateBook";


export default class CarouselBooks extends Component {
    render() {
        return (
            <Carousel style={{height: '100%' }}>

                {this.props.books.map((value, idx) => {
                    return (

                        <Carousel.Item key={idx} style={{ margin: '50px', height: '50vh', textAlign: 'center' }}>
                            <img className="d-block w-10" src={value.imgURL} alt={value.title} style={{ width: '15%' }} />

                            <Carousel.Caption style={{ display: 'flex', justifyContent: 'space-around', color: 'black', margin: '1%', gap:'2rem'}}>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                                <p>{value.status}</p>
                                <Button onClick={() => this.props.handleDelete(value._id)}>Delete Book</Button>
                                <UpdateBook book={value}/>
                            </Carousel.Caption>

                        </Carousel.Item>

                    )
                })
                }
            </Carousel>

        )
    }
}; 