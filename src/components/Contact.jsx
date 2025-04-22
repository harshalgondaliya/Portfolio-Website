import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  useEffect(() => {
    if (submitStatus.success) {
      const timer = setTimeout(() => {
        setSubmitStatus({ success: false, message: '' });
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [submitStatus.success]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Initialize EmailJS with your public key
    emailjs.init('F0YXRGujwmCCHfqeM');

    emailjs
      .sendForm(
        'service_kv11tkg',
        'template_34xqizc',
        form.current,
        'F0YXRGujwmCCHfqeM'
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setSubmitStatus({
            success: true,
            message: 'Message sent successfully !!'
          });
          form.current.reset();
        },
        (error) => {
          console.error('Email sending failed:', error.text);
          setSubmitStatus({
            success: false,
            message: 'Failed to send message. Please try again later or contact me directly at harshalgondaliya07@gmail.com'
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: "easeIn"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.section 
      id="contact" 
      className="section min-h-screen flex items-center py-12 sm:py-20"
      ref={sectionRef}
      style={{ opacity, scale, y }}
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="exit"
          >
            <motion.form 
              ref={form} 
              onSubmit={sendEmail} 
              className="space-y-6 sm:space-y-8 bg-secondary/50 p-4 sm:p-6 md:p-8 rounded-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5 sm:mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-secondary border border-gray-700 focus:border-accent focus:outline-none transition-all duration-300 hover:border-accent/50 text-sm sm:text-base"
                    placeholder="Your Name"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5 sm:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-secondary border border-gray-700 focus:border-accent focus:outline-none transition-all duration-300 hover:border-accent/50 text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5 sm:mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-secondary border border-gray-700 focus:border-accent focus:outline-none transition-all duration-300 hover:border-accent/50 text-sm sm:text-base"
                  placeholder="Your Message"
                ></textarea>
              </motion.div>
              {submitStatus.message && (
                <motion.div 
                  className={`p-3 sm:p-4 rounded-lg text-sm sm:text-base ${submitStatus.success ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {submitStatus.message}
                </motion.div>
              )}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-accent text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-accent/90 transition-all duration-300 text-sm sm:text-base ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>

            <motion.div 
              className="flex flex-col items-center lg:items-start space-y-6 sm:space-y-8"
              variants={itemVariants}
            >
              <motion.div 
                className="text-center lg:text-left"
                variants={itemVariants}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Connect With Me</h3>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
                  Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                <motion.div 
                  className="space-y-4"
                  variants={itemVariants}
                >
                  <motion.a 
                    href="mailto:harshalgondaliya07@gmail.com"
                    className="flex items-center justify-center lg:justify-start space-x-3 text-gray-300 hover:text-accent transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm sm:text-base break-all">harshalgondaliya07@gmail.com</span>
                  </motion.a>
                </motion.div>
              </motion.div>

              <motion.div 
                className="flex flex-col items-center lg:items-start space-y-4 sm:space-y-6"
                variants={itemVariants}
              >
                <h4 className="text-lg sm:text-xl font-semibold">Follow Me</h4>
                <div className="flex space-x-4 sm:space-x-6">
                  {[
                    {
                      href: "https://www.linkedin.com/in/harshalgondaliya/",
                      icon: (
                        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      )
                    },
                    {
                      href: "https://github.com/harshalgondaliya/",
                      icon: (
                        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                        </svg>
                      )
                    },
                    {
                      href: "https://x.com/harshal257368",
                      icon: (
                        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      )
                    }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-accent transition-colors"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact; 