import React from "react";
import './styling/home.css';


const Home = () => {

    return (
        <div>
            <h1 style={{ marginLeft: "20px", marginTop: "-50px", fontFamily: "Roboto" }}>100 Years of Memories</h1>

            <div className="cover">

                <a href="/1920s" style={{}}>
                    < p className="year">1920<span id="s1">s</span></p>
                    <img className="coverIMG" src="https://drive.google.com/uc?export=view&id=1t6oIhUjcMeklHhqiiHAt1L9Z3CknsWqu" />
                </a>

                <a href="/1930s">
                    <p className="year">1930<span id="s1">s</span></p>
                    <img src="https://drive.google.com/uc?export=view&id=1gh-w2HzaLlAcd8OpPYwztiThK9e6yFNL" />
                </a>

                <a href="/1940s">
                    <p className="year">1940<span id="s1">s</span></p>
                    <img src="https://drive.google.com/uc?export=view&id=18rBhriLs0DUufN7-9kpe6qXSbP29vJvJ" />
                </a>

                <a href="/1950s">
                    <p className="year">1950<span id="s1">s</span></p>
                    <img src="https://drive.google.com/uc?export=view&id=1SZGn-lU68BiYXtEPcEIV_LzPn6eJ2kHB" />
                </a>

                <a href="/1960s">
                    <p className="year">1960<span id="s1">s</span></p>
                    <img src="https://drive.google.com/uc?export=view&id=1c5lbZ7WAr7hF2SpjtPp4EQrw3p7W0Sm4" />
                </a>

                <a href="/1970s">
                    <p className="year">1970<span id="s1">s</span></p>
                    <img src="https://drive.google.com/uc?export=view&id=1JpmXFmvnm3KqmOgHhNjjK0GvaJJ4_lII" />

                </a>

                <a href="/1980s">
                    <p className="year">1980<span id="s1">s</span></p>
                    <img src="https://drive.google.com/uc?export=view&id=1aUuwNGXOcG7LzUlJQIOJoiH_k27gPpiG" />
                </a>

                <a href="/1990s">
                    <p className="year">1990<span id="s1">s</span></p>
                    <img src="https://drive.google.com/uc?export=view&id=1QBJ_srnLc6rCd6jUwMJGFvgPTXRY-LXA" />
                </a>

                <a href="/2000s">
                    <p className="year">2000<span id="s1">s</span></p>
                    <img src="https://drive.google.com/uc?export=view&id=1wnWhFBGA1W-0CdxhRIHX8P7beybigUie" />
                </a>

                <a href="/2010s">
                    <p className="year">2010<span id="s1">s</span></p>
                    <img src="https://drive.google.com/uc?export=view&id=1Nx0xC1y2mv5pP1lozvt9b6DJUsJnjqne" />
                </a>

                <a href="/2020s">
                    <p className="year">2020<span id="s1">s</span></p>
                    <img src="https://drive.google.com/uc?export=view&id=1hsmHs98eNduUv_fPMzXBAW4AZmHOQeVy" />
                </a>
            </div>
        </div>
    );
}

export default Home;