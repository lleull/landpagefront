import React from 'react'
import illu from  '../../photos/illustration-intro.png'
import security from  '../../photos/icon-security.svg'
import anywhere from  '../../photos/icon-access-anywhere.svg'
import arrow from './../../photos/icon-arrow.svg'
import time from  '../../photos/icon-collaboration.svg'
import About from '../About/About'
import anyfile from  '../../photos/icon-any-file.svg'
import './home.css'
import Product from '../Product/Product'
const Home = () => {
  return (
    <div className='homepage'>
         <img className='illu' src={illu} alt='ds'/>
         <div className='words'>
            <h1 className='files'>All Your Files in one secured location, <br/> Accessible Anywhere </h1>
            <p>Fylo stores all your most important files in one secure location</p>
            <p>Access them whenever you need,  share and collaborate with</p>
            <p>friends family, co-workers</p>
            <button className='startbtn'>Get Started</button>
         </div>
         <div className='cards'>
            <div className='align'>
         <div className='homecard'>
            <img className='logos' src={anywhere} alt='sds'/>
            <h1 className='title'>Access Your files, Anywhere</h1>
            <p  className='paras'>The ability to use smartphones, tablets or computer to access Your account  means your files follow you everywhere</p>
         </div>
         <div className='homecard'>
            <img  className='logos' src={security} alt='sds'/>
            <h1 className='title'>Access Your files, Anywhere</h1>
            <p className='paras'>The ability to use smartphones, tablets or computer to access Your account  means your files follow you everywhere</p>
         </div>
         </div>
         <div className='align'>
         <div className='homecard'>
            <img  className='logos' src={time} alt='sds'/>
            <h1 className='title'>Access Your files, Anywhere</h1>
            <p  className='paras'>The ability to use smartphones, tablets or computer to access Your account  means your files follow you everywhere</p>
         </div>
         <div className='homecard'>
            <img  className='logos' src={anyfile} alt='sds'/>
            <h1 className='title'>Access Your files, Anywhere</h1>
            <p className='paras'>The ability to use smartphones, tablets or computer to access Your account  means your files follow you everywhere</p>
         </div>
       
         </div>
         </div>
         <p className='see'>See how it Works <img className='arrow' src={arrow} alt='asd'/></p>
        <Product/>
        <About/>
    </div>
  )
}

export default Home