import Head from 'next/head'
import Header from '../components/Header'
import MovieList from '../components/MovieList'
import Navbar from '../components/Navbar'
import requests from '../utils/requests'

export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Movie Point</title>
        <meta name="description" content="A point where movies belongs to you" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <Navbar />
      
      <MovieList movies={results} /> 
    </div>
  )
}

export async function getServerSideProps(context){
  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url ||  requests.fetchTrending.url}`).then((res) => {
    return res.json();
  })

  return  {
    props: {
      results: request.results,
    }
  }
}
