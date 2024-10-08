import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {imgs} from "./images/data.js"
import slideStyle from "../crousel_slide/slide.module.css"

function Slid() {
  return (
    <>
    <Carousel
    autoPlay={true}
    infiniteLoop={true}
    showIndicators={false}
    showThumbs={false}
    showStatus={false}
    >
      {imgs.map((imgItem)=>(
       <img src={imgItem} alt="images" />

      ))}
    </Carousel>
    <div className={slideStyle['border_shade']}> 
      <p>hello</p>
    </div>

    </>
  )
}

export default Slid