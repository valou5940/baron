

import React from 'react';


const divStyle = {
  position: 'absolute',
  bottom: '30px',
  width: '50%',
  left: '40px',
};
const divStyle2 = {
  position: 'absolute',
  bottom: '30px',
  width: '40%',
  left: '70px',
};
const divStyle3 = {
  position: 'absolute',
  bottom: '30px',
  left: '110px',

};


const Accueil = () => (


  <div className="">

    <a className="fac-ic" style={divStyle} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/baroncrane/">
      <i className="fab fa-facebook-f fa-lg white-text fa-2x"> </i>
    </a>
    <a className="ins-ic" style={divStyle2} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/baron.crane/">
      <i className="fab fa-instagram fa-lg white-text fa-2x"> </i>
    </a>
    <a className="pin-ic" style={divStyle3} target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/baroncrane">
      <i className="fab fa-youtube fa-lg white-text fa-2x"> </i>
    </a>
  </div>
  // {/* <!-- ##### Song Area End ##### --> */}

);

export default Accueil;
