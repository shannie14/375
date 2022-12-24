import React from "react";
import Gallery from '../gallery/gallery';
// import GridImageViewerCaption from 'react-native-grid-image-viewer-with-caption';

const Thirties = () => {
    const galleryImages = [
        {
            img: ' https://drive.google.com/uc?export=view&id=1bDHfxbQmp-1aRu3pQuc-JemuxrID0GbU',
            title: 'EFK & LaSalle car'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1b1JWjI0FMwa2nhKZ04eb9mUFrI7YnL3x",
            title: 'EFK hunting - Nov. 2, 1940'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1XZIpO9bzCBzOapZhgt-LpaV_Vl_ZXu6a",
            title: 'Ann portrait'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=12uxh-z6Gduh6KPgPjzJB0utkNnjXbrXw",
            title: 'Ann skating'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1iY7-GxVcYPP2a2SrX6yNKbHBm3yoJhVN",
            title: 'Ann'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1IvB8oxKuFHExM2oZBx018xDwyiytFp90",
            title: 'Ann & ?'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1RWuHLWSSiH1-eDTMpTZlfTmTlVls4Sm8",
            title: 'Ann graduation'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1AKJAsYdSORXPxWYHh65hY0qC_js8tRSn",
            title: 'Hagen sisters & mother'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1VtWXTorcwtco_ykQ_oYTuHaIaYJ6TjW0",
            title: 'Ann at her sister Cleta\'s wedding'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1A_bp-JWCiOGcu-oLjgOgragpThjtqfee",
            title: 'Mary, Kate, Ann (top) Cyril, Bobby, Mother, Cleta, Ray'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1T_AHTrww2Z-eiFbVdia3a563IhnEEDvo",
            title: 'EFK, Ann, Fred\'s baptism'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=18rBhriLs0DUufN7-9kpe6qXSbP29vJvJ",
            title: 'Frederick Jonathan Kendall, Aug 10, 1949'
        }

    ]

    return (
        <div>
            <h1 style={{ marginLeft: "20px", marginTop: "-50px", fontFamily: "Roboto" }}>1940s</h1>
            <Gallery
                galleryImages={galleryImages} />
        </div>
    );
}

export default Thirties;
