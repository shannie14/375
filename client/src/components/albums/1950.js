import React from "react";
import Gallery from '../gallery/gallery';
// import GridImageViewerCaption from 'react-native-grid-image-viewer-with-caption';

const Fifties = () => {
    const galleryImages = [

        {
            img: "https://drive.google.com/uc?export=view&id=1w5CHbYiw8qgkyqguJyZTZVW5Icdt9_CK",
            title: 'Fred on Radio Flyer '
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1QG99Vs_NQuzBTKW_d3osI3urQo6GHSIj",
            title: 'Ken portrait'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1-vMkBJ5wGvAt5YHetsJbC14kDmmg2WOe",
            title: 'Fred reading to Ken in swing'
        },
        {
            img: ' https://drive.google.com/uc?export=view&id=1pBZxdK3mtyZvUCAgY5GY5ni37p-w3oeY',
            title: 'Carol?, Fred, Pete? &EFK holding Ken'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1mgI8-voTI6H1gOMYqOW9pc_WpPGmmoGw",
            title: 'Ken toddler'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1d10bHbhbBxgNLusVLj2m14KQ9b7XRL5l",
            title: 'EFK'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1WHiSSsh6raNNnl_2Kk-XaEB5z03Dnx8x",
            title: 'Ken, Ann & Fred'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1xrnKr1YP1Y5NOZ4y_tk3aX4bXStGsy8x",
            title: 'Fred & Ken at piano'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1dwyvC3iVnYZeBA0BRlVqpFXoBK9rCuA0",
            title: 'Ken, EFK & Fred'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=12a24nPyiRb6KuHUwtKijbsS4EloopUoH",
            title: 'Ann, EFK coffee'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1o8VfmPP6M-252IFH3g_c3fdnDiTMr14J",
            title: 'Ann, ERK, Fred & Ken'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=19Sa5BwO-trUHqH1MpjH1AfkDDLyXovn1",
            title: 'Ken & Fred as Superman & Zorro'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=15nMW66tTUDMZPHbpqfBryj-fe8hLIy9e",
            title: 'Lake Huron'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1lI10zAmUlayHrcGK2_9dnmmnUK35H8h5",
            title: 'Webster house?'
        }


    ]

    return (
        <div>
            <h1 style={{ marginLeft: "20px", marginTop: "-50px", fontFamily: "Roboto" }}>1950s</h1>
            <Gallery
                galleryImages={galleryImages} />
        </div>
    );
}

export default Fifties;
