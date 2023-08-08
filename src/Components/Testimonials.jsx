import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


const Testimonials = () => {
    const testimonialsData = [
        {
            name: 'Ricky Limbu',
            message: `Can't wait for the App to launch.`,
            stars: 5,
        },
        {
            name: 'Jane Smith',
            message: 'Nulla gravida arcu eu sapien consectetur, nec commodo felis volutpat.',
            stars: 5,
        },
        {
            name: 'Suhel Smith',
            message: 'Nulla gravida arcu eu sapien consectetur, nec commodo felis volutpat.',
            stars: 5,
        },
        // Add more testimonials as needed
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const renderStars = (numberOfStars) => {
        const filledStars = '★'.repeat(numberOfStars);
        const emptyStars = '☆'.repeat(5 - numberOfStars);

        return filledStars + emptyStars;
    };

    return (
        <div className=' p-10 text-center mb-10'>
            <h3 className='text-[var(--primaryColor)] sm:text-[2rem] font-semibold tracking-widest sm:leading-[3rem]'>What people are saying about <span className='testo_title'>GiveTheNeedy</span></h3>
            <div className='w-full m-auto rounded-lg  mt-10 p-8 md:p-20 leading-10 bg-[var(--primaryColor)]'>
                <Slider {...settings}>
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className={`text-white mb-8`}>
                            <p>{testimonial.message}</p>
                            <p>{renderStars(testimonial.stars)}</p>
                            <p>- {testimonial.name}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;
