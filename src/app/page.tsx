import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import Companies from '@/components/Companies'
import Summary from '@/components/Summary'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <Navigation />
      <Hero />
      <Companies />
      <Summary />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
