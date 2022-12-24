import React from "react";
import Gallery from '../gallery/gallery';
// import GridImageViewerCaption from 'react-native-grid-image-viewer-with-caption';

const Seventies = () => {
    const galleryImages = [
        {
            img: "https://drive.google.com/uc?export=view&id=1EvwvnY3mZvNUdrjURxB2P59dlFPOd-f-",
            title: 'Fred & Dolores wedding w/ parents'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1IlIE3MRMMVq0PKXk0_uVsxqiHZWPfAlC",
            title: 'Ann, Becky?, EFK'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1NwULaeZVOymVY77aesGH3AxIZN3vseli",
            title: 'EFK, Becky, Ann'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1NHmjp-rO0j-croXhj6fOY4VPVHu47Mjh",
            title: 'EFK & Ann carving turkey'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=110FfKvrQxCnJYLXsm4FUC-HiJPIgF0A4",
            title: 'EFK & Ann birthday'
        },
        {
            img: ' https://drive.google.com/uc?export=view&id=1q2txJiwGfQtYCK2nOBR-0sVoI-RNBXXt',
            title: 'EFK, Jon, Ann, Ken & Becky'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1QQmifLoAPT088OyxmMURWUrY9cOGnsZh",
            title: 'EFK, Ann & Ken Christmas'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1_QBhmhefIzHA0Femc-rcudeZ0pnmRnWK",
            title: 'Hagen siblings'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1mWduTYQcPajSxoZycndGcXBmFyTRXPWo",
            title: 'Port Austin OGs, Aug 1972'
        }

    ]



    return (
        <div>
            <h1 style={{ marginLeft: "20px", marginTop: "-50px", fontFamily: "Roboto" }}>1970s</h1>
            <Gallery
                galleryImages={galleryImages} />
        </div>
    );
}

export default Seventies;
