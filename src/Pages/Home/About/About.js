import React from 'react';
import person from '../../../assets/2.1b23bab0.jpg'
import '../Banner/Banner.css'

const About = () => {
    return (
        <div className="hero my-24">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} alt="" className="w-4/5 h-full shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className='text-2xl font-bold about mb-3'>About Us</p>
                    <h1 className="text-4xl font-bold">We are here to fight against any <br />
                     violance with experience</h1>
                    <p className="py-6 ">Driven by a strong need to improve the quality of legal education in Pakistan, our mission is to prepare twenty-first-century lawyers through student-centred affordable, high-quality education, so the students are ready to collaborate with the global legal workforce to make a social impact. </p>
                    <p className="py-6 ">Our graduates have been admitted to top law schools in the US, UK, and Canada for their LL.M. and Bar- at-Law. The school has opened its operations in Lahore, Pakistan and is revolutionising legal education by providing students a platform where they can become leaders by building a wholesome character and horn their critical thinking skills. </p>
                    <button className="btn contact-btn rounded-none mr-5 border-none text-white">More About us</button>
                </div>
            </div>
        </div>
    );
};

export default About;