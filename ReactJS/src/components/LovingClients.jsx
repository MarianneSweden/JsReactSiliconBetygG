import React, { useEffect, useState } from 'react';
import LoveQuotes from '../assets/images/Lovquotes.svg';
import LoveRating from '../assets/images/Lovrating.svg';

const LovingClients = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Hämtar testimonials-data från API
    fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error('Error fetching testimonials:', error));
  }, []);

  return (
    <section id="lovingclients">
      <div className="lovingcontainer">
 
        <div className="loving-title">
          <p>Clients are <br />Loving Our App</p>
        </div>

 
        <div className="testimonial-list">

          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item">
          
              <img src={LoveQuotes} alt="Quotes Icon" className="quote-icon" />

           
              <div className="testimonial-header">
                <div className="star-rating">
                  {Array.from({ length: 1 }, (_, i) => (
                    <img
                      key={i}
                      src={i < testimonial.starRating ? LoveRating : ''}
                      alt="Star Rating"
                      className="star-icon"
                    />
                  ))}
                </div>
                <div className="testimonial-text">
                  <p>{testimonial.comment}</p>
                </div>
              </div>

          
              <div className="testimonial-author">
                <img className="avatar" src={testimonial.avatarUrl} alt={`${testimonial.author}'s avatar`} />
                <p><strong>{testimonial.author}</strong>, {testimonial.jobRole}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LovingClients;
















// import React from 'react'
// import LoveQuotes from '../assets/images/Lovquotes.svg'
// import LoveRating from '../assets/images/Lovrating.svg'
// import LoveFannie from '../assets/images/Fannie.svg'
// import LoveRating2 from '../assets/images/Lovrating1.svg'
// import LoveAlbert from '../assets/images/Albert.svg'

// const LovingClients = () => {
//   return (
//     <div>
      
      
// <section id="lovingclients">

// <div className="lovingcontainer">

//   <div className="lovingdelett">
//     <p>Clients are <br/>Loving Our App</p>
//   </div>

//   <div id="lovingdelandre">
//     <img src={LoveQuotes}/>
//     <img src={LoveRating}/>
//       <div className="lovingfantext">
//         <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
//       </div>
//         <img className="fannie" src={LoveFannie}/>
//     </div>


//   <div id="lovingdeltredje">
//     <img src={LoveQuotes}/>
//     <img src={LoveRating2}/>
//       <div className="lovingaltext">
//         <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
//       </div>
//       <img class="albert" src={LoveAlbert}/>
  
//   </div>
 
// </div>

// </section>

//     </div>
//   )
// }

// export default LovingClients
