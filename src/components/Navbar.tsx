
import LogoImage from '../app/favicon.ico';
import MenuIcon from '../assets/icons/menu.svg';


export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
    <div className="container bg-black">
      <div className="py-4 flex items-center justify-between">

      {/* <div className="relative">
        <div className='absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F7AABE,#B57CEC,#E472D1)] blur-md '></div> */}

      <img src={LogoImage.src ?? LogoImage} alt="Logo" className="h-12 w-12 relative mt-1"/>
      {/* </div> */}
      <div className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden'>

      <MenuIcon className="text-white" />
      </div>
      <nav className='text-white gap-6 items-center hidden sm:flex'>
        
        <a href="#about" className='text-opacity-60 text-white hover:text-opacity-100 transition' >About</a>
        <a href="#services" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Services</a>
        <a href="#features" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Features</a>
        <a href="#portfolio" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Portfolio</a>
        <a href="#contact" className='text-opacity-60 text-white hover:text-opacity-100 transition'>Contact</a>
        <button className='bg-gradient-to-r from-[#5D2CA8] to-[#A46EDB] text-white py-2 px-6 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 active:scale-95'>Get Free Quote</button>
      </nav>

      </div>




    </div>
    </div>
    </div>
  )
};
