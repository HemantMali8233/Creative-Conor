import React from 'react'
import { Link } from 'react-router-dom'
import Asthetic1 from './AstheticImage1.avif'
import Asthetic2 from './AstheticImage2.avif'
import LayeredPSD from './Layered PSD.png'
import MountainSunset from './MountainSunset.jpg'
import Pen from './Pen.png'
import Roket from './Roket.png'
import portfolio from './Portfolio'
import contact from './Contact'
import blog from './Blog'

const Home = () => {
  return (
    <div>
        
        <div>

            

            <main>
                <div class="FirstPicDiv">
                    <img src={MountainSunset} alt="MountainSunset" id="FirstPic"/>
                    <div class="PictureText1">
                        A MINIMAL CLEAN
                    </div>

                    <div class="PictureText2">
                        LAYOUT FOR WEB DESIGN
                    </div>

                    <div class="PictureText3">
                        Get Started
                    </div>

                </div>

                <div id="GridInfo">
                    <div class="ClassGridImages">
                        <img src={Pen} alt="pen" />
                        <div>
                            <b>EASY TO EDIT</b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quo perferendis facere, dicta dolore qui eum ipsam iste, ut ducimus similique, culpa minima explicabo cum alias voluptatum? Cumque, recusandae quo.</p>
                        </div>

                    </div>

                    <div class="ClassGridImages">
                        <img src={LayeredPSD} alt="LayeredPSD" />
                        <div>
                            <b>LAYERED PSD</b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quo perferendis facere, dicta dolore qui eum ipsam iste, ut ducimus similique, culpa minima explicabo cum alias voluptatum? Cumque, recusandae quo.</p>
                        </div>

                    </div>

                    <div class="ClassGridImages">
                        <img src={Roket} alt="Rokect" />
                        <div>
                            <b>READY TO GO</b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quo perferendis facere, dicta dolore qui eum ipsam iste, ut ducimus similique, culpa minima explicabo cum alias voluptatum? Cumque, recusandae quo lo.</p>
                        </div>

                    </div>

                </div>

                <div class="FeaturedContent">
                    <p id="FeaturedContentTitle"> FEATURED CONTENT </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam cupiditate dignissimos praesentium, sunt expedita quaerat a asperiores
                        assumenda magni natus iusto commodi eveniet aliquid alias maxime. Ex labore doloremque provident. Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Est dolor dignissimos quae vero eius facilis laborum! Itaque accusantium dolorum voluptate voluptatibus veniam illo quod corrupti,
                        blanditiis nihil iusto aspernatur maxime.

                    </p>

                    <iframe width="700" height="500" src="https://www.youtube.com/embed/q1vN28g7OhI?si=LrTHdz3K7IOm_qk9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>


                <div class="GridInfo2">
                    <div class="ClassGridImages2">
                        <div class="GridImage">
                            <img src={Asthetic1} alt="Asthetic Image" />
                        </div>
                        <div class="GridImageContent">
                            <h3> Secondary Content </h3>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatibus omnis libero ut maxime voluptate eligendi! Aperiam, atque dicta ut id sapiente, laboriosam maiores repellat repudiandae aliquam, optio error dolore</p>
                            <button> View More</button>
                        </div>
                    </div>

                    <div class="ClassGridImages2">
                        <div class="GridImage">
                            <img src={Asthetic2} alt="Asthetic Image" />
                        </div>
                        <div class="GridImageContent">
                            <h3> Secondary Content </h3>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatibus omnis libero ut maxime voluptate eligendi! Aperiam, atque dicta ut id sapiente, laboriosam maiores repellat repudiandae aliquam, optio error dolore</p>
                            <button> View More</button>
                        </div>
                    </div>

                </div>

                <div class="HeardEnough">
                    <h2> HEARD ENOUGH ?</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi aliquam aperiam et placeat. Amet laborum eveniet adipisci aut blanditiis fuga maiores mollitia, ut, suscipit quos, natus nemo assumenda quam dolore.</p>
                    <button>Get Started  </button>
                </div>

            </main>

            <footer>
                <div class="FooterGridLeftSide">
                    <p>Copyright 2014 Simply All rights reserved  </p>
                    <a href="#"> Terms of Services </a>|
                    <a href="#"> Privacy </a>

                </div>

                <div class="FooterGrid">
                    <div class="FooterGridColumn">
                        <h3>Company</h3>
                        <p>About US</p>
                        <p>Meet the team</p>
                        <p>What we do </p>
                        <p> Carrers</p>

                    </div>

                    <div class="FooterGridColumn">
                        <h3>Company</h3>
                        <p>About US</p>
                        <p>Meet the team</p>
                        <p>What we do </p>
                        <p> Carrers</p>

                    </div>

                    <div class="FooterGridColumn">
                        <h3>Company</h3>
                        <p>About US</p>
                        <p>Meet the team</p>
                        <p>What we do </p>
                        <p> Carrers</p>

                    </div>

                </div>
            </footer>

        </div>
      
    </div>
  )
}

export default Home
