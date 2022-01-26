import React from 'react'
import Watch from '../../images/icons/watch-series5-logo.png'
import apple from '../../images/icons/apple-card-logo.png'

import './Fourth.css'
function Fourth() {
    return (
        <div>
            <section class="fourth-hightlight-section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="left-side-section col-12 col-md-6">
                            <div class="top-logo">
                                <img src={Watch} />
                            </div>
                            <div class="description-wrapper">
                                With the new Always-On Retina display.You’ve never seen a watch like this.
                            </div>
                            <div class="link-wrapper">
                                <ul>
                                    <li><a href="#">Learn More</a></li>
                                    <li><a href="#">Bay</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="right-side-section col-12 col-md-6">
                            <div class="top-logo">
                                <img src={apple} />
                            </div>
                            <div class="description-wrapper">
                                Get 3% Daily Cash on purchases from Apple using Apple Card.
                            </div>
                            <div class="link-wrapper">
                                <ul>
                                    <li><a href="#">Learn More</a></li>
                                    <li><a href="#">Bay</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
export default Fourth;