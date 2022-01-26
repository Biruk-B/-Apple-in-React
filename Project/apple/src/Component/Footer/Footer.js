import React from 'react'
import img from '../../images/icons/16.png'
import './Footer.css'

function Footer() {
    return (
        <div>


            <footer class="footer-wrapper">
                <div class="container">
                    <div class="upper-text-wrapper">
                        1. Trade In: Tradeâ€‘in values vary. iPhone 11 and iPhone 11 Pro promotional pricing is after tradeâ€‘in
                        of iPhone 8 Plus and iPhone X in good condition. Additional tradeâ€‘in values require purchase of a new
                        iPhone, subject to availability and limits. Must be at least 18. Apple or its trade-in partners reserve
                        the right to refuse or limit any Trade In transaction for any reason. Inâ€‘store tradeâ€‘in requires
                        presentation of a valid, government-issued photo ID (local law may require saving this information).
                        Sales tax may be assessed on full value of new iPhone. Additional terms from Apple or Appleâ€™s trade-in
                        partners may apply. Monthly pricing: Available to qualified customers and requires 0% APR, 24â€‘month
                        installment loan with Citizens One, and iPhone activation with AT&T, Sprint, Tâ€‘Mobile, or Verizon. <a
                            href="#"> Full terms apply. </a>
                    </div>
                    <div class="footer-link-wrapper">
                        <div class="link-wrapper1">
                            <h3>Shop and Learn</h3>
                            <ul>
                                <li><a href="#">Mac</a></li>
                                <li><a href="#">iPad</a></li>
                                <li><a href="#">iPhone</a></li>
                                <li><a href="#">Watch</a></li>
                                <li><a href="#">TV</a></li>
                                <li><a href="#">Music</a></li>
                                <li><a href="#">AirPods</a></li>
                                <li><a href="#">HomePod</a></li>
                                <li><a href="#">iPod touch</a></li>
                                <li><a href="#">Accessories</a></li>
                                <li><a href="#">Gift Cards</a></li>
                            </ul>
                        </div>
                        <div class="link-wrapper2">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="#">Apple Music</a></li>
                                <li><a href="#">Apple News+</a></li>
                                <li><a href="#">Apple TV+</a></li>
                                <li><a href="#">Apple Arcade</a></li>
                                <li><a href="#">Apple Card</a></li>
                                <li><a href="#">iCloud</a></li>
                            </ul>
                            <h3>Account</h3>
                            <ul>
                                <li><a href="#">Manage Your Apple ID</a></li>
                                <li><a href="#">Apple Store Account</a></li>
                                <li><a href="#">iCloud.com</a></li>
                            </ul>

                        </div>
                        <div class="link-wrapper3">
                            <h3>Apple Store</h3>
                            <ul>
                                <li><a href="#">Find a Store</a></li>
                                <li><a href="#">Genius Bar</a></li>
                                <li><a href="#">Today at Apple</a></li>
                                <li><a href="#">Apple Camp</a></li>
                                <li><a href="#">Field Trip</a></li>
                                <li><a href="#">Apple Store App</a></li>
                                <li><a href="#">Refurbished and Clearance</a></li>
                                <li><a href="#">Financing</a></li>
                                <li><a href="#">Apple Trade In</a></li>
                                <li><a href="#">Order Status</a></li>
                                <li><a href="#">Shopping Help</a></li>
                            </ul>
                        </div>
                        <div class="link-wrapper4">
                            <h3>For Business</h3>
                            <ul>
                                <li><a href="#">Apple and Business</a></li>
                                <li><a href="#">Shop for Business</a></li>
                            </ul>
                            <h3>For Education</h3>
                            <ul>
                                <li><a href="#">Apple and Education</a></li>
                                <li><a href="#">Shop for College</a></li>
                            </ul>
                            <h3>For Healthcare</h3>
                            <ul>
                                <li><a href="#">Manage Your Apple ID</a></li>
                                <li><a href="#">Apple Store Account</a></li>
                                <li><a href="#">iCloud.com</a></li>
                            </ul>
                            <h3>For Government</h3>
                            <ul>
                                <li><a href="#">Apple and Education</a></li>
                                <li><a href="#">Shop for College</a></li>
                            </ul>
                        </div>
                        <div class="link-wrapper5">
                            <h3>Apple Values</h3>
                            <ul>
                                <li><a href="#">Find a Store</a></li>
                                <li><a href="#">Genius Bar</a></li>
                                <li><a href="#">Today at Apple</a></li>
                                <li><a href="#">Apple Camp</a></li>
                                <li><a href="#">Field Trip</a></li>
                                <li><a href="#">Apple Store App</a></li>
                            </ul>
                            <h3>About Apple</h3>
                            <ul>
                                <li><a href="#">Find a Store</a></li>
                                <li><a href="#">Genius Bar</a></li>
                                <li><a href="#">Today at Apple</a></li>
                                <li><a href="#">Apple Camp</a></li>
                                <li><a href="#">Field Trip</a></li>
                                <li><a href="#">Apple Store App</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="My-apple">
                        More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or
                        call 1-800-MY-APPLE.
                    </div>
                    <div class="copyright-wrapper">
                        <div class="copyright">
                            Copyright © 2019 Apple Inc. All rights reserved.
                        </div>
                        <div class="footer-link-item">
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Sales and Refunds</a></li>
                                <li><a href="#">Legal</a></li>
                                <li><a href="#">Site Map</a></li>
                            </ul>
                        </div>
                        <div class="footer-country">
                            <div class="flag-country">
                                <img src={img} />
                            </div>
                            <div class="country-name">
                                United States
                            </div>
                        </div>
                    </div>
                </div>
            </footer>



        </div>
    )
}

export default Footer;