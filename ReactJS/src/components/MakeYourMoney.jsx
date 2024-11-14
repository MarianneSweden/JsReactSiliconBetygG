import React from 'react'
import MakeYourButton from '../assets/images/makeyourbutton.svg'
import MakeYourMobil1 from '../assets/images/makeyourmoneymobil1.svg'

const MakeYourMoney = () => {
  return (
    <div>
    
   
<section id="makeyourmoney">

  <div className="makeyourcontainer">

    <div className="makeyourmoney">
      <h2>Make your money <br /> transfer simple and clear</h2>
    </div>

      <div className="makeyourtre">
        <div className='testar-tre'>
        <i className="fa-regular fa-dollar-sign"></i>
        <p>Banking transactions are free for you</p>
      </div>

      <div className='testar-tre'>
        <i className="fa-regular fa-dollar-sign"></i>
        <p> No monthly cash commission</p>
      </div>

      <div className='testar-tre'>
        <i className="fa-regular fa-dollar-sign"></i>
        <p> Manage payments and transactions online</p>
      </div>

      <div className="makeyourbutton">
        <img src={MakeYourButton}/>
      </div>

  </div>
    </div>

        <div>
        <img className="makeyourmobil1" src={MakeYourMobil1}/>
        </div>
  
    </section>

  </div>

  )
}

export default MakeYourMoney
