import React from 'react';

import POPOSSpace from './POPOSSpace';
import './POPOSList.css';

const POPOSList = () => {
  return (
    <div className='POPOSList'>
      <POPOSSpace
        name="50 California Street"
        address="50 California St."
        image="50-california-st.jpg" 
      />
      <POPOSSpace
        name="100 Pine"
        address="100 Pine St."
        image="100-pine.jpg" 
      />
      <POPOSSpace
        name="101 California"
        address="101 California"
        image="101-california.jpg" 
      />
      <POPOSSpace
        name="343 Sansome Roof Garden"
        address="343 Sansome St."
        image="343-sansome-roof-garden.jpg" 
      />
      <POPOSSpace
        name="525 Market Street Plaza"
        address="525 Market St."
        image="525-market-street-plaza.jpg" 
      />
      <POPOSSpace
        name="555 California"
        address="555 California"
        image="555-california.jpg" 
      />
      <POPOSSpace
        name="Citigroup Center"
        address="Citigroup Center"
        image="citigroup-center.jpg" 
      />
      <POPOSSpace
        name="Embarcadero Center"
        address="Embarcadero Center"
        image="embarcadero-center.jpg" 
      />
      <POPOSSpace
        name="Empire Park"
        address="Empire Park"
        image="empire-park.jpg" 
      />
      <POPOSSpace
        name="Garden Terrace"
        address="Garden Terrace"
        image="garden-terrace-at-150-california.jpg" 
      />
      <POPOSSpace
        name="Transamerica Redwood Park"
        address="Transamerica Redwood Park"
        image="transamerica-redwood-park.jpg" 
      />
      
    </div>
  )
}

export default POPOSList;