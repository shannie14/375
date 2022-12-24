import React from "react";
import Gallery from '../gallery/gallery';

const Twenties = () => {
    const galleryImages = [
        {
            img: ' https://drive.google.com/uc?export=view&id=19YJAWowfQ4nFe9xYWAReaRhwiovo07vB',
            title: 'EFK?'
        },
        {
            img: ' https://drive.google.com/uc?export=view&id=1MqhXQPZ_Jb1kUaHgnVG-xJzIL5hxVXHc',
            title: 'Lil, EFK & Tom'
        },
        {
            img: ' https://drive.google.com/uc?export=view&id=1F3xCHt5VB4rDodOqWIT5cwq40lXs9nLG',
            title: 'Leslie, Margaret, Lil, Tom & EFK'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1X0jkutZoqLizVTeW0b5jXwdJQbIfJmaL",
            title: 'fam?'
        }

    ]

    return (
        <div>
            <h1 style={{ marginLeft: "20px", marginTop: "-50px", fontFamily: "Roboto" }}>1920s</h1>
            <Gallery
                galleryImages={galleryImages} />
        </div>
    );
}

export default Twenties;