import React from 'react'
import LogoIps1 from '../assets/images/logoipsum.svg'
import LogoIps2 from '../assets/images/logoipsum2.svg'
import LogoIps3 from '../assets/images/logoipsum3.svg'
import LogoIps4 from '../assets/images/logoipsum4.svg'
import LogoIps5 from '../assets/images/logoipsum5.svg'
import LogoIps6 from '../assets/images/logoipsum6.svg'

const Logos = () => {
  return (
    <div>
        <section aria-label="our customers" className="logos">
          <div className="container">
            <div className="logo-card">
              <img src={LogoIps1}/>
            </div>
            <div className="logo-card">
              <img src={LogoIps2}/>
            </div>
            <div className="logo-card">
              <img src={LogoIps3}/>
            </div>
            <div className="logo-card">
              <img src={LogoIps4}/>
            </div>
            <div className="logo-card">
              <img src={LogoIps5}/>
            </div>
            <div className="logo-card">
              <img src={LogoIps6}/>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Logos
