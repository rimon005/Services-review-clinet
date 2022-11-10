import React from 'react';

const Contact = () => {
    return (
        <div className='grid lg:grid-cols-2 justify-center items-center' style={{backgroundColor : "#1B2137"}}>
            <div className='p-5'>
                <p className='text-xl my-2'>For Our Honorabe Clients</p>
                <h1 className='text-5xl my-3'>Free Consulting</h1>
                <p className='text-xl my-3 '>Call us 24/7 at (888)123-4567 or fill out the form.</p>
                <p className='text-xl leading-9'>We provide advisory and transactional services to ensure the success of investments. Full-service business law firm in Istanbul, Turkey for international investors. Get Strategic Guidance. Global Network. View Insights.</p>
            </div>
            <div>
            <div className='py-12 p-6 mb-12'>
                    <form >
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                            <input name='title' type="text" placeholder="Your Name" required className="input input-bordered input-accent w-full rounded-none" />
                            <input name='img' type="text" placeholder="Phone" className="input input-bordered input-accent w-full rounded-none" />
                            <input name='title' type="text" placeholder="Email" required className="input input-bordered input-accent w-full rounded-none" />
                            <input name='img' type="text" placeholder="Service Name" className="input input-bordered input-accent w-full rounded-none" />
                        </div>
                        <div className='my-5'>
                            <textarea name='description' required className="textarea textarea-warning w-full rounded-none h-48" placeholder="Description"></textarea>
                        </div>
                        <input type="submit" value="Appointment" className="btn contact-btn rounded-none mr-5 border-none text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;