import React, { useState } from 'react';
import './contact.scss';
import { useParams, useNavigate } from 'react-router-dom';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        console.log('Form submitted');
    };


    const clearForm = () => {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    const handleGoBack = () => {
        navigate(-1); // Use the history object to go back to the previous page.
    };

    return (




        <div className="container">
            <div className='heading-container'> 
            
            <a href="#!" className=" text-decoration-none d-block mb-2" onClick={handleGoBack}>
                <i className="fa-solid fa-chevron-left"></i>Back
            </a>
            <h2>Get in Touch!</h2>
            </div>

            <p className="subtitle">Fill out the form below to send an email about a property</p>
            <div className='emailForm'>
                <form id="emailForm" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <br />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <br />
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <br />
                    <textarea
                        id="message"
                        rows={4}
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    <div className="form-buttons">
                        <button type="submit" className="btn btn-primary">
                            Send email
                        </button>
                        <button type="button" className="btn btn-primary" onClick={clearForm}>
                            Reset
                        </button>
                    </div>
        </form>
            </div>
        </div >
    );
};

export default Contact;
