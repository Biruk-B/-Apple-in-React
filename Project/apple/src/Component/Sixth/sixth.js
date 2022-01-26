import React from 'react'
import mackbook from '../../images/home/macbook-pro.jpg'
import ipad from '../../images/icons/new-ipad-logo.png'
import news from '../../images/home/new-ipad.jpg'





import './sixth.css'


function sixth() {
    return (
        <div>


            <section class="sixth-hightlight-section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="left-side-section col-12 col-md-6">
                            <div class="model">
                                16-inch model
                            </div>
                            <div class="title">
                                MacBook Pro
                            </div>
                            <div class="description-wrapper">
                                The best for the brightest.
                            </div>
                            <div class="link-wrapper">
                                <ul>
                                    <li><a href="#">Learn More</a></li>
                                    <li><a href="#">Bay</a></li>
                                </ul>
                            </div>
                            <div class="image">
                                <img src={mackbook} alt="" />
                            </div>
                        </div>
                        <div class="right-side-section col-12 col-md-6">
                            <div class="top-logo">
                                <img src={ipad} />
                            </div>
                            <div class="description-wrapper">
                                Like a computer. Unlike any computer.
                            </div>
                            <div class="link-wrapper">
                                <ul>
                                    <li><a href="#">Learn More</a></li>
                                    <li><a href="#">Bay</a></li>
                                </ul>
                            </div>
                            <div class="image">
                                <img src={news} />
                            </div>

                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default sixth
