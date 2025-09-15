"use client"
import { motion } from 'framer-motion';

export const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5D2CA8]/20 to-[#A46EDB]/20"></div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tighter mb-6">
            Ready to Transform Your 
            <span className="bg-gradient-to-r from-[#5D2CA8] to-[#A46EDB] bg-clip-text text-transparent"> Business?</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-white/70 mb-8 leading-relaxed">
            Let's discuss your project and create a custom software solution that drives your business forward. 
            Get a free consultation and project estimate today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#5D2CA8] to-[#A46EDB] text-white py-4 px-8 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Get Free Consultation
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:border-white/50 hover:bg-white/5 transition-all duration-300"
            >
              View Our Portfolio
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-white font-semibold mb-2">Fast Response</h3>
              <p className="text-white/70 text-sm">Get a response within 24 hours</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-white font-semibold mb-2">Free Estimate</h3>
              <p className="text-white/70 text-sm">No obligation project quote</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-white font-semibold mb-2">Custom Solution</h3>
              <p className="text-white/70 text-sm">Tailored to your business needs</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
};
