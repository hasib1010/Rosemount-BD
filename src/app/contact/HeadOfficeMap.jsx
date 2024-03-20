"use client"
import React from 'react';

const GoogleMapSearch = () => {
    const handleSearch = () => {
        const searchTerm = 'Rosemount BD, 107, (Ground Floor Bir Uttam C R Datta Road, (Ex, Sonargaon Road, Dhaka 1205 ';
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchTerm)}`;
        window.open(googleMapsUrl, '_blank');
    };

    return (
        <button onClick={handleSearch}>    107, Bir Uttam <br /> CR Datta Road (G.F.)  Room No:5 <br /> Dhaka-1205, Bangladesh</button>
    );
};

export default GoogleMapSearch;
