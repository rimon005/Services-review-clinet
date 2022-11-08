import React from 'react';
import img1 from '../../../assets/slide-4.3cce4ef4.jpg'
import img2 from '../../../assets/slide-5.cead71aa.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="carousel w-full pb-12">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />



                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/4">

                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                        <h1 className='text-white text-5xl font-bold banner-heading'>
                            We Fight For Your Justice <br />
                            As Like A Friend
                        </h1>
                    </div>


                    <div className="w-1/2 absolute flex justify-start transform -translate-y-1/2 left-24 top-32">
                        <button className="btn contact-btn rounded-none mr-5 border-none text-white">Contact Us Now</button>
                    </div>

                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/4">
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                        <h1 className='text-white text-5xl font-bold banner-heading'>
                            We Fight For Your Justice <br />
                            As Like A Friend
                        </h1>
                    </div>

                    <div className="w-1/2 absolute flex justify-start transform -translate-y-1/2 left-24 top-32">
                        <button className="btn contact-btn rounded-none mr-5 border-none text-white">Contact Us Now</button>
                    </div>

                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;