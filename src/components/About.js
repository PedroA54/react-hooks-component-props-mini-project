import React from 'react';
import logo from "../assets/logo"; 


const About = ({ image }) => {
  return (
    <aside>
        <img src={image || "https://via.placeholder.com/215"} alt="blog logo" />
      <p>About this blog</p>

    
    </aside>
  );
}

export default About;

