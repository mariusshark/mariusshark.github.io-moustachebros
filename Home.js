import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import moustache from './assets/moustache.png';
import barber7 from './assets/barber7.jpg';
import barber8 from './assets/barber8.jpg';
import barber9 from './assets/barber9.jpg';


export const Home = () => (
    
    
 <div>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={barber7}
      alt="Barbershop1"
    />
    
      
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={barber8}
      alt="Barbershop2"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={barber9}
      alt="Barbershop3"
    />

    
  </Carousel.Item>
</Carousel>
    
    
    
    <img src={moustache} alt="moustache" />
    <p>Imagine a place where you could feel the spirit of last-century‘s barber shop after wandering the small streets of the Oslo.  Hundred-year-old barber’s chair, which travelled long distances across the Atlantic, invite you to sit down and dive into a ritual of shaving, brought to you by an experienced barber.

You only have to find the door, hiding in the corner of Storgata street, marked by the well-known barber shop symbol – the barber‘s pole. And here you are.

Moustache bros. love women from the bottom of their hearts, but this pleasure is designed strictly for men. That’s why it is not recommended for men to bring their ladies to the barbershop, if they don‘t wish to leave them for an hour or two to walk around the Old town or drink too much coffee while waiting for their men.

We pursued to create a luxurious oasis for gentlemen, where conversations would be enriched with splendid beverages, scent of cigars, games of chess and time would just stop for a while. But ladies are very welcome to the barbershop if they would like to purchase a gift card as a present to their men. It is fair to say that the time men spend in the barbershop will be rewarded with joy of women.</p> 
     
 </div>
     
    
 )
