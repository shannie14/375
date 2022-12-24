import React from "react";
import Gallery from '../gallery/gallery';
// import GridImageViewerCaption from 'react-native-grid-image-viewer-with-caption';

const Eighties = () => {
    const galleryImages = [
        {
            img: "https://drive.google.com/uc?export=view&id=1x0-ksk5PufE37BylU2hDmWfa2kRwiQ1p",
            title: 'Jessica, Ann, Dolores, Ken, EFK & Becky'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1UwycimKDq9XFlwzdRnq2pY-BbzkFyEXK",
            title: 'Ann in Port Austin snow, Dec 1985'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1XFmKPSFW3ltl18Z_enAVMBN7V_0oGzrP",
            title: 'Fred, EFK, Ann & Ken'
        },
        {
            img: ' https://drive.google.com/uc?export=view&id=1AnHaFeSNdfDW8UxtCmS51zj34L8bihUZ',
            title: 'Ann, Ken, EFK at Ken\'s wedding'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=19RDoZA4mcQT3QRHW6bzfG3qV0akq1yti",
            title: 'Fred & Shannon, July 1986'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1Q5PX7VHwIlCP8kINgjwdo8g3IxffHdR6",
            title: 'Becky, Ann, Jessica, Jon'
        },

        {
            img: "https://drive.google.com/uc?export=view&id=13nMHrZE18lgDjKEOML1t6gWzQKh37IqZ",
            title: 'Ann, Shannon, EFK'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1F_lpDaF9q8N15M5yDZ2z9jVo030JgImE",
            title: 'Ann & EFK in front? of Lakehouse'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1oQ9FAa4dTSWbN_ppJziUpOQOTqAj0aGP",
            title: 'Shannon & Kristine, April 7, 1989'
        }


    ]

    return (
        <div>
            <h1 style={{ marginLeft: "20px", marginTop: "-50px", fontFamily: "Roboto" }}>1980s</h1>
            <Gallery
                galleryImages={galleryImages} />
        </div>
    );
}

export default Eighties;
