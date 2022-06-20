// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = (props) => {
    console.log(props);
    return (
        <>
            <div className='card-design'>
                <div className='row'>
                    <div className='pic'>
                        <img src={props.data.photo} className='thumbnail' alt={props.data.name} />
                    </div>
                    <div className='info'>
                        <h3>{props.data.name}</h3>
                        <p>{props.data.phone}</p>
                        <p>{props.data.email}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;