import React, { useEffect, useState } from 'react';
import ArrowAccordian from '../assets/images/arrow.svg';

const FaqRight = () => {
  const [faqs, setFaqs] = useState([]);  // State för FAQ-data
  const [activeIndex, setActiveIndex] = useState(null);  // State för aktiv (öppen) fråga

  useEffect(() => {
    fetch('https://win24-assignment.azurewebsites.net/api/faq')
      .then((response) => response.json())
      .then((data) => {
        setFaqs(data);
      })
      .catch((error) => console.error('Error fetching FAQs:', error));
  }, []);


  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);  // Stänger om samma fråga klickas igen
  };

  return (
    <div className="column2">
      <section className="accordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={faq.id}>
            <button className="accordion-header" onClick={() => toggleAccordion(index)}>
              <p>{faq.title}</p>
              <img
                src={ArrowAccordian}
                className={`arrow-icon ${activeIndex === index ? 'open' : ''}`}
                alt="Toggle arrow"
              />
            </button>
            {activeIndex === index && (
              <div className="accordion-content">
                <p>{faq.content}</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default FaqRight;













// import React, { useEffect, useState } from 'react';
// import ArrowAccordian from '../assets/images/arrow.svg';

// const FaqRight = () => {
//   const [faqs, setFaqs] = useState([]);  // State för att lagra FAQ-data

//   useEffect(() => {
//     // Gör ett API-anrop för att hämta FAQ-data
//     fetch('https://win24-assignment.azurewebsites.net/api/faq')
//       .then((response) => response.json())
//       .then((data) => {
//         setFaqs(data);  // Lagrar FAQ-datan i state
//       })
//       .catch((error) => console.error('Error fetching FAQs:', error));
//   }, []);

//   return (
//     <div className="column2">
//       <section className="accordion">
//         {faqs.map((faq) => (
//           <div className="accordion-item" key={faq.id}>
//             <button className="accordion-header">
//               <p>{faq.title}</p>
//               <img src={ArrowAccordian} className="arrow-icon" alt="Toggle arrow"/>
//             </button>
//             <div className="accordion-content">
//               <p>{faq.content}</p>
//             </div>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default FaqRight;











// import React, { useState } from 'react';
// import ArrowAccordian from '../assets/images/arrow.svg';

// const faqData = [
//   { question: "Is any of my personal information stored in the App?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ratione repellat molestias possimus alias expedita." },
//   { question: "What formats can I download my transaction history in?", answer: "Hej hej" },
//   { question: "Can I schedule future transfers?", answer: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper..." },
//   { question: "When can I use Banking App services?", answer: "Innehåll för rad 4." },
//   { question: "Can I create my own password that is easy for me to remember?", answer: "Innehåll för rad 5." },
//   { question: "What happens if I forget or lose my password?", answer: "Innehåll för rad 6." },
// ];

// const FaqRight = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="column2">
//       <section className="accordion">
//         {faqData.map((item, index) => (
//           <div key={index} className={`accordion-item ${activeIndex === index ? 'active' : ''}`}>
//             <button className="accordion-header" onClick={() => toggleAccordion(index)}>
//               <p>{item.question}</p>
//               <img src={ArrowAccordian} className="arrow-icon" alt="Accordion Arrow Icon" />
//             </button>
//             {activeIndex === index && (
//               <div className="accordion-content">
//                 <p>{item.answer}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default FaqRight;










// import React from 'react'
// import ArrowAccordian from '../assets/images/arrow.svg'

// const FaqRight = () => {
//   return (
// <div>
    
//   <div className="column2">

//   <section className="accordion">

//   {/* <!-- Rad 1 --> */}
//   <div className="accordion-item">
//     <button className="accordion-header">
//     <p> Is any of my personal information stored in the App? </p>
//       <img src={ArrowAccordian} className="arrow-icon"/>
//     </button>
//     <div className="accordion-content">
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ratione repellat molestias possimus alias expedita.</p>
//     </div>
//   </div>

//   {/* <!-- Rad 2 --> */}
//   <div className="accordion-item">
//     <button className="accordion-header">
//     <p> What formats can I download my transaction history in?</p>
//     <img src={ArrowAccordian} className="arrow-icon"/>
//     </button>
//     <div className="accordion-content">
//       <p>Hej hej</p>
//     </div>
//   </div>

//   {/* <!-- Rad 3 --> */}
//   <div className="accordion-item">
//     <button className="accordion-header">
//       <p>Can I schedule future transfers?</p>
//       <img src={ArrowAccordian} className="arrow-icon"/>
//     </button>
//     <div className="accordion-content">
//       <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
//     </div>
//   </div>

//   {/* <!-- Rad 4 --> */}
//   <div className="accordion-item">
//     <button className="accordion-header">
//       <p>When can I use Banking App services?</p>
//       <img src={ArrowAccordian} className="arrow-icon"/>
//     </button>
//     <div className="accordion-content">
//       <p>Innehåll för rad 4.</p>
//     </div>
//   </div>
// {/* 
//   <!-- Rad 5 --> */}
//   <div className="accordion-item">
//     <button className="accordion-header">
//       <p>Can I create my own password that is easy for me to remember?</p>
//       <img src={ArrowAccordian} className="arrow-icon"/>
//     </button>
//     <div className="accordion-content">
//       <p>Innehåll för rad 5.</p>
//     </div>
//   </div>

//   {/* <!-- Rad 6 --> */}
//   <div className="accordion-item">
//     <button className="accordion-header">

//       <p>What happens if I forget or lose my password?</p>
      
//       <img src={ArrowAccordian} className="arrow-icon"/>
    
//     </button>
    
    
//     <div className="accordion-content">
//       <p>Innehåll för rad 6.</p>
//     </div>
  
//   </div>


// </section>

//     </div>

//     </div>
//   )
// }

// export default FaqRight
