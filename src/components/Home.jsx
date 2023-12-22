import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/2.jpg';
import img6 from '../assets/6.webp';
import img7 from '../assets/7.jpg';
import v from '../assets/28.gif';
import a1 from '../assets/a7.png';
import a2 from '../assets/a2.png';
import a3 from '../assets/a3.png';
import a4 from '../assets/a4.png';
import a5 from '../assets/a5.png';
import a6 from '../assets/a6.png';
import vms from '../assets/VMS.jpg';
import hotel from '../assets/hotel.jpg';
import hauto from '../assets/hauto.png';
import iauto from '../assets/iauto.avif';
import scity from '../assets/scity.jpg';
import skill from '../assets/skill.png';
import hd from '../assets/hd.jpg';
import cp from '../assets/cp.webp';
import pcb from '../assets/pcb.png';
import pd from '../assets/pd.webp';
import mm from '../assets/mm.avif';


import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box>
      <div id='home'>
    <MyCarousel/>
    </div>
    <div className="home2" id="about">
    <div className="frame">
      <div className="group">
        <img className="image" alt="Image" src={a1} />
        <img className="img" alt="Image" src={a2} />
        <img className="image-2" alt="Image" src={a3} />
        <img className="image-3" alt="Image" src={a5}/>
        <img className="image-4" alt="Image" src={a4} />
        <img className="image-5" alt="Image" src={a6} />
        <div className="div">
          <div className="text-wrapper">About Us</div>
          <div className="rectangle" />
        </div>
      </div>
    </div>
    </div>
      <div className="home3" id="solution">
        <div className="heading"><h1>Solutions</h1>
        </div>
        <div className="card">
          <div className="first">
            <img src={vms} />
            <p>VMS</p>
          </div>
          <div className="first">
            <img src={hotel} />
            <p>Hotel/ Restaurant Automation</p>
          </div><div className="first">
            <img src={hauto} />
            <p>Home Automation</p>
            </div>
            </div>
            <div className="card">
          <div className="first">
            <img src={iauto} />
            <p>Industrial Automation</p>
          </div><div className="first">
            <img src={scity} />
            <p>Smart City</p>
          </div><div className="first">
            <img src={cp} />
            <p>Customized Products</p>
          </div>
        </div>
        
      </div>
      <div className="home4" id='skill'>
        <div className="main">
          <p>Skill</p>
          <div className="rect"></div>
          <div className="points">
            <ul>
              <li>Embedded System</li>
              <li>Sensors</li>
              <li>Reverse Engineering</li>
              <li>Motors and Control</li>
              <li>IoT</li>
              <li>Analyzer and Monitor</li>
              <li>Wireless Technologies</li>
            </ul>
          </div>
          <img src={skill} />
        </div>
      </div>
      <div className="home3" id="services">
        <div className="heading"><h1>Services</h1>
        </div>
        <div className="card">
          <div className="first">
            <img src={hd} />
            <p>Hardware Design</p>
          </div>
          <div className="first">
            <img src={pcb} />
            <p>PCB Design</p>
          </div><div className="first">
            <img src={hauto} />
            <p>Custom Solution</p>
            </div>
            </div>
            <div className="card">
          <div className="first">
            <img src={mm} />
            <p>Mass Manufacturing</p>
          </div><div className="first">
            <img src={pd} />
            <p>Product Design</p>
          </div>
        </div>       
      </div>
    </Box>
  )
}

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={2000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    
    
    <Box w="full" h={'full'}>
      <Image src={img7} h="87vh" w={'full'} objectFit={'cover'} />
      
    </Box>
    <Box w="full" h={'full'}>
      <img src={v} h="87vh" w={'full'} autoPlay='true'/>
      
    </Box>

    <Box w="full" h={'full'}>
      <Image src={img3} h="87vh" w={'full'} objectFit={'cover'} />
      
    </Box>
    
   
    <Box w="full" h={'full'}>
      <Image src={img4} h="87vh" w={'full'} objectFit={'cover'} />
      
    </Box>
    <Box w="full" h={'full'}>
      <Image src={img6} h="87vh" w={'full'} objectFit={'none'} />
      
    </Box>
    
  </Carousel>
);

export default Home