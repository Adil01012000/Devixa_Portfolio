"use client"
import { useState } from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import clsx from "clsx";
import {motion , AnimatePresence} from 'framer-motion';
const items = [
  {
    question: "What types of custom software do you develop?",
    answer:
      "We develop a wide range of custom software solutions including web applications, mobile apps (iOS & Android), desktop software, enterprise systems, APIs, and cloud-based solutions. Our team specializes in creating scalable, secure, and user-friendly applications tailored to your specific business needs.",
  },
  {
    question: "How long does a typical software development project take?",
    answer:
      "Project timelines vary depending on complexity and scope. A simple web application might take 2-4 months, while complex enterprise solutions can take 6-12 months. We provide detailed project timelines during our initial consultation and keep you updated throughout the development process with regular milestones and progress reports.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we offer comprehensive post-launch support and maintenance services. This includes bug fixes, security updates, feature enhancements, performance optimization, and technical support. We provide flexible support packages to ensure your software continues to perform optimally as your business grows.",
  },
  {
    question: "What technologies and frameworks do you use?",
    answer:
      "We work with modern, industry-standard technologies including React, Next.js, Node.js, Python, Java, .NET, React Native, Flutter, AWS, Azure, and more. Our technology choices are always based on your project requirements, scalability needs, and long-term maintenance considerations.",
  },
  {
    question: "How do you ensure the security of our software?",
    answer:
      "Security is fundamental to our development process. We implement security best practices from the ground up, including secure coding standards, regular security audits, penetration testing, data encryption, and compliance with industry standards like GDPR, HIPAA, and SOC 2. We also provide security documentation and training for your team.",
  },
  {
    question: "Can you work with our existing systems and integrate them?",
    answer:
      "Absolutely! We specialize in system integration and can seamlessly connect new software with your existing systems, databases, APIs, and third-party services. Our team has extensive experience in legacy system modernization and creating unified, efficient workflows across your entire technology stack.",
  },
];

const AccordinationItem = ({question, answer}:{question:string, answer: string}) => {
  const[isOpen, setIsOpen] = useState(false);
  return(
   
    <div className=" py-7 border-b border-white/30" onClick={() => setIsOpen(!isOpen)}>
    <div className="flex items-center ">
      <span className="flex-1 text-lg font-bold">{question}</span>
      {isOpen ? <MinusIcon /> :<PlusIcon />}
      
      </div>
      <AnimatePresence>
      {isOpen && (
        <motion.div 
        initial={{opacity: 0, height: 0, marginTop: 0}}
        animate={{opacity: 1, height: "auto" , marginTop:'16px'}}
        exit={{opacity: 0, height: 0, marginTop: 0}}
          >{answer}</motion.div>

      )}
      </AnimatePresence>
    
  </div>
  
    
  )
}

export const FAQs = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 bg-gradient-to-b from-[#5D2CA8] to-black ">
      <div className="container">
        <h2 className="text-5xl sm:text-6xl sm:w-[648px] mx-auto text-center text-white tracking-tighter">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
         {items.map(({question, answer}) => (
            <AccordinationItem question={question} answer={answer} key={question}/>
         ))}
        </div>
      </div>
    </div>
  )
};
