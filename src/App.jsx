import React from 'react'
import image from './assets/Images'
import Home from './pages/Home.jsx'
import { useState } from 'react'


const App = () => {
  const [noPosition, setNoPosition] = useState({x:250,y:384});
  const moveNO = (e) => {
    const button = e.target;
    const rect= button.getBoundingClientRect();
    const cursorX = e.clientX;
    const cursorY = e.clientY;
    const distanceX= Math.abs(cursorX - (rect.left + rect.width / 2));
    const distanceY= Math.abs(cursorY - (rect.top + rect.height / 2));
    const threshold = 100;
    if (distanceX < threshold && distanceY < threshold) {
      const containerWidth =400;
      const containerHeight =300;
      const buttonWidth = rect.width;
      const buttonHeight = rect.height;
      const maxX = containerWidth - buttonWidth;
      const maxY = containerHeight - buttonHeight;
      const newX = Math.random() * maxX;
      const newY = Math.random() * maxY;
      setNoPosition({x:newX,y:newY});
    }
  }
  const handleyes = () => {
    const name = prompt("Enter your name:");
    if(name){
      alert(`Congratulations ${name}! I love you too!`);
    }else{
      alert("Please enter your name!");
    }
   
  }
  return (
    <div className='flex justify-center items-center'>
      <div className='bg-pink-200 w-[400px] h-[500px]  text-center  relative border rounded-lg flex flex-col justify-center items-center gap-10 '>
        <img src={image.image6} alt='couple' className='w-[200px] h-[200px] rounded-full'/>
        <div className='text-2xl font-black'>Do you love me?</div>
        <div className='flex gap-4 text-lg font-bold'>
          <button onClick={handleyes}className='bg-blue-500 text-white px-4 py-2 rounded'>YES</button>
          <button onMouseEnter={moveNO} style={{
            position:"absolute",
            left:noPosition.x,
            top:noPosition.y
          }} className='bg-red-500 text-white px-4 py-2 rounded'>NO</button>
        </div>
      </div>
      
    </div>
  )
}


export default App
