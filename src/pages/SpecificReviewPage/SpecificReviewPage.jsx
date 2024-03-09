import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { Container, Card, Row, Col } from "react-bootstrap"

import ReviewsServices from "../../services/reviews.services"


const SpecificReviewPage = () => {

    const [review, setReview] = useState({})

    const { reviewId } = useParams()

    useEffect(() => {
        getReview()
    }, [reviewId])

    const getReview = () => {
        ReviewsServices
            .getReview(reviewId)
            .then(({ data }) => setReview(data))
            .catch(err => console.error(err))
    }


    return (
        <Container className="SpecificReviewPage">
            <h1> {review.title}</h1>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>Description: {review.description} </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SpecificReviewPage