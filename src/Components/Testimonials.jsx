import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


const Testimonials = () => {
    const testimonialsData = [
        {
            name: <><b>Ricky Limbu</b><br />Nagaland, India</>,
            message: `Can't wait for the App to launch.`,
            stars: 5,
        },
        {
            name: <><b>Wabang Longkumer</b><br />Nagaland, India</>,
            message: `A very noble endeavour, eagerly waiting for it's launch.`,
            stars: 5,
        },
        {
            name: <><b>R John Zeliang </b><br />Nagaland, India</>,
            message: `Giving does not only precede receiving; it is the reason for it!No one has ever become poor from giving....`,
            stars: 5,
        },
        {
            name: <><b>Neitho sekhose</b><br />Nagaland, India</>,
            message: `A very exhilarating advantage awaits us. Can't hold back to set afloat`,
            stars: 5,
        },
        {
            name: <><b>M. M. L</b> <br />Illinois, USA</>,
            message: `What a great initiative to connect people, strengthen communities and simply, extend kindness. Keep it up!`,
            stars: 5,
        },
        {
            name: <><b>Mongzeung Mpom</b><br />Nagaland, India</>,
            message: `If you see anyone in need and you have what they need, take it as an opportunity to bless them`,
            stars: 5,
        },
        {
            name: <><b>Nise Meruno</b><br />Nagaland, India</>,
            message: `This is such a wonderful initiative created by the young genius Zaiyigum. I am so proud of him.
            This is going to help so many people in so many ways. An easy-to-use app all set to enrich someone's life. Sending my best wishes.
            God bless!!`,
            stars: 5,
        },
        {
            name: <><b>Kehodi Yoho</b><br />Nagaland, India</>,
            message: `Amazing app it is going to be! Need of the hour!`,
            stars: 5,
        },
        {
            name: <><b>Chef Joel Basumatari</b><br />Nagaland, India</>,
            message: `Giving is the most effective way of receiving blessing!`,
            stars: 5,
        },
        {
            name: <><b>Raksha S Reddy</b><br />Netherlands</>,
            message: `"Give the Needy" is a thought-provoking app with a noble mission, featuring a user-friendly interface and seamless donation process, making it a fantastic platform for making a meaningful difference in the world. Highly recommended!`,
            stars: 5,
        },
        {
            name: <><b>Neikuolie Khezhie</b><br />Nagaland, India</>,
            message: `May this app be a spark that ignites Love across all communities. God bless team Zeliang Codetech!`,
            stars: 5,
        },
        {
            name: <><b>Wapang Aier</b><br />Nagaland, India</>,
            message: `Through our willingness to help others, we can learn to be happy rather than depressed. 
            All the best to the whole team, especially the little programming prodigy Zaiyigum in particular.`,
            stars: 5,
        },
        {
            name: <><b>Lezo Putsure</b><br />Nagaland, India</>,
            message: `This is a wonderful platform to connect between the giver and the receiver. We believe this will help many individuals/
            Organisations and people to connect and support each other.`,
            stars: 5,
        },
        {
            name: <><b>Imtisunup Longchar</b><br />Nagaland, India</>,
            message: `"Give the Needy" is a commendable initiative with a dedicated team working to provide assistance to those in need. Their compassion and commitment are inspiring, and I wish them every success in their noble mission to make a positive impact on the lives of those less fortunate.`,
            stars: 5,
        },
        {
            name: <><b>Capt Deepak Kapoor</b><br />Kolkata, India</>,
            message: `Great way to pay forward to human kind - three cheers to the platform`,
            stars: 5,
        },
        {
            name: <><b>Senti Longkumer</b><br />Ohio, USA</>,
            message: `My best wishes to GiveTheNeedy and to young Zaiyigum Zeliang. May this venture prove to be a true blessing to you and to those whose lives you uplift through this app.`,
            stars: 5,
        },
        {
            name: <><b>Imtizulu Jamir</b><br />Nagaland, India</>,
            message: `"Give the needy" app will definitely bring all the people together and make this world a better place to live in, a home filled with so much love and support for each other.`,
            stars: 5,
        },
        {
            name: <><b>Bobby Cash, Country Music Artist</b><br />Dehradun, India</>,
            message: `GTN is a great initiative by young Zaiyigum, to make a positive difference in so many precious lives. My prayers and best wishes for it's launch a success!`,
            stars: 5,
        },
        // Add more testimonials as needed
    ];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    const renderStars = (numberOfStars) => {
        const filledStars = '★'.repeat(numberOfStars);
        const emptyStars = '☆'.repeat(5 - numberOfStars);

        return filledStars + emptyStars;
    };

    return (
        <div className=' p-10 text-center m-auto mb-10'>
            <h3 className='text-[var(--primaryColor)] sm:text-[2rem] font-semibold tracking-widest sm:leading-[3rem]'>What people are saying about <span className='testo_title'>GiveTheNeedy</span></h3>
            <div className='w-full m-auto rounded-lg  mt-10 p-8 md:p-20 leading-2  bg-[var(--primaryColor)]'>
                <Slider {...settings}>
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className={`text-white m-auto`}>
                            <p className='m-auto'>{testimonial.message}</p>
                            <p>{renderStars(testimonial.stars)}</p>
                            <p>{testimonial.name}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;
