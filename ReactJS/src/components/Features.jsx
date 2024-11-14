import React from 'react'
import AppFeaturesMobile from '../assets/images/AppFuturesMobil.svg'
import AppFeaturesIcon1 from '../assets/images/AppFeaturesIcon1.svg'
import AppFeaturesIcon4 from '../assets/images/AppFeaturesIcon4.svg'
import AppFeaturesIcon2 from '../assets/images/AppFeaturesIcon2.svg'
import AppFeaturesIcon5 from '../assets/images/AppFeaturesIcon5.svg'
import AppFeaturesIcon3 from '../assets/images/AppFeaturesIcon3.svg'
import AppFeaturesIcon6 from '../assets/images/AppFeaturesIcon6.svg'

const Features = () => {
  return (
    <div>
      
      <section aria-label="App features" class="features">
      <div className="container">

        <div className="iphone">
          <img src={AppFeaturesMobile}/>
        </div>

        <div className="text space-y-1">
            <h2 className="h1">App Features</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas.
              Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, atnec lacus.</p>
        
            <div className="features-grid">

              <div className="features-card">
                  <div className="icon-container">
                    <img src={AppFeaturesIcon1}/>
                  </div>
                  <div className="space-y-1">
                    <h3 className="h5">Easy Payments</h3>
                    <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                  </div>
              </div>

              <div className="features-card">
                <div className="icon-container">
                  <img src={AppFeaturesIcon4}/>
                </div>
                <div className="space-y-1">
                  <h3 className="h5">Data Security</h3>
                  <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
                </div>
              </div>

              <div className="features-card">
                <div className="icon-container">
                  <img src={AppFeaturesIcon2}/>
                </div>
                <div className="space-y-1">
                  <h3 className="h5">Cost Statistics</h3>
                  <p>Mattis urna ultricies non amet,purus in auctor non. Odio vulputate ac nibh.</p>
                </div>
              </div>

              <div className="features-card">
                <div className="icon-container">
                  <img src={AppFeaturesIcon5}/>
                </div>
                <div className="space-y-1">
                  <h3 className="h5">Support 24/7</h3>
                  <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                </div>
              </div>

              <div className="features-card">
                <div className="icon-container">
                  <img src={AppFeaturesIcon3}/>
                </div>
                <div className="space-y-1">
                  <h3 className="h5">Regular Cashback</h3>
                  <p>Sit facilisis dolor arcu, fermentumvestibulum arcu elementum imperdiet eleifend.</p>
                </div>
              </div>

              <div className="features-card">
                
                <div className="icon-container">
                  <img src={AppFeaturesIcon6}/>
                </div>

                <div className="space-y-1">
                  <h3 className="h5">Top Standards</h3>
                  <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                </div>

              </div>


        </div>
      </div>
   </div>

      
  </section>

    </div>
  )
}

export default Features
