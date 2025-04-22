import { useRef } from 'react';
import movieImage from '../assets/movie.png'
import podcastImage from '../assets/Podcast.png'
import hostImage from '../assets/TooMore.jpg'
import calculusImage from '../assets/Calculus.png'
import spamImage from '../assets/Spam.png'
import plantImage from '../assets/plant.png'
import sentimentImage from '../assets/sentiment.png'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: "Movie Recommendation Model",
      description: "Artificial Intelligence (AI) and Machine Learning (ML) algorithms to suggest movies based on user tastes. 🎬🤖 It analyzes viewing habits and ratings to create personalized lists. Popular techniques include Collaborative Filtering. 🔍📊 By integrating Streamlit, it's deployed as an interactive web app that provides real-time movie recommendations. 🖥️✨",
      image: movieImage,
      githubLink: "https://github.com/harshalgondaliya/Movie-Recommendation-Model"
    },
    {
      title: "Podcast AI Summarizer",
      description: "A powerful Artificial Intelligence (AI) powered tool that automatically summarizes podcast episodes by analyzing their RSS feeds. 🎙️🤖 Built with Streamlit and powered by advanced AI models. Features automated summarization, guest information extraction, and key moments highlighting. 📊✨",
      image: podcastImage,
      githubLink: "https://github.com/harshalgondaliya/podcast-ai-summarize"
    },
    {
      title: "TooMore Beverages",
      description: "A modern web application built with cutting-edge technologies. 🌐🚀 Features include automated deployment, SSL management, and performance monitoring. Built with scalability and security in mind. 🔒✨",
      image: hostImage,
      githubLink: "https://github.com/harshalgondaliya/host"
    },
    {
      title: "Calculus Exam Preparation Tool",
      description: "Artificial Intelligence (AI) and Machine Learning (ML) based Calculus Solver for Engineering Semester 3. 📐🤖 It applies algorithms to interpret and solve equations and other mathematical tasks. 📊 With Streamlit, it's deployed as an interactive app, providing real-time solutions for engineering students. 💻✨",
      image: calculusImage,
      githubLink: "https://github.com/harshalgondaliya/Calculus"
    },
    {
      title: "Spam Message Classifier",
      description: "Artificial Intelligence (AI) and Machine Learning (ML) based Spam Message Classifier to detect and filter unwanted messages. 🚫📧 It applies Natural Language Processing (NLP) techniques to analyze message content. 📊 Popular algorithms like Naive Bayes or Logistic Regression are used. 🤖 The goal is to provide a clean and secure inbox. 📨✨",
      image: spamImage,
      githubLink: "https://github.com/harshalgondaliya/SPAM_Messages"
    },
    {
      title: "Plant Disease Detection",
      description: "An Artificial Intelligence (AI) and Machine Learning (ML) based system to identify plant diseases and reactions. 🌱🔍 It analyzes images of plants to classify them as healthy or diseased. 📊 Algorithms like Convolutional Neural Networks (CNN) or Support Vector Machines (SVM) are used. 🤖 The goal is to detect diseases early and boost agricultural productivity. 🌾✨",
      image: plantImage,
      githubLink: "https://github.com/harshalgondaliya/plant_diesease_model"
    },
    {
      title: "Twitter Sentiment Analysis",
      description: "An Artificial Intelligence (AI) and Machine Learning (ML) based system to analyze tweets. 🐦🔍 It classifies them as positive, negative, or neutral using Natural Language Processing (NLP). 📊 Algorithms like Naive Bayes or Long Short-Term Memory (LSTM) networks are used. 🤖 The goal is to understand public opinion and trends. 📈✨",
      image: sentimentImage,
      githubLink: "https://github.com/harshalgondaliya/twitter_sentiment_analysis"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95,
      rotateX: -10
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const cardHoverVariants = {
    hover: {
      scale: 1.02,
      y: -5,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const imageHoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#2563eb",
      boxShadow: "0 4px 6px -1px rgba(37, 99, 235, 0.1), 0 2px 4px -1px rgba(37, 99, 235, 0.06)",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  }

  const titleVariants = {
    hover: {
      color: "#3b82f6",
      x: 5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <br /><br />
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I'm focusing on Artificial Intelligence (AI) and Machine Learning (ML) Development. 💻 Also working on exciting web development 🌐 and AI/ML projects 🤖. Passionate about innovation and always pushing boundaries. 🚀✨ Ready to make an impact! 🔥
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover="hover"
              custom={cardHoverVariants}
            >
              <motion.div 
                className="project-image overflow-hidden"
                variants={imageHoverVariants}
              >
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 sm:h-56 object-cover"
                  />
                </a>
              </motion.div>
              <div className="p-4 sm:p-6">
                <motion.h2 
                  className="text-xl sm:text-2xl font-bold mb-3"
                  variants={titleVariants}
                  whileHover="hover"
                >
                  {project.title}
                </motion.h2>
                <motion.p 
                  className="text-gray-300 mb-4 text-sm sm:text-base"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {project.description}
                </motion.p>
                <div className="flex justify-between items-center">
                  <motion.a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent text-white px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base"
                    variants={buttonHoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    View Github
                  </motion.a>
                  <motion.span 
                    className="text-2xl"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  >
                    😊✨
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 