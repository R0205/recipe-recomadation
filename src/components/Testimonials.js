import React from 'react'
import Slider from 'react-slick';

const Testimonials = () => {



    const testimonials = [
        {
            name: 'John Doe',
            feedback: 'This recipe app has changed my cooking game! The recipes are easy to follow and delicious.',
            image: '/asset/user1.jpg', // Replace with actual user images
        },
        {
            name: 'Jane Smith',
            feedback: 'I love the variety of recipes available. The app is user-friendly and looks great!',
            image: '/asset/user2.jpg', // Replace with actual user images
        },
        {
            name: 'Emily Johnson',
            feedback: 'Fantastic app! I have tried several recipes, and they all turned out amazing.',
            image: '/asset/user3.jpg', // Replace with actual user images
        }
    ];

    //Settings for the slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
    }
    return (
        <div className='testimonials-section' >
            <h2>What Our Users Say</h2>
            <Slider {...settings} className='testimonials-container'>
                {testimonials.map((testimonial, index) => {
                    return (
                        <div className='testimonial-card' key={index}>
                            <img src={testimonial.image} alt={testimonial.name} className='testimonial-image' />
                            <h3 className='testimonial'>{testimonial.name}</h3>
                            <p className='testimonial-feedback'>"{testimonial.feedback}"</p>
                        </div>
                    )

                })}
            </Slider>
        </div>
    )
}

export default Testimonials