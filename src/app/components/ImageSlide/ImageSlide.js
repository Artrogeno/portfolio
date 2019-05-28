import React from 'react'

import './ImageSlide.scss'
const ImageSlide = (props) => {


  return (
    <div className="ImageSlide">
      <div className="slide" style={{'--lines': 16}}>
        <div className="slide__item" style={{'--i': 0}}></div>
        <div className="slide__item" style={{'--i': 1}}></div>
        <div className="slide__item" style={{'--i': 2}}></div>
        <div className="slide__item" style={{'--i': 3}}></div>
        <div className="slide__item" style={{'--i': 4}}></div>
        <div className="slide__item" style={{'--i': 5}}></div>
        <div className="slide__item" style={{'--i': 6}}></div>
        <div className="slide__item" style={{'--i': 7}}></div>
        <div className="slide__item" style={{'--i': 8}}></div>
        <div className="slide__item" style={{'--i': 9}}></div>
        <div className="slide__item" style={{'--i': 10}}></div>
        <div className="slide__item" style={{'--i': 11}}></div>
        <div className="slide__item" style={{'--i': 12}}></div>
        <div className="slide__item" style={{'--i': 13}}></div>
        <div className="slide__item" style={{'--i': 14}}></div>
        <div className="slide__item" style={{'--i': 15}}></div>
      </div>

      <div className="slide_border_one"></div>
      <div className="slide_border_second"></div>
    </div>
  )
}

export default ImageSlide
