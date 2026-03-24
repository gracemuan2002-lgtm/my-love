import React from 'react'
import image from './assets/Images'
import Home from './pages/Home.jsx'
import { useState } from 'react'


const App = () => {
  const [noPosition, setNoPosition] = useState({x:100,y:100});
  const moveNO = (e) => {
    let clientX, clientY;
    if (e.touches) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    const rect = e.target.getBoundingClientRect();
    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;
    const distance =Math.hypot(clientX - btnCenterX, clientY - btnCenterY);
    const threshold = 100;
    if (distance <threshold) {
      const containerWidth = 360;
      const containerHeight = 640;
      const x = Math.random() * (containerWidth - rect.width);
      const y = Math.random() * (containerHeight - rect.height);
      setNoPosition({ x, y });
    }
    
  }
  const handleyes = () => {
    const name = prompt("Enter your name:");
    if(name){
      alert(`Congratulations ${name}! WELCOME TO MY HEART `);
    }else{
      alert("Please enter your name!");
    }
   
  }
  return (
    <div className='flex justify-center items-center'>
      <div className='bg-pink-200 w-screen h-screen  text-center  relative border rounded-lg flex flex-col justify-center items-center gap-10  '>      
        <img src={image.image4} alt='couple' className='w-[200px] h-[200px] rounded-full'/>
        <h2 className='text-2x1 font-black'>(yes) or(No) tawh hong dawng ve maw, lungdam .</h2>
        <div className='text-2xl font-black'>Do you love me?</div>
        <div className='flex gap-4 text-lg font-bold'>
          <button onClick={handleyes}className='bg-blue-500 text-white px-4 py-2 rounded'>YES</button>
          <button onMouseEnter={moveNO}
            onTouchStart={moveNO}
            onClick={moveNO}
            style={{
            position:"absolute",
            left:noPosition.x,
            top:noPosition.y,
            transition:"all 0.15s ease"
          }} className='bg-red-500 text-white px-4 py-2 rounded'>NO</button>
          <audio controls><source src={image.audio1} type="audio/mpeg" /></audio>
        </div>
      </div>
      
    </div>
  )
}


export default App
