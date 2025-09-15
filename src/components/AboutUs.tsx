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

const StatCard = ({ number, label, description }: { number: string; label: string; description: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#5D2CA8] to-[#A46EDB] bg-clip-text text-transparent mb-2">
        {number}
      </div>
      <div className="text-xl sm:text-2xl font-semibold text-white mb-2">{label}</div>
      <div className="text-white/70 text-sm sm:text-base">{description}</div>
    </motion.div>
  );
};

const ValueCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => {
  return (
    <CardWithEffect>
      <div className="flex flex-col items-center text-center h-full">
        <div className="text-4xl sm:text-5xl mb-4">{icon}</div>
        <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{title}</h3>
        <p className="text-white/70 text-base sm:text-lg leading-relaxed">{description}</p>
      </div>
    </CardWithEffect>
  );
};

const TeamMember = ({ name, role, description }: { name: string; role: string; description: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#000] border border-white/30 rounded-xl p-4 sm:p-6 text-center hover:border-white/50 transition-all duration-300"
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-[#5D2CA8] to-[#A46EDB] rounded-full mx-auto mb-4 flex items-center justify-center">
        <span className="text-2xl sm:text-3xl">👨‍💻</span>
      </div>
      <h4 className="text-white text-lg sm:text-xl font-bold mb-2">{name}</h4>
      <p className="text-[#5D2CA8] text-sm sm:text-base font-medium mb-3">{role}</p>
      <p className="text-white/70 text-sm sm:text-base">{description}</p>
    </motion.div>
  );
};

export const AboutUs = () => {
  return (
    <div id="about" className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter mb-6">
            About <span className="bg-gradient-to-r from-[#5D2CA8] to-[#A46EDB] bg-clip-text text-transparent">Devixa Technologies</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl text-white/70 leading-relaxed mb-8">
              We are a passionate team of developers, designers, and innovators dedicated to transforming 
              your ideas into powerful digital solutions that drive business success.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              Founded with a vision to bridge the gap between cutting-edge technology and business needs, 
              Devixa Technologies has been at the forefront of custom software development, delivering 
              exceptional results for clients across various industries.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-16"
        >
          <StatCard 
            number="50+" 
            label="Projects Delivered" 
            description="Successfully completed software projects" 
          />
          <StatCard 
            number="25+" 
            label="Happy Clients" 
            description="Satisfied businesses worldwide" 
          />
          <StatCard 
            number="5+" 
            label="Years Experience" 
            description="In software development" 
          />
          <StatCard 
            number="99%" 
            label="Client Satisfaction" 
            description="Based on project feedback" 
          />
        </motion.div>

        {/* Our Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">Our Story</h3>
              <div className="space-y-4 text-white/70 text-base sm:text-lg leading-relaxed">
                <p>
                  Devixa Technologies was born from a simple yet powerful belief: every business deserves 
                  access to world-class software solutions that can transform their operations and drive growth.
                </p>
                <p>
                  What started as a small team of passionate developers has grown into a full-service 
                  software development agency, serving clients from startups to enterprise-level organizations.
                </p>
                <p>
                  We combine technical expertise with business acumen, ensuring that every solution we build 
                  not only meets technical requirements but also delivers real business value.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#5D2CA8] to-[#A46EDB] rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🚀</div>
                  <h4 className="text-2xl font-bold mb-2">Innovation First</h4>
                  <p className="text-white/80">Building the future, one line of code at a time</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Our Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ValueCard
              icon="🎯"
              title="Excellence"
              description="We strive for perfection in every project, delivering solutions that exceed expectations and drive measurable results."
            />
            <ValueCard
              icon="🤝"
              title="Collaboration"
              description="We work closely with our clients as partners, ensuring transparent communication and shared success."
            />
            <ValueCard
              icon="💡"
              title="Innovation"
              description="We embrace cutting-edge technologies and creative approaches to solve complex business challenges."
            />
          </div>
        </motion.div>

        {/* Team Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TeamMember
              name="Alex Johnson"
              role="Lead Developer"
              description="Full-stack developer with 8+ years of experience in building scalable web applications and mobile solutions."
            />
            <TeamMember
              name="Sarah Chen"
              role="UX/UI Designer"
              description="Creative designer passionate about creating intuitive user experiences that drive engagement and conversion."
            />
            <TeamMember
              name="Michael Rodriguez"
              role="Project Manager"
              description="Experienced project manager ensuring smooth delivery and client satisfaction across all our projects."
            />
          </div>
        </motion.div> */}

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#5D2CA8] to-[#A46EDB] rounded-2xl p-8 sm:p-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
              "To empower businesses with innovative software solutions that drive growth, 
              enhance efficiency, and create lasting competitive advantages in the digital landscape."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
