import { ImageSlider } from "./ImageSlider"

const photo1 = "/images/img1.jpg"
const photo2 = "/images/img2.jpg"
const photo3 = "/images/img3.jpg"
const photo4 = "/images/img4.webp"
const photo5 = "/images/img5.webp"
const photo6 = "/images/img6.jpg"
const photo7 = "/images/img7.webp"
const photo8 = "/images/img8.webp"
const photo9 = "/images/img9.avif"
const photo10 = "/images/img10.avif"
const photo11 = "/images/img11.avif"
const photo12 = "/images/img12.jpg"
const photo13 = "/images/img13.avif"
const photo14 = "/images/img14.avif"
const photo15 = "/images/img15.avif"

const pictures = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15]

function Gallery() {
  return (
    <>
        <div>
            <div className = "photo-gallery">
            <h2> FIFA World Cup: Through Picture</h2>
            <ImageSlider pictures={pictures} />
            </div>
        </div>
    </>
  )
}

export default Gallery