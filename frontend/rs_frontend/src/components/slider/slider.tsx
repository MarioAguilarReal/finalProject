import './slider.scss'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Slider = () => {

    return (
        <div id="carouselExampleFade" className="slider carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner carrousel-container">
                <div className="carousel-item active">
                    <div className='slider-content'>
                        <h1 className="slider-title">Elegant Residence in the City Center</h1>
                        <p className="slider-text">Discover this elegant residence located in the heart of the city. With modern amenities and a convenient location, this property is ideal for those seeking the perfect combination of style and functionality.</p>
                    </div>
                    <div className="slider-image">
                        <img src="https://cdn.pixabay.com/photo/2017/02/07/18/16/living-room-2046668_960_720.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='slider-content'>
                        <h1 className="slider-title">Apartment with Panoramic Sea Views</h1>
                        <p className="slider-text">Enjoy breathtaking panoramic sea views from this charming apartment. With spacious open areas and a private terrace, this place offers the opportunity to relax while gazing at the horizon.</p>
                    </div>
                    <div className="slider-image">
                        <img src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='slider-content'>
                        <h1 className="slider-title">Family Home in a Quiet Neighborhood</h1>
                        <p className="slider-text">This spacious family home is situated in a peaceful neighborhood, perfect for raising your family. With multiple rooms, a lovely garden, and a modern kitchen, this property is ideal for those who value space and comfort.</p>
                    </div>
                    <div className="slider-image">
                        <img src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Slider;
