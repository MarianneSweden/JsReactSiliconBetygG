import React from 'react'
import FaqBlue from '../assets/images/faqblue.svg'
import FaqGreen from '../assets/images/faqgreeen.svg'

const FaqLeft = () => {
  return (
    <div>
      
    <div className="column1">
    <p className="rubrik">Any questions? <br/>Check out the FAQs</p>

    <p className="underrubrik">Still have unanswered questions and need to get in touch?</p>
    
      <div className="iconer">

          <div className="icon1">
            <img className="icon1bild"   src={FaqBlue}/>
            <p className="icon1text">Still have  questions?</p>
          <a className="icon1link" href="#">Contact us</a>
          </div>
        
          <div className="icon2"> 
          <img src={FaqGreen}/>
            <p className="icon2text">Don't like phone calls?</p>
            <a className="icongreen"   href="#" >Contact us</a>
          </div>
      
        </div>
      </div>
    </div>
  )
}

export default FaqLeft
