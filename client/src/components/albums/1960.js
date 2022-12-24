import React from "react";
import Gallery from '../gallery/gallery';

const Sixties = () => {
    const galleryImages = [
        {
            img: "https://drive.google.com/uc?export=view&id=1D89GNJESooFSsGgpBUSFhnKzYQFuNtJD",
            title: 'Fred & EFK'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1arVLBqGXSa_agUm-jWRYE_pXMCBMRY24",
            title: 'EFK + Ann, May 1964'
        },
        {
            img: ' https://drive.google.com/uc?export=view&id=1Bymv5MB3JD4YEeXigw7LaG5jluVi_0Mi',
            title: 'Fred + Ken sailing'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1X5oRr2soOYTRKbTOVkQ9QfISKb69cqES",
            title: 'EFK & Ann on Christmas'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=14wBcwkix-A79dlbs9V9ivce-1GdYmJE2",
            title: 'Fred portrait'
        },

        {
            img: ' https://drive.google.com/uc?export=view&id=1dI_mM-nVCOSgJKdBWzuwWU1ReJ9WCtkb',
            title: 'Gail'
        },

        {
            img: "https://drive.google.com/uc?export=view&id=1398yKCdCfQQoml3yYvs_v0TIg7tT3CkQ",
            title: 'Grandma Hagen & statue that is still at Lakehouse'
        }

    ]

    return (
        <div>
            <h1 style={{ marginLeft: "20px", marginTop: "-50px", fontFamily: "Roboto" }}>1960s</h1>
            <Gallery
                galleryImages={galleryImages} />
        </div>
    );
}

export default Sixties;
