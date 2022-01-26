import React from 'react'
import img from '../../images/home/macbook-pro.jpg'

import './Main.css'
function Main() {
    return (
        <div>
            <section class="main-hightlight-setion ">
                <div class="container">
                    <div class="row">
                        <div class=" col-12 ">
                            <div class="model">
                                16-inch model
                            </div>
                            <div class="title">
                                MacBook Pro
                            </div>
                            <div class="description">
                                The best for the brightest.
                            </div>
                            <div class="link-wrapper">
                                <ul>
                                    <li><a href="#">Learn More</a></li>
                                    <li><a href="#">Bay</a></li>
                                </ul>
                            </div>
                            <div class="main-image">
                                <img src={img} />
                            </div>
                        </div>
                    </div>
                </div>

            </section>




        </div>
    )
}
export default Main;