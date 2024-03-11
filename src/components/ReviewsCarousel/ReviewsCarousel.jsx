import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import White from "./../../images/White.png"
import "./ReviewsCarousel.css"

function ReviewCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }

    return (
    <div className="carousel">
    <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
              <img  className="img"/>
        <Carousel.Caption>
          <p className="paragraph">"Our journey with this online travel agency was nothing short of magical. From the enchanting streets of Paris to the serene beaches of Bali, every detail was meticulously arranged. One highlight was stumbling upon a hidden gem—a local market in Marrakech where we tasted flavors we never knew existed. The customer service was outstanding, making our trip seamless and unforgettable. Highly recommended for those seeking not just a vacation but a true adventure!"</p>
        </Carousel.Caption>
      </Carousel.Item>
          <Carousel.Item>
              <img  className="img" />
        <Carousel.Caption>
          <p className="paragraph">"We embarked on a soul-enriching adventure with this online travel agency. Exploring the historic ruins of Machu Picchu left us in awe, and the personalized itinerary allowed us to immerse ourselves in the vibrant culture of Kyoto. A unexpected delight was a spontaneous hot air balloon ride over Cappadocia, capturing breathtaking views of the surreal landscape. The agency's attention to detail and flexibility made this trip an absolute joy. We can't wait to plan our next expedition!"</p>
        </Carousel.Caption>
      </Carousel.Item>
          <Carousel.Item>
              <img  className="img"/>
        <Carousel.Caption>
          <p className="paragraph">
            "Our experience with this online travel agency was a perfect blend of luxury and adventure. From the bustling streets of New York to the tranquil beaches of the Maldives, each destination had its unique charm. One standout moment was a surprise private yacht tour along the Amalfi Coast, where we enjoyed a sunset dinner with panoramic views. The agency's dedication to crafting unforgettable experiences sets them apart. If you crave a mix of relaxation and excitement, this is the travel partner for you!"
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default ReviewCarousel