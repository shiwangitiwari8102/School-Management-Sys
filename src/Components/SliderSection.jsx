import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function  SliderSection() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPgNQYOVeWrLsd_l85y8PEDdFTMc8ir69Ww&usqp=CAU" className=" img" alt="..." />
        <Carousel.Caption>
          <h3 className='crousel-heading'>RD Public School: Igniting Minds, Shaping Futures</h3>
          <p className='crousel-para'>Welcome to RD Public School, where we ignite minds and shape futures. Our institution stands as a beacon of excellence in education, committed to nurturing young minds and empowering them to become tomorrow's leaders.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src="https://cache.careers360.mobi/media/schools/social-media/media-gallery/1656/2022/9/23/Badminton.jpg" className=" img"  alt="..." />
        <Carousel.Caption>
          <h3 className='crousel-heading'>Sports: Where Passion Meets Performance</h3>
          <p className='crousel-para'>Welcome to the world of sports at our school! Here, passion intertwines with performance, creating a dynamic arena where students thrive and excel.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://rdpublicschools.com/wp-content/uploads/2019/05/our_campus_07.jpg" className=" img"  alt="..." />
        <Carousel.Caption>
          <h3 className='crousel-heading'>Smart Class: Discover a World of Educational Excellence and Opportunities</h3>
          <p className='crousel-para'>
          Welcome to our smart class! Here, you'll uncover a realm where educational excellence and limitless opportunities converge.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default  SliderSection;


