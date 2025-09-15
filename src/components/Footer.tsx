import InstaIcon from '../assets/icons/insta.svg'
import XIcon from '../assets/icons/x-social.svg'
import LinkedInIcon from '../assets/icons/linkedin.svg'
import YoutubeIcon from '../assets/icons/youtube.svg'
import Logo from '../assets/images/logo.png'

export const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white/80 pt-12 border-t border-white/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Left column */}
          <div>
            <img src={Logo.src} alt="Logo" className="h-10 mb-4" />
            <p className="mb-6">Not technology, solutions!</p>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Newsletter</h4>
              <div className="flex items-center border-b border-white/30">
                <input 
                  type="email" 
                  placeholder="Enter Your Email Address" 
                  className="bg-transparent outline-none flex-1 py-2 text-white placeholder-white/40"
                />
                <button className="text-white ml-2">→</button>
              </div>
              <div className="flex items-center mt-2 text-xs">
                <input type="checkbox" id="policy" className="mr-2" />
                <label htmlFor="policy">
                  I agree to the <a href="#" className="underline">Privacy Policy</a>
                </label>
              </div>
            </div>
          </div>

          {/* Middle column */}
          <div>
            {/* <h4 className="font-semibold mb-3">Our locations</h4>
            <p>
              <span className="font-bold">Lahore</span> — 1st floor, C-31/10, Main Blvd, Lake City, Raiwind Road, Lahore, Pakistan
            </p>
            <p className="mt-3">
              <span className="font-bold">Karachi</span> — Office No. 803, 8th Floor, Business Center, 19/1A Shahra e Faisal, Block 6 PECHS Karachi, Pakistan
            </p> */}
            <p className="mt-4"><a href="mailto:info@biafotech.com" className="underline">sales.devixatech@gmail.com</a></p>
            <p className="mt-1 font-bold">+92 309 188 8891</p>
          </div>

          {/* Right column */}
          <div>
            <h4 className="font-semibold mb-3">Links</h4>
            <ul className="space-y-2">
              <li><a href="#">Home</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between border-t border-white/20 pt-6">
          <p className="text-sm">Devixa Technologies © 2025. All Rights Reserved.</p>
          <ul className="flex gap-4 mt-4 sm:mt-0">
            <li><XIcon className="w-5 h-5 cursor-pointer" /></li>
            <li><LinkedInIcon className="w-5 h-5 cursor-pointer" /></li>
            <li><InstaIcon className="w-5 h-5 cursor-pointer" /></li>
            <li><YoutubeIcon className="w-5 h-5 cursor-pointer" /></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
