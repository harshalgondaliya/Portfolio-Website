import movieImage from '../assets/movie.png'
import podcastImage from '../assets/Podcast.png'
import hostImage from '../assets/TooMore.jpg'
import calculusImage from '../assets/Calculus.png'
import spamImage from '../assets/Spam.png'
import plantImage from '../assets/plant.png'
import sentimentImage from '../assets/sentiment.png'

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

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I'm focusing on Artificial Intelligence (AI) and Machine Learning (ML) Development. 💻 Also working on exciting web development 🌐 and AI/ML projects 🤖. Passionate about innovation and always pushing boundaries. 🚀✨ Ready to make an impact! 🔥
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-secondary rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="project-image">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 sm:h-56 object-cover"
                  />
                </a>
              </div>
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-3">{project.title}</h2>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">{project.description}</p>
                <div className="flex justify-between items-center">
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent text-white px-3 sm:px-4 py-2 rounded-md hover:bg-blue-600 transition-colors text-sm sm:text-base"
                  >
                    View Github
                  </a>
                  <span className="text-2xl">😊✨</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 