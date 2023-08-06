import Image from 'next/image'
import Maincontent from '@/components/mainContent'
import Features from '@/components/features'
import Section from '@/components/section'
export default function Home() {
  return (
    <main>
      <Maincontent/>
      <Section/>
      <Features/>
    </main>
  )
}
