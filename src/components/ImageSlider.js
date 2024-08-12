import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.css'; 

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const images = [
        {
            url:"https://www.computercareers.org/wp-content/uploads/Software-Engineer-Requirements.jpeg",
            detailsLine1: "Role : Software Developer",
            detailsLine2: "Designing, Coding, Testing"
        },
        {
            url: "https://www.theladders.com/wp-content/uploads/coder_190517.jpg", 
            detailsLine1:"Role : Data Analyst",
            detailsLine2: "Analyzing data to uncover insights"
        },
        {
            url : "https://avecco.ch/wp-content/uploads/2020/10/Data-Engineer.jpg",
            detailsLine1: "Role : Qaulity Analyst",
            detailsLine2: "Ensuring product quality"
        }
    ]; 


    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index} className="slide">
                    <img src={img.url} alt={`Slide ${index}`} />
                        <p className="image-details">{img.detailsLine1}</p>
                        <p className="image-details">{img.detailsLine2}</p>
                </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;