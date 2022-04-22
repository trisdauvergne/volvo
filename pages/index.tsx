import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import data from '../public/api/cars.json'
import styles from '../styles/Home.module.css';
import { ICarItem } from '../src/interfaces/Car';
import CarTile from '../src/components/carTile/CarTile';

const Home: React.FC = () => {
  const [ carData, setCarData ] = useState<ICarItem[]>([]);
  
  useEffect(() => {
    setCarData(data);
  }, []);

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
        {carData ? carData.map((car: ICarItem) => <CarTile key={car.id} {...car}/>) : 'Loading'}
      </main>
    </div>
  )
}

export default Home
