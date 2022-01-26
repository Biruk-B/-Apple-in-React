import React from 'react'

import img from '../../images/icons/apple-tv-logo.png'
import icons from '../../images/icons/servant-logo.png'
import air from '../../images/home/air-pods.jpg'
import './Fifity.css'

function Fifity() {
    return (
        <div>


            <section class="fifith-hightlifht-section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="left-side-section col-12 col-md-6">
                            <div class="top-logo">
                                <img src={img} />
                            </div>
                            <div class="logo">
                                <img src={icons} />
                            </div>
                        </div>
                        <div class="right-side-setion col-12 col-md-6">
                            <div class="title">
                                AirPods Pro
                            </div>
                            <div class="description">
                                Magic like you’ve never heard.
                            </div>
                            <div class="link-wrapper">
                                <ul>
                                    <li><a href="#">Learn More</a></li>
                                    <li><a href="#">Bay</a></li>
                                </ul>
                            </div>
                            <div class="image">
                                <img src={air} />
                            </div>

                        </div>
                    </div>
                </div>
            </section>




        </div>
    )
}
export default Fifity;
