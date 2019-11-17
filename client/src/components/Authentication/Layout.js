import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default ({ children }) => (
    <>
        <Container>
            <Row className="justify-content-md-center">
                <Col md="6">
                    {children}
                </Col>
            </Row>
        </Container>
    </>
)