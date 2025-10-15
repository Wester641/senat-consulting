import React from 'react'
import './style.css'
import Accordion from 'react-bootstrap/Accordion'
import {Card,Button} from 'react-bootstrap'

const FaqSection = () => {
    return(
        <section className="faq-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <span>FAQ</span>
                            <h2>Frequently Asked Question</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <Accordion className="choose-info" defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle  as={Button} variant="link" eventKey="0">
                                    Over 20 Years of Expeirence 
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>Lorem ipsum dolor sit amet, conubia eu tellus blandit at tincidunt fibus quam, urna bibendum lobortis platea, nec sed quis, vestibulum lortis adipisicing, nunc mattis.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Honest and Dependable
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>Lorem ipsum dolor sit amet, conubia eu tellus blandit at tincidunt fibus quam, urna bibendum lobortis platea, nec sed quis, vestibulum lortis adipisicing, nunc mattis.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                    2000 + Expert Lawyers
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body>Lorem ipsum dolor sit amet, conubia eu tellus blandit at tincidunt fibus quam, urna bibendum lobortis platea, nec sed quis, vestibulum lortis adipisicing, nunc mattis.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FaqSection;