import React from "react"
import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import uploadServices from "../../../services/upload.services"
import { useNavigate, useParams } from "react-router-dom"
import ReviewsServices from "./../../../services/reviews.services"
import "./NewReviewForm.css"
import { FaStar } from "react-icons/fa"
import { AuthContext } from "../../../context/auth.context"

const NewReviewForm = () => {

    const { user } = useContext(AuthContext)

    const { travelId } = useParams()

    const [newReview, setNewReview] = useState({
        source: "",
        title: "",
        description: "",
        rating: null,
        username: user?.username,
        travel: travelId
    })

    const navigate = useNavigate()

    const [loadingImg, setLoadingImg] = useState(false)

    const handleFormSubmit = (e) => {

        e.preventDefault()

        ReviewsServices
            .newReview(travelId, newReview)
            .then(() => navigate(`/reviews`))
            .catch(err => console.log(err))
    }

    const handleChangeReview = (e) => {
        const { value, name } = e.target
        setNewReview((prevState) => ({
            ...prevState,
            [name]: name === 'rating' ? parseInt(value, 10) : value,
        }))
    }

    const handleFileUpload = e => {

        setLoadingImg(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setNewReview({ ...newReview, source: res.data.cloudinary_url })
                setLoadingImg(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImg(false)
            })
    }

    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="form-rating">
                {
                    [...Array(5)].map((star, index) => {
                        const currentRating = index + 1
                        return (
                            <label key={index}>
                                <input
                                    type='radio'
                                    name='rating'
                                    value={currentRating}
                                    onMouseEnter={() => setRating(currentRating)}
                                    onChange={handleChangeReview}
                                />
                                <FaStar
                                    className="star"
                                    size={25}
                                    color={currentRating <= (hover || newReview.rating) ? "#F5DD61" : "#F6F7C4"}
                                    onMouseEnter={() => setHover(currentRating)}
                                    onMouseLeave={() => setHover(null)}
                                />
                            </label>
                        )
                    })
                }
            </Form.Group>
            <Form.Group controlId="form-title">
                <Form.Control
                    as="textarea"
                    rows={1}
                    placeholder="Title"
                    onChange={handleChangeReview}
                    value={newReview.title}
                    name="title" />
            </Form.Group>
            <Form.Group controlId="form-description">
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Describe your experience with us here!"
                    onChange={handleChangeReview}
                    value={newReview.description}
                    name="description" />
            </Form.Group>
            <Form.Group>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>
            <Button variant="danger" type="submit" disabled={loadingImg}>{loadingImg ? "Loading Image..." : "Create review"}</Button>
        </Form>

    )
}
export default NewReviewForm