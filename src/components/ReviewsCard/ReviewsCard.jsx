import React, { useEffect, useState } from "react"
import { Card, CloseButton, Container } from 'react-bootstrap'
import "./../../components/ReviewsCard/ReviewsCard.css"
import { FaStar } from "react-icons/fa"

function ReviewsCard({ _id, username, title, description, rating, source, travel, reviews, setReviews, deleteReview }) {

  const [displayRating, setDisplayRating] = useState(rating);

  useEffect(() => {
    setDisplayRating(rating);
  }, [rating])

  const [hover, setHover] = useState()

  return (
      <Card className="ReviewsCard">
        <Card.Img src={source} />
        <CloseButton className="btn-close" onClick={() => deleteReview(_id)} />
        <Card.Body>
          <Card.Text>
            {[...Array(rating)].map((star, index) => {
              const currentRating = index + 1
              return (
                <label>
                  <input
                    type='radio'
                  />
                  <FaStar
                    size={25}
                    color={currentRating <= (hover || rating) ? "#F5DD61" : "#F2F597"}
                  />
                </label>
              )
            })}
          </Card.Text>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{travel?.destination} - {username}</Card.Subtitle>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
  )
}

export default ReviewsCard