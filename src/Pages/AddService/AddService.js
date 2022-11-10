import React, { useEffect } from 'react';

const AddService = () => {


    useEffect(()=> {
        document.title = "Barrister | AddServices"
    } ,[])


    const handleAddService = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const img = form.img.value;
        const description = form.description.value;

        const service = {
            title,
            img,
            description
        }

        fetch('https://services-review-server.vercel.app/services', {
            method: 'POST' , 
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert("Service add successfully")
            form.reset()
        })
        .catch(e => console.error(e))

    }
    return (
        <div>
            <div>
                <div className='py-12 bg-gray-200 p-6 mb-12'>
                    <form onSubmit={handleAddService} >
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                            <input name='title' type="text" placeholder="title" required className="input input-bordered input-accent w-full rounded-none" />
                            <input name='img' type="text" placeholder="img URL" className="input input-bordered input-accent w-full rounded-none" />
                        </div>
                        <div className='my-5'>
                            <textarea name='description' required className="textarea textarea-warning w-full rounded-none h-48" placeholder="description"></textarea>
                        </div>
                        <input type="submit" value="Add Service" className="btn rounded-none review-btn btn-outline w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;