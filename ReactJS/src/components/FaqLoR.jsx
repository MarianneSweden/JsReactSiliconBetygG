import React from 'react';
import FaqLeft from '../components/FaqLeft.jsx';
import FaqRight from '../components/FaqRight.jsx';

const FaqLor = () => {
  return (
    <div >
      <section id="faq" >
      <div className="column12"> 
      <FaqLeft />
      <FaqRight />
      </div>
      </section>

    </div>
  );
};

export default FaqLor;


// column flexar FaqLeft och FaqRight så då ligger bredvid varandra
