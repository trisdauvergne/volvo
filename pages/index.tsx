import React from 'react';
import Head from 'next/head'
import HomeScreen from '../src/components/homeScreen/HomeScreen';

const Home: React.FC = () => {
  return (
    <main>
      <Head>
        <title>Volvo Test</title>
        <meta name="description" content="Front end code test for Volvo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeScreen />
    </main>
  )
}

export default Home
