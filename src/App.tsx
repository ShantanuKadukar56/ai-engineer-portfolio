import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { AIStack } from './components/AIStack'
import { GitHubSection } from './components/GitHubSection'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <AIStack />
      <GitHubSection />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
