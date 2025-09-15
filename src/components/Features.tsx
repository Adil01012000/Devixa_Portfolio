import Bentodemo from './bentogrid';

export const Features = () => {
  return (

    <div id="features" className="bg-black text-white py-[72px] sm:py-24 ">

      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">Why Choose Devixa Technologies</h2>
        <div className='max-w-2xl mx-auto'>
        <p className="text-center mt-5 text-xl text-white/70">
          We combine cutting-edge technology with innovative design to deliver software solutions that exceed expectations and drive measurable business results.
        </p>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 mt-32">
          <Bentodemo />
          

        </div>

      </div>


    </div>
  )
}
