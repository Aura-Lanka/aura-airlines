import React from "react";
import "./Air.css";
import Footer from '../Footer/Footer'
function Home() {
    return (
        <>
            <div>
                {/* <div className="main-heading">
                    <h1 className="main-heading">Helicopters</h1>
                </div> */}
                <div
                    id="carouselExampleControls"
                    className="carousel slide  carsouel1-edit"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="./air.png"
                                className="d-block w-100 h-75"
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/*  */}

                <div className="row row-edit my-5">
                    <h5 className="para-head">Helicopter 01</h5>
                    <div className="col-md-5">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quam, nostrum quaerat accusamus sed reiciendis magni ut adipisci suscipit blanditiis mollitia corrupti, quidem saepe qui placeat quae ratione facere maxime quisquam. Error ipsum magni, ducimus itaque aliquid. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio eligendi dignissimos expedita. Neque voluptas obcaecati architecto id minima, deserunt molestiae voluptatum minus totam. Eligendi deleniti sapiente, omnis molestias consequuntur asperiores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolor natus, sunt dolores reprehenderit, in recusandae tempore rem, aliquid maxime suscipit. Cupiditate porro repellendus, ea ab aspernatur optio! Nesciunt, tenetur.</p>
                    </div>
                    <div className="col-md-5">
                        <div
                            id="carouselExampleControls"
                            className="carousel slide  carsouel1-edit"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        src="https://i.ytimg.com/vi/maufDGFgCZo/maxresdefault.jpg"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item active">
                                    <img
                                        src="https://i.pinimg.com/originals/23/ed/d8/23edd8ffb4cea75191489e1dc9c598f2.jpg"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item active">
                                    <img
                                        src="https://wallpaperaccess.com/full/254381.jpg"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleControls"
                                data-bs-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleControls"
                                data-bs-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row row-edit my-5">
                    <h5 className="para-head">Helicopter 02</h5>
                    <div className="col-md-5">
                        <div
                            id="carouselExampleControls"
                            className="carousel slide  carsouel1-edit"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        src="https://i.ytimg.com/vi/maufDGFgCZo/maxresdefault.jpg"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item active">
                                    <img
                                        src="https://i.pinimg.com/originals/23/ed/d8/23edd8ffb4cea75191489e1dc9c598f2.jpg"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item active">
                                    <img
                                        src="https://wallpaperaccess.com/full/254381.jpg"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleControls"
                                data-bs-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleControls"
                                data-bs-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quam, nostrum quaerat accusamus sed reiciendis magni ut adipisci suscipit blanditiis mollitia corrupti, quidem saepe qui placeat quae ratione facere maxime quisquam. Error ipsum magni, ducimus itaque aliquid. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio eligendi dignissimos expedita. Neque voluptas obcaecati architecto id minima, deserunt molestiae voluptatum minus totam. Eligendi deleniti sapiente, omnis molestias consequuntur asperiores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolor natus, sunt dolores reprehenderit, in recusandae tempore rem, aliquid maxime suscipit. Cupiditate porro repellendus, ea ab aspernatur optio! Nesciunt, tenetur.</p>
                    </div>
                </div>

                <div>
                    <h3 className="sm-heading">Coming Soon</h3>
                </div>
                <div
                    id="carouselExampleControls"
                    className="carousel slide  carsouel1-edit2"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://i.ytimg.com/vi/maufDGFgCZo/maxresdefault.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item active">
                            <img
                                src="https://i.pinimg.com/originals/23/ed/d8/23edd8ffb4cea75191489e1dc9c598f2.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item active">
                            <img
                                src="https://wallpaperaccess.com/full/254381.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                
            </div>
            <Footer/>
        </>
    );
}
export default Home;
