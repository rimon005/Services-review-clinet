import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className='question'>
                <h5>Difference between SQL and NoSQL?</h5>
                <p><span>Ans:</span>SQL or the Structured Query Language is the most common and popular programming language for the relational database management system. It is a language designed to extract, store, insert, delete, update and manage data for structured data and strategic analysis. </p>
                <p className='my-2'>NoSQL database provides a mechanism for storage and retrieval of data that is modelled other than tabular form. It was introduced by Carl Stroz in the year 1998 called a Non-relational database. Now, it stands for Not only SQL. It is not limited to storing data in tables, instead, enables the big data to be stored in the structured, unstructured, semi-structured or polymorphic form. </p>
            </div>
            <div className='question'>
                <h5>What is JWT, and how does it work?</h5>
                <p><span>Ans:</span>JWT, or JSON Web Token, is an open standard(RFC 7519) set of claims to share security information or authorization/authentication requests between a client and a server. Each JWT contains encoded JSON objects. JWTs are signed using a cryptographic algorithm by the token’s issuer to ensure that No one could alter the claims after the token is issued and later can be used by the receiving party to verify the token..</p>
            </div>
            <div className='question'>
                <h5>What is the difference between javascript and NodeJS?</h5>
                <p><span>Ans:</span>Do you know that along with CSS and HTML, JavaScript is one of the 3 main things of the World Wide Web? It facilitates interactivity to the web app pages, therefore, it is extremely crucial for web applications. A majority of web applications use this tool and all the major web browsers have a dedicated JavaScript engine to execute this.JavaScript is a popular language which runs inside website browsers as part of documents loaded by that browser. It gives behaviour to the web pages (CSS gives form or look & feel and HTML gives semantic structure). We can say that JS helps in providing advanced web development solutions. However, nothing should restrict JS to run solely inside any web browser.Now being an interpreted programming language, it needs a good interpreter to run V8 is the Google Chrome JS engine. 'Node' can be a front-end for it that can be used to run different scripts of JavaScript outside the web browser.</p>
            </div>
            <div className='question'>
                <h5>How does NodeJS handle multiple requests at the same time?</h5>
                <p><span>Ans:</span>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded. How NodeJS handle multiple client requests?NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
            </div>
        </div>
    );
};

export default Blog;