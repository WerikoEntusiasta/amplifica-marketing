import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStackMarquee from './components/TechStackMarquee'
import ServicesBento from './components/ServicesBento'
import Video3DCoverflow from './components/Video3DCoverflow'
import ArtPortfolioGallery from './components/ArtPortfolioGallery'
import SystemsShowcase from './components/SystemsShowcase'
import WebsitesShowcase from './components/WebsitesShowcase'
import About from './components/About'
import ContactFooter from './components/ContactFooter'
import WhatsAppButton from './components/WhatsAppButton'
import BackgroundAudioPlayer from './components/BackgroundAudioPlayer'
import BlogPage from './pages/BlogPage'
import PitchDeckPage from './pages/PitchDeckPage'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog' | 'pitch'>('home')

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase()
      if (hash === '#blog') {
        setCurrentPage('blog')
        document.title = 'Blog & Insights | Amplifica Marketing'
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#apresentacao' || hash === '#deck' || hash === '#pitch' || hash === '#cases') {
        setCurrentPage('pitch')
        document.title = 'Apresentação Executiva & Cases | Amplifica Group'
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setCurrentPage('home')
        document.title = 'Amplifica Marketing | Agência de Marketing Digital & Performance'
      }
    }
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const openBlog = () => {
    setCurrentPage('blog')
    document.title = 'Blog & Insights | Amplifica Marketing'
    window.location.hash = 'blog'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goHome = () => {
    setCurrentPage('home')
    document.title = 'Amplifica Marketing | Agência de Marketing Digital & Performance'
    if (window.location.hash === '#blog' || window.location.hash === '#apresentacao' || window.location.hash === '#deck') {
      window.location.hash = ''
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Navbar onOpenBlog={openBlog} onGoHome={goHome} currentPage={currentPage === 'pitch' ? 'home' : currentPage} />
      
      {currentPage === 'blog' ? (
        <BlogPage onBackToHome={goHome} />
      ) : currentPage === 'pitch' ? (
        <PitchDeckPage onGoHome={goHome} />
      ) : (
        <main>
          <Hero />
          <TechStackMarquee />
          <ServicesBento />
          <Video3DCoverflow />
          <ArtPortfolioGallery />
          <SystemsShowcase />
          <WebsitesShowcase />
          <About />
          <ContactFooter />
        </main>
      )}

      <WhatsAppButton />
      <BackgroundAudioPlayer />
    </>
  )
}

export default App
