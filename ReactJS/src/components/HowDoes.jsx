import React from 'react'
import HowDoesMobil1 from '../assets/images/HowDoesMobil1.svg'
import HowDoesMobil2 from '../assets/images/HowDoesMobil2.svg'
import HowDoesMobil3 from '../assets/images/HowDoesMobil3.svg'

const HowDoes = () => {
  return (
    <div>
      
<section aria-label="How does it work" className="carousel-section">
  <div className="container space-y-3">
    <h2 className="h1">How Does it Work?</h2>

    <div className="carousel">
      <div className="carousel-item">
        <img src={HowDoesMobil1} />
      </div>

      
        <div className="carousel-item">
          <img src={HowDoesMobil2}/>
        </div>

       
          <div className="carousel-item">
            <img src={HowDoesMobil3}/>
          </div>
    </div>

          <div className="text">
            <h3 className="h4">Latest transaction history</h3>
            <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
          </div>

    </div>
    </section>
  </div>



  )
}

export default HowDoes
