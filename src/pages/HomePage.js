import React from 'react'
import GalleryImages from '../components/GalleryImages'
import HeaderMessages from '../components/HeaderMessages';
import OurProducts from '../components/OurProducts';

function HomePage() {
    return (
        <div className="w-screen">
            <HeaderMessages/>
            <GalleryImages/>
            <OurProducts/>
        </div>
    )
}


export default HomePage
