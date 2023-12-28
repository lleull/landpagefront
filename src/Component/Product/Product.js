import React from "react";
import "./product.css";
import image from '../../photos/illustration-stay-productive.png'
import pro1 from './p1.jpg'
import pro2 from "./p2.jpg"
import pro3 from './p3.jpg'
import slash from '../../photos/bg-quotes.png'

const Product = () => {
  return (
    <div className="contain">
      
      <div className="sec">
        <div className="first">
          <img className="stay" src={image} alt="sd" />
          <div className="identify">
          <h2>Stay Productive, Wherever you are</h2>
          <p className="paragraph">
            Never let location be an issue when accessign Your files. Fylo has
            you covered for all of you file Storage needs
          </p>
          <p className="paragraph">
            Securley share files and folders with friends, family and colleagues
            for live collaboration. No email attachement needed
          </p>
          
          </div>
         
        </div>
      </div>
      <img className="slash" src={slash} alt="d"/>
      <div className="users">
        <div className="user">
        <h4>Fylo has improved Our Team  productivity by an order of Magnitude.Since making the switch our team has become a well-oiled collaboration machine.</h4>
        <div className="pro">
      
        <img className="pros" src={pro1} alt="dsa"/>
        <p className="username">Satish patel <p className="found">Founder & CEO of hundle</p></p>
       </div>
      </div>
        <div className="user">
        <h4>Fylo has improved Our Team  productivity by an order of Magnitude.Since making the switch our team has become a well-oiled collaboration machine.</h4>
        <div className="pro">
      
        <img className="pros" src={pro2} alt="dsa"/>
        <p className="username">Satish patel <p className="found">Founder & CEO of hundle</p></p>
       </div>
      </div>
        <div className="user">
       
       
        <h4>Fylo has improved Our Team  productivity by an order of Magnitude.Since making the switch our team has become a well-oiled collaboration machine.</h4>
       <div className="pro">
      
        <img className="pros" src={pro3} alt="dsa"/>
        <p className="username">Satish patel <p className="found">Founder & CEO of hundle</p></p>
       </div>
      
      </div>
        </div>
       
    </div>
  );
};

export default Product;
