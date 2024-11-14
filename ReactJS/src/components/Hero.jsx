import React from 'react'
import AppStore from '../assets/images/appstore.svg'
import GooglePlay from '../assets/images/googleplay.svg'
// import Arrow from '../assets/images/arrow.svg'
import PhonesHero from '../assets/images/phonesHero.svg'


const Hero = () => {
  return (
    <div>

      <section aria-label="showcase" className="showcase">   
        <div className="container space-y-3">
          <h1 className="d4">Manage All Your Money In One App</h1>
        <div className="content space-y-3">
          <p className="text-lg">We offer you a new generation of mobile banking. Save, spend & manage money in your pocket </p>
              
        <div className="market-btns">  
          <a href="#" className="store-btn">
            <span className="sr-only">Download on the App Store</span>
              <img src={AppStore} />
          </a>

          <a href="#" className="store-btn">
            <span className="sr-only">Get it on Google Play</span>
              <img src={GooglePlay} />
          </a>
        </div>

          <div className="more">
            <a href="#features" className="btn-round btn-white">
              {/* <img src={Arrow}/> */}
              <i className="fa-solid fa-chevron-down"></i>
            </a>
            <span>Discover more</span>
          </div>
        </div>
            <div className="phone-img-container">
              <img src={PhonesHero}/>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
