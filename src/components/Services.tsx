"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CardWithEffect = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className="relative bg-[#000] flex-1 rounded-xl border border-white/30 p-4 sm:p-6 overflow-hidden cursor-pointer transition-all duration-300 hover:border-white/50"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ willChange: 'transform' }}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: '300px',
            height: '300px',
            top: mousePosition.y - 150,
            left: mousePosition.x - 150,
            background: '#5D2CA8',
            filter: 'blur(100px)',
            transform: 'translate(-0%, -0%)',
            zIndex: 10,
            willChange: 'transform, top, left',
          }}
        />
      )}
      {children}
    </div>
  );
};

const ServiceIcon = ({ icon, title }: { icon: string; title: string }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-4 sm:mb-6">
      <div className="relative bg-black border-2 border-white/70 rounded-2xl flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 p-3 sm:p-4 overflow-hidden shadow-[0_0_15px_5px_#dbe0e2] mb-3 sm:mb-4">
        <span className="text-2xl sm:text-3xl">{icon}</span>
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 2,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
          style={{ willChange: 'transform' }}
        />
      </div>
    </div>
  );
};

const CustomSoftwareCard = () => {
  return (
    <CardWithEffect>
      <div className="flex flex-col justify-between h-full">
        <ServiceIcon icon="💻" title="Custom Software" />
        <div className="text-center">
          <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Custom Software Development</h3>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            Tailored software solutions built from scratch to meet your unique business requirements. 
            We create scalable, secure, and efficient applications that drive your business forward.
          </p>
          <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-2">
            <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-white/80">Web Applications</span>
            <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-white/80">Desktop Software</span>
            <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-white/80">API Development</span>
            <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-white/80">Database Design</span>
          </div>
        </div>
      </div>
    </CardWithEffect>
  );
};

const MobileAppCard = () => {
  return (
    <CardWithEffect>
      <div className="flex flex-col justify-between h-full">
        <ServiceIcon icon="📱" title="Mobile Apps" />
        <div className="text-center">
          <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Mobile Application Development</h3>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            Native and cross-platform mobile applications that deliver exceptional user experiences. 
            From iOS to Android, we build apps that users love and businesses rely on.
          </p>
          <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-2">
            <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-white/80">iOS Apps</span>
            <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-white/80">Android Apps</span>
            <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-white/80">React Native</span>
            <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-white/80">Flutter</span>
            <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-white/80">Custom Mobile Apps</span>
          </div>
        </div>
      </div>
    </CardWithEffect>
  );
};

const UXUICard = () => {
  return (
    <CardWithEffect>
      <div className="flex flex-col justify-between h-full">
        <ServiceIcon icon="🎨" title="UX/UI Design" />
        <div className="text-center">
          <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4">UX/UI Design</h3>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            User-centered design that combines beautiful aesthetics with intuitive functionality. 
            We create interfaces that not only look stunning but also provide seamless user experiences.
          </p>
          <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-2">
            <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-white/80">User Research</span>
            <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-white/80">Wireframing</span>
            <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-white/80">Prototyping</span>
            <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-white/80">Design Systems</span>
          </div>
        </div>
      </div>
    </CardWithEffect>
  );
};

const EnterpriseCard = () => {
  return (
    <CardWithEffect>
      <div className="flex flex-col justify-between h-full">
        <ServiceIcon icon="🏢" title="Enterprise Solutions" />
        <div className="text-center">
          <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Enterprise Solutions</h3>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            Comprehensive enterprise-grade solutions that integrate seamlessly with your existing systems. 
            Built for scale, security, and performance.
          </p>
          <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-2">
            <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-white/80">System Integration</span>
            <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-white/80">Cloud Migration</span>
            <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-white/80">DevOps</span>
            <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-white/80">Security</span>
          </div>
        </div>
      </div>
    </CardWithEffect>
  );
};

export const Services = () => {
  return (
    <div id="services" className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter mb-6">
            Our <span className="bg-gradient-to-r from-[#5D2CA8] to-[#A46EDB] bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-white/70 leading-relaxed">
              We transform your ideas into powerful digital solutions. From concept to deployment, 
              we provide end-to-end software development services that drive business growth.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="h-[350px] sm:h-[400px]"
          >
            <CustomSoftwareCard />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-[350px] sm:h-[400px]"
          >
            <MobileAppCard />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-[350px] sm:h-[400px]"
          >
            <UXUICard />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-[350px] sm:h-[400px]"
          >
            <EnterpriseCard />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-gradient-to-r from-[#5D2CA8] to-[#A46EDB] text-white py-4 px-8 rounded-lg font-medium text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 active:scale-95">
            Get Free Consultation
          </button>
        </motion.div>
      </div>
    </div>
  );
};
