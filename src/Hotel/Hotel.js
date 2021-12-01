import React from 'react'
import HotelStyle from './HotelStyle.css'
import { useHistory } from "react-router-dom";
// images
import singleRoom from './img/single-room.jpeg'
import doubleRoom from './img/double-room.jpeg'
import lux from './img/lux.jpeg'
import vip from './img/vip.jpeg'
import galleryimg1 from './img/gallery-img-1.jpeg'
import galleryimg2 from './img/gallery-img-2.jpeg'
import galleryimg3 from './img/gallery-img-3.jpeg'
import galleryimg4 from './img/gallery-img-4.jpeg'
import galleryimg5 from './img/gallery-img-5.jpeg'
import galleryimg6 from './img/gallery-img-6.jpeg'


function Hotel() {
    const history = useHistory()

    return (
        <>
            <div class="navbar">

                <input type="checkbox" class="checkbox" id="click" hidden />

                <div class="sidebar">
                    <label for="click">
                        <div class="menu-icon">
                            <div class="line line-1"></div>
                            <div class="line line-2"></div>
                            <div class="line line-3"></div>
                        </div>
                    </label>

                    <ul class="social-icons-list">
                        <li>
                            <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#" class="social-link"><i class="fab fa-google-plus-g"></i></a>
                        </li>
                        <li>
                            <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                        </li>
                    </ul>

                    <div class="back-btn">
                        <div onClick={() => {
                            history.push({ pathname: "/" });
                        }}>
                            Exit
                        </div>
                    </div>
                </div>

                <nav class="navigation">
                    <div class="navigation-header">
                        <h1 class="navigation-heading">+ Grand Hotel +</h1>

                        <form class="navigation-search">
                            <input type="text" class="navigation-search-input" placeholder="Search..." />
                            <button class="navigation-search-btn">
                                <i class="fas fa-search"></i>
                            </button>
                        </form>
                    </div>

                    <ul class="navigation-list">
                        <li class="navigation-item">
                            <a href="#" class="navigation-link">home</a>
                        </li>
                        <li class="navigation-item">
                            <a href="#" class="navigation-link">about us</a>
                        </li>
                        <li class="navigation-item">
                            <a href="#" class="navigation-link">rooms</a>
                        </li>
                        <li class="navigation-item">
                            <a href="#" class="navigation-link">events</a>
                        </li>
                        <li class="navigation-item">
                            <a href="#" class="navigation-link">customers</a>
                        </li>
                        <li class="navigation-item">
                            <a href="#" class="navigation-link">contact</a>
                        </li>
                    </ul>

                    <div class="copyright">
                        <p>&copy; 2021. Grand Hotel. All Rights Reserved</p>
                    </div>
                </nav>
            </div>

            <header class="header">
                <div class="brand">
                    <div>
                        <img src="img/crown.png" width="80" />
                    </div>
                    <h3 class="hotel-heading">Grand Hotel</h3>
                </div>

                <div class="banner">
                    <h1 class="banner-heading">Welcome to Grand Hotel</h1>
                    <p class="banner-paragraph">Make your life luxurious</p>
                    <button class="banner-button">Check Out</button>
                </div>
            </header>

            {/* About us */}

            <div class="about-us">
                <div class="about-us-content">
                    <h1 class="about-us-heading">About Us</h1>
                    <div class="underline">
                        <div class="small-underline"></div>
                        <div class="big-underline"></div>
                    </div>
                    <h3 class="sub-heading">Grand Hotel</h3>
                    <p class="about-us-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusantium exercitationem qui quis perspiciatis totam dolores. Numquam inventore temporibus recusandae? Eos eaque quia eius culpa nulla vitae, cumque enim voluptates!</p>
                    <button class="about-us-btn">
                        Read More
                        <i class="fas fa-angle-double-right btn-arrow"></i>
                    </button>
                </div>
            </div>

            {/* Room */}

            <section class="rooms">
                <div class="common-header">
                    <h1 class="common-heading">Rooms In Grand Hotel</h1>
                </div>

                <div class="rooms-cards-wrapper">
                    <div class="room-card">
                        <img src={singleRoom} class="room-img" />
                        <div class="room-card-content">
                            <h4 class="room-card-heading">Single Room</h4>
                            <p class="room-card-paragraph">Lorem ipsum dolor sit amet.</p>
                            <p class="room-price">$99.00</p>
                            <button class="room-card-btn">
                                Book Now
                                <i class="fas fa-angle-double-right btn-arrow"></i>
                            </button>
                        </div>
                    </div>
                    <div class="room-card">
                        <img src={doubleRoom} class="room-img" />
                        <div class="room-card-content">
                            <h4 class="room-card-heading">Double Room</h4>
                            <p class="room-card-paragraph">Lorem ipsum dolor sit amet.</p>
                            <p class="room-price">$199.00</p>
                            <button class="room-card-btn">
                                Book Now
                                <i class="fas fa-angle-double-right btn-arrow"></i>
                            </button>
                        </div>
                    </div>
                    <div class="room-card">
                        <img src={lux} class="room-img" />
                        <div class="room-card-content">
                            <h4 class="room-card-heading">Lux</h4>
                            <p class="room-card-paragraph">Lorem ipsum dolor sit amet.</p>
                            <p class="room-price">$299.00</p>
                            <button class="room-card-btn">
                                Book Now
                                <i class="fas fa-angle-double-right btn-arrow"></i>
                            </button>
                        </div>
                    </div>
                    <div class="room-card">
                        <img src={vip} class="room-img" />
                        <div class="room-card-content">
                            <h4 class="room-card-heading">VIP</h4>
                            <p class="room-card-paragraph">Lorem ipsum dolor sit amet.</p>
                            <p class="room-price">$399.00</p>
                            <button class="room-card-btn">
                                Book Now
                                <i class="fas fa-angle-double-right btn-arrow"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="rooms-btn-wrapper">
                    <button class="rooms-btn">Check All Rooms</button>
                </div>
            </section>

            <footer class="footer">
                <div class="main-part">
                    <div class="footer-list-wrapper">
                        <h3 class="footer-heading">Grand Hotel</h3>
                        <ul class="footer-list">
                            <li class="footer-list-item">
                                <a href="#" class="footer-list-link">
                                    support@grandhotel.com
                                </a>
                            </li>
                            <li class="footer-list-item">
                                <a href="#" class="footer-list-link">
                                    New York, Main Street 123
                                </a>
                            </li>
                            <li class="footer-list-item">
                                <a href="#" class="footer-list-link">
                                    Tel: +123 456 789
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="footer-list-wrapper">
                        <h3 class="footer-heading">Explore</h3>
                        <ul class="footer-list">
                            <li class="footer-list-item">
                                <a href="#" class="footer-list-link">
                                    Home
                                </a>
                            </li>
                            <li class="footer-list-item">
                                <a href="#" class="footer-list-link">
                                    About Us
                                </a>
                            </li>
                            <li class="footer-list-item">
                                <a href="#" class="footer-list-link">
                                    Rooms
                                </a>
                            </li>
                            <li class="footer-list-item">
                                <a href="#" class="footer-list-link">
                                    Events
                                </a>
                            </li>
                            <li class="footer-list-item">
                                <a href="#" class="footer-list-link">
                                    Customers
                                </a>
                            </li>
                            <li class="footer-list-item">
                                <a href="#" class="footer-list-link">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="contact">
                        <h3 class="footer-heading">Contact</h3>
                        <p>Sign Up for News</p>
                        <form class="footer-form">
                            <input type="text" class="footer-input" placeholder="Your email..." />
                            <button class="footer-btn">Sign Up</button>
                        </form>
                    </div>

                    <div class="gallery">
                        <h3 class="footer-heading">Gallery</h3>
                        <div class="gallery-images">
                            <div class="image-wrapper">
                                <img src={galleryimg1} class="footer-image" />
                            </div>
                            <div class="image-wrapper">
                                <img src={galleryimg2} class="footer-image" />
                            </div>
                            <div class="image-wrapper">
                                <img src={galleryimg3} class="footer-image" />
                            </div>
                            <div class="image-wrapper">
                                <img src={galleryimg4} class="footer-image" />
                            </div>
                            <div class="image-wrapper">
                                <img src={galleryimg5} class="footer-image" />
                            </div>
                            <div class="image-wrapper">
                                <img src={galleryimg6} class="footer-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Hotel
