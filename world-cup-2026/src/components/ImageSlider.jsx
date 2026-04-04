import { useEffect, useState } from "react";
import "./pictureSlider.css"

export function ImageSlider({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [pictures]);

    return <><div style ={{ width: "100%", height: "100%"}} className="image-slider">
        <img src={pictures[currentIndex]} className="image-slider-img"/>
        </div>
        <div className="image-slider-buttons">
            <button onClick={() => setCurrentIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1))}>
                &#8592;
            </button>
            <button onClick={() => setCurrentIndex((prev) => (prev === pictures.length - 1 ? 0 : prev + 1))}>
                &#8594;
            </button>
        </div>
        </>
}

