import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Movie Point</title>
        <meta name="description" content="A point where movies belongs to you" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <Navbar />
      
    </div>
  )
}
