import React, { useState } from 'react';
import './Datetime.css';

export default function Datetime() {

    const [datetime, setDatetime]= useState(new Date());
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    
    setInterval(() => {
        setDatetime(new Date());
    }, 1000)

    return (
        <div className="text-3xl font-bold underline"
        >
            {datetime.toLocaleDateString('fr-FR')}
        </div>
    );
}