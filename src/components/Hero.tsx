"use client"
import CursorImage from '../assets/images/cursor.png'
import ArrowIcon from '../assets/icons/arrow-w.svg'
import MessageImage from '../assets/images/message.png'
import Image from 'next/image';
import {motion} from 'framer-motion'
import { AnimatedGradientTextDemo } from './animatedtext';

export const Hero = () => {
  return (
    <div id="about" className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
    <div className="container relative">
      {/* <div className="flex items-center justify-center -mt-10">
        <AnimatedGradientTextDemo/>
      </div> */}
      <div className="flex justify-center mt-8 ">
      <div className="inline-flex relative">
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold tracking-tight text-center leading-tight break-words">Devixa<br />Technologies</h1>

      <motion.div className='absolute right-[478px] top-[108px] hidden sm:inline'
      drag
      dragSnapToOrigin

      >
      {/* <Image src={CursorImage} alt="cursor" height={200} width={200} className='max-w-none' draggable="false"/> */}
      </motion.div>
      <motion.div className='absolute left-[498px] top-[56px] hidden sm:inline'
      drag
      dragSnapToOrigin
      >
      {/* <Image src={MessageImage} alt="cursor"  height={200} width={200} className='max-w-none' draggable="false"/> */}
      </motion.div>
      </div>
      </div>
      <div className="flex justify-center">
      <p className='text-xl text-center mt-8 max-w-2xl'>Transforming ideas into powerful digital solutions. At Devixa Technologies, we specialize in custom software development, mobile applications, and UX/UI design that drive business success and deliver exceptional user experiences.</p>
      </div>
      <div className="flex justify-center mt-8">
      <button className='bg-gradient-to-r from-[#5D2CA8] to-[#A46EDB] text-white py-3 px-8 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 active:scale-95'>Start Your Project</button>
      </div>


    </div>
    

    </div>
  )
};
