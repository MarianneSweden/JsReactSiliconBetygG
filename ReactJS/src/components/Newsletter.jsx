import React, { useState } from 'react';
import Bell from '../assets/images/notification.svg';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Är innehållet giltigt?
  const validateEmail = (email) => {
    if (!email) {
      return "E-postfältet kan inte vara tomt";
    } else if (!email.includes('@')) {
      return "E-postadressen måste innehålla '@'";
    }
    return "";
  };

  // Hantera när användaren klickar på prenumerera
  const handleSubscribe = async () => {
    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
      setSuccess('');
      return;
    }

    setError('');
    setSuccess('');

    // Skicka e-post till API:et
    try {
      const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Skickar e-post som JSON i body
      });

      if (response.ok) {
        setSuccess('Prenumeration lyckades!');
        setEmail(''); // Tömmer fältet efter lyckad prenumeration
      } else {
        setError('Prenumeration misslyckades. Försök igen senare.');
      }
    } catch (err) {
      setError('Ett fel uppstod. Kontrollera din internetanslutning och försök igen.');
    }
  };

  return (
    <div className="newsletter-outer">
      <div className="newsletter-inner">
        <section id="newsletter">
          <img className="bell" src={Bell} alt="notification bell" />
          <div className="rubrik">
            <p>Subscribe to our newsletter to stay informed about latest updates</p>
          </div>
          <div className="subscribe-grupp">
            <input
              className="input"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="subscribe-button" onClick={handleSubscribe}>
              Subscribe
            </button>
          </div>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
        </section>
      </div>
    </div>
  );
};

export default Newsletter;








// import React, { useState } from 'react';
// import Bell from '../assets/images/notification.svg';

// const Newsletter = () => {
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSubscribe = async () => {
//     // Prenumerationslogik här
//   };

//   return (
//     <div className="newsletter-outer"> {/* Yttre container för svart bakgrund */}
//       <div className="newsletter-inner"> {/* Inre container för grå sektion */}
//         <section id="newsletter">
//           <img className="bell" src={Bell} alt="notification bell" />
//           <div className="rubrik">
//             <p>Subscribe to our newsletter to stay informed about latest updates</p>
//           </div>
//           <div className="subscribe-grupp">
//             <input
//               className="input"
//               type="email"
//               placeholder="Your Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <button className="subscribe-button" onClick={handleSubscribe}>
//               Subscribe
//             </button>
//           </div>
//           {error && <p className="error-message">{error}</p>}
//           {success && <p className="success-message">{success}</p>}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Newsletter;





// import React, { useState } from 'react';
// import Bell from '../assets/images/notification.svg';

// const Newsletter = () => {
//   const [email, setEmail] = useState(''); // Hantera e-postinput
//   const [error, setError] = useState(''); // Hantera eventuella felmeddelanden
//   const [success, setSuccess] = useState(''); // Hantera framgångsmeddelanden

//   // Enkel valideringsfunktion för e-post
//   const validateEmail = (email) => {
//     if (!email) {
//       return "E-postfältet kan inte vara tomt";
//     } else if (!email.includes('@')) {
//       return "E-postadressen måste innehålla '@'";
//     }
//     return "";
//   };

//   // Hantera när användaren klickar på prenumerera
//   const handleSubscribe = async () => {
//     const validationError = validateEmail(email);
//     if (validationError) {
//       setError(validationError);
//       setSuccess(''); // Töm framgångsmeddelandet om det finns ett fel
//       return;
//     }

//     setError(''); // Nollställ felmeddelanden

//     // Skicka e-post till ditt web API
//     try {
//       const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }), // Skicka e-post i rätt JSON-format
//       });

//       if (response.ok) {
//         setSuccess('Prenumeration lyckades!'); // Meddelande vid framgång
//         setEmail(''); // Töm fältet efter framgångsrik prenumeration
//       } else {
//         setError('Prenumeration misslyckades. Försök igen senare.');
//       }
//     } catch (err) {
//       setError('Ett fel uppstod. Kontrollera din internetanslutning och försök igen.');
//     }
//   };

//   return (
//     <div>
//       <section id="newsletter">
//         <img className="bell" src={Bell} alt="notification bell" />

//         <div className="rubrik">
//           <p>
//             Prenumerera på vårt nyhetsbrev för att hålla dig uppdaterad om de senaste nyheterna
//           </p>
//         </div>

//         <div className="subscribe-grupp">
//           <input
//             className="input"
//             type="email"
//             placeholder="Din e-post"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <button className="subscribe-button" onClick={handleSubscribe}>
//             Prenumerera
//           </button>
//         </div>

//         {error && <p className="error-message">{error}</p>}
//         {success && <p className="success-message">{success}</p>}
//       </section>
//     </div>
//   );
// };

// export default Newsletter;













// import React from 'react'
// import Bell from '../assets/images/notification.svg'

// const Newsletter = () => {
//   return (
//     <div>
              
//         <section id="newsletter" >

//         <img className="bell" src={Bell} alt="" />


//         <div className="rubrik">
//         <p>
//           Subscribe to our newsletter to stay informed about latest updates 
//         </p>
//         </div>


//           <div className="subscribe-grupp">
          
//             <input className="input" type="email" placeholder="&#xf0e0 Your Email" />

//             <button className="subscribe-button">Subscribe</button>

//           </div>

//         </section>
//     </div>
//   )
// }

// export default Newsletter
