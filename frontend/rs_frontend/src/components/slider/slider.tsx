import './slider.scss'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Slider = () => {

    return (
        <div id="carouselExampleFade" className="slider carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner carrousel-container">
                <div className="carousel-item active">
                    <img src="https://cdn.pixabay.com/photo/2017/02/07/18/16/living-room-2046668_960_720.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.pixabay.com/photo/2018/05/14/23/22/place-3401862_960_720.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
        </div>
    );
}
export default Slider;