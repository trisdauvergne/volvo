import React from 'react';
import Head from 'next/head'
import data from '../public/api/cars.json'
import styles from '../styles/Home.module.css'

const Home: React.FC = () => {
  console.log('data: ', data);

  return (
    <div className={styles.container}>
      <Head>
        <title>Volvo Test</title>
        <meta name="description" content="Front end code test for Volvo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Volvo Page</h1>
        <button>Learn</button>
      </main>
    </div>
  )
}

export default Home
