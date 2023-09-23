import './slider.scss'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Slider = () => {

    return (
        <div id="carouselExampleFade" className="slider carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner carrousel-container">
                <div className="carousel-item active">
                    <div className='slider-content'>
                        <h1 className="slider-title">Slider 1 <span className="slider-title-span">RS Sales</span></h1>
                        <p className="slider-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
                    </div>
                    <div className="slider-image">
                        <img src="https://cdn.pixabay.com/photo/2017/02/07/18/16/living-room-2046668_960_720.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='slider-content'>
                        <h1 className="slider-title">Slider 2 <span className="slider-title-span">Welcome</span></h1>
                        <p className="slider-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
                    </div>
                    <div className="slider-image">
                        <img src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='slider-content'>
                        <h1 className="slider-title">Slider 3 <span className="slider-title-span">30% off</span></h1>
                        <p className="slider-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
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