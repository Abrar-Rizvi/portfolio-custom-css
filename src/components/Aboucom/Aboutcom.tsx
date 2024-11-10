import './Aboutcom.css'
import React from 'react'
import Imageabrar from '/public/abrar.blue.cot.png'
import Image from 'next/image'
const Aboutcom = () => {
  return (
   <div className='container'>
 <div className='img-div'>
 <Image 
  src={Imageabrar}
  alt='abrar iamge'
  width={200}
  height={200}
  className='img '
  />
 </div>
  <p>I craft immersive digital experiences as a seasoned Front-End Developer, fluent in HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Node.js, React.js, and Next.js. I transform ideas into dynamic, user-friendly interfaces.</p>
   </div>
  )
}

export default Aboutcom