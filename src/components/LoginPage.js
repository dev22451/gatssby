import React from 'react'
// import Daco from '../Images/Daco.png';
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import device from '../Images/device.png';
import LoginForm from './LoginForm';



function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char = props.type === "next" ? (<IoIosArrowForward style={{ color: "lightgray" }} />) : (<IoIosArrowBack style={{ color: "lightgray" }} />);
    return (
        <span className={className} onClick={props.onClick}>
            {char}
        </span>
    );
}

function LoginPage() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-10 shadow-lg offset-md-1 bg-white rounded main-container">

                    <div className="row">
                        <div className="col-md-7 first-containers">
                            <h1>PandaBiz</h1>
                            <div className="slider d-">
                                <Slider
                                    prevArrow={<Arrow type="prev" />}
                                    nextArrow={<Arrow type="next" />}
                                    dots={true}
                                    autoplay={true}
                                    fade={false}
                                    pauseOnHover={true}
                                    // customPaging={customPaging}
                                    dotsClass={"slick-dots slick-thumb"}
                                >

                                    <img src={device} alt="" />

                                    <img src={device} alt="" />

                                    <img src={device} alt="" />
                                </Slider>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LoginPage