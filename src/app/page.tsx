import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (<>
    <Header/>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Sharp project</h1>
    </main>
    <Footer/>
    </>
  )
}
