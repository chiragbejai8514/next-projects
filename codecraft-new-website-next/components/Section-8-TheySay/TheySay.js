import './TheySay.css'

import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel'), {
    ssr: false
});


class Apps extends React.Component {
    state = {
        // responsive: {
        //     0: {
        //         items: 1
        //     }
        //     , 576: {
        //         items: 1
        //     }
        //     , 768: {
        //         items: 1
        //     }
        //     , 992: {
        //         items: 1
        //     }
        //     , 1200: {
        //         items: 2
        //     }
        // },
        margin: 10,
        display: false
    };
    componentDidMount() {
        this.setState({ display: true })
    }

    render() {
        return (<div className="section-8  flex-column">
            <div className="container">
                <div className="section-title section-title-1">What</div>
                <div className="section-title section-title-2">They Say</div>{this.state.display ?
                    <div className="owl-container">
                        <OwlCarousel
                            className="owl-theme"
                            margin={this.state.margin}
                            autoplay={true}
                            autoWidth={true}
                            responsive={this.state.responsive}
                            loop={true}
                        >
                            <div className="item ">
                                <div className="comment-box">
                                    <div className="comment-wrapper">
                                        <div className="comment-box-pic">
                                            <img src="../../static/images/section-8/client-1.png" alt="client-1" />
                                        </div>
                                        <div className="comment-box-info">
                                            <div className="comment-box-words">“Professional work yeilding excellent results! Great Job.”</div>
                                            <div className="comment-box-name">Balaji Parami1 </div>
                                            <div className="comment-box-company">CEO Cloudknox </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item ">
                                <div className="comment-box">
                                    <div className="comment-wrapper">
                                        <div className="comment-box-pic">
                                            <img src="../../static/images/section-8/client-1.png" alt="client-1" />
                                        </div>
                                        <div className="comment-box-info">
                                            <div className="comment-box-words">“Professional work yeilding excellent results! Great Job.”</div>
                                            <div className="comment-box-name">Balaji Parami1 </div>
                                            <div className="comment-box-company">CEO Cloudknox </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item ">
                                <div className="comment-box">
                                    <div className="comment-wrapper">
                                        <div className="comment-box-pic">
                                            <img src="../../static/images/section-8/client-1.png" alt="client-1" />
                                        </div>
                                        <div className="comment-box-info">
                                            <div className="comment-box-words">“Professional work yeilding excellent results! Great Job.”</div>
                                            <div className="comment-box-name">Balaji Parami1 </div>
                                            <div className="comment-box-company">CEO Cloudknox </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item ">
                                <div className="comment-box">
                                    <div className="comment-wrapper">
                                        <div className="comment-box-pic">
                                            <img src="../../static/images/section-8/client-1.png" alt="client-1" />
                                        </div>
                                        <div className="comment-box-info">
                                            <div className="comment-box-words">“Professional work yeilding excellent results! Great Job.”</div>
                                            <div className="comment-box-name">Balaji Parami1 </div>
                                            <div className="comment-box-company">CEO Cloudknox </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel> </div> : <div></div>}</div>
        </div>
        );
    }
}

export default Apps