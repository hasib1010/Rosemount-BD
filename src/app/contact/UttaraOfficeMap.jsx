"use client"
import React from 'react';

const GoogleMapSearch2 = () => {
    const handleSearch = () => {
        const searchTerm = '6 Rd No. 33, Dhaka 1230';
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchTerm)}`;
        window.open(googleMapsUrl, '_blank');
    };

    return (
        <button onClick={handleSearch}>       Road No. 33 <br /> House No. 6, 1st Floor <br /> Sector-7 Uttara <br /> Dhaka-1230</button>
    );
};

export default GoogleMapSearch2;
