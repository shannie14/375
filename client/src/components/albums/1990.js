import React from "react";
import Gallery from '../gallery/gallery';
// import GridImageViewerCaption from 'react-native-grid-image-viewer-with-caption';

const Thirties = () => {
    const galleryImages = [
        {
            img: ' https://drive.google.com/uc?export=view&id=1fHh4RzCHNKJU517D0GCACcAmNRW4XZWR',
            title: 'EFK graduation'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1mnsudCwcbeLxjxyiX5bzR6Dmzg93Lt9T",
            title: 'Ann & her father'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1r4TmjqtImgjQyiDrc69fxIgK7K9EpJHV",
            title: 'Rita & Ann'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1gh-w2HzaLlAcd8OpPYwztiThK9e6yFNL",
            title: 'Portrait of Ann'
        },
        {
            img: "https://drive.google.com/uc?export=view&id=1W4ZBAB52K_tixElpdLy0nAXu0MKjaZNm",
            title: 'Uncle Tom?'
        }

    ]

    return (
        <div>
            <h1 style={{ marginLeft: "20px", marginTop: "-50px", fontFamily: "Roboto" }}>1990s</h1>
            <Gallery
                galleryImages={galleryImages} />
        </div>
    );
}

export default Thirties;
