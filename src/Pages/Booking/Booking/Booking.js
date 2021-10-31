import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div>
            <h2>this is detail of {service.name}</h2>
            <h2>this is a book {serviceId}</h2>
        </div>
    );
};

export default Booking;