import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Python from '../assets/python.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Flask from '../assets/flask.png';                      
import Figma from '../assets/figma.png';
import Ubuntu from '../assets/ubuntu.png';
import SQLAlchemy from '../assets/SQLAlchemy.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#090909] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-blue-600 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#486d9c] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#486d9c] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#486d9c] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="Javascript icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#486d9c] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#486d9c] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="Github icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#486d9c] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Python} alt="Python icon" />
                  <p className='my-4'>PYTHON</p>
              </div>
              
              
              <div className='shadow-md shadow-[#486d9c] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#486d9c] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Flask} alt="Flask icon" />
                  <p className='my-4'>Flask</p>
              </div>
              <div className='shadow-md shadow-[#486d9c] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={SQLAlchemy} alt="SQLAlchemy icon" />
                  <p className='my-4'>SQLAlchemy</p>
              </div>
              <div className='shadow-md shadow-[#486d9c] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Figma} alt="figma icon" />
                  <p className='my-4'>Figma</p>
              </div>
              <div className='shadow-md shadow-[#486d9c] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Ubuntu} alt="ubuntu icon" />
                  <p className='my-4'>Ubuntu</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;