import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

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

  return (
    <section id="contact" className="section min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="heading text-center mb-16">Get In Touch</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <form ref={form} onSubmit={sendEmail} className="space-y-8 bg-secondary/50 p-8 rounded-xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-gray-700 focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-gray-700 focus:border-accent focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-gray-700 focus:border-accent focus:outline-none transition-colors"
                  placeholder="Your Message"
                ></textarea>
              </div>
              {submitStatus.message && (
                <div className={`p-4 rounded-lg ${submitStatus.success ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                  {submitStatus.message}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-accent text-white px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors transform hover:scale-[1.02] ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div className="flex flex-col items-center lg:items-start space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-4">Connect With Me</h3>
                <p className="text-gray-300 text-lg mb-8">
                  Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                <div className="space-y-4">
                  <a 
                    href="mailto:harshalgondaliya07@gmail.com"
                    className="flex items-center space-x-3 text-gray-300 hover:text-accent transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>harshalgondaliya07@gmail.com</span>
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-start space-y-6">
                <h4 className="text-xl font-semibold">Follow Me</h4>
                <div className="flex space-x-6">
                  <a
                    href="https://www.linkedin.com/in/harshalgondaliya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors transform hover:scale-110"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/harshalgondaliya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors transform hover:scale-110"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                    </svg>
                  </a>
                  <a
                    href="https://x.com/harshal257368"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors transform hover:scale-110"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 