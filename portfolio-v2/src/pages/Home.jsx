import Hero from "../components/Hero";
import About from "../components/About";
import Systems from "../components/Systems";
import CaseStudy from "../components/CaseStudy";
import Layout from "../components/Layout";
import Capabilities from "../components/Capabilities";
import SEO from '../components/SEO'

function Home() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Platform Engineer & Co-Founder"
        description="10+ years building production systems. Offline-first runtime, AI orchestration, browser AR, real-time sync. Based in India, open to remote roles."
        url="/"
      />
      {/* Hero */}
      <Hero />
      <div className="max-w-[1100px] mx-auto px-6">
        <About />
        <Capabilities />
        {/* <Systems /> */}
        <CaseStudy />
      </div>
    </div>
  )
  }
  
  export default Home