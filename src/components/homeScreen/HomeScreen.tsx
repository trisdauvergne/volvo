import React, { useState, useEffect } from 'react';
import data from '../../../public/api/cars.json';
import { ICarItem } from '../../interfaces/Car';
import CarTile from '../carTile/CarTile';
import styles from '../../../styles/HomeScreen.module.scss';

const HomeScreen: React.FC = () => {
  const [ carData, setCarData ] = useState<ICarItem[]>([]);
  
  useEffect(() => {
    setCarData(data);
  }, []);

  return (
    <section className={styles.cars}>
      <div className={styles.cars__container}>
        {carData ? carData.map((car: ICarItem) => (<CarTile key={car.id} {...car}/>)) : <h1>Loading</h1>}
      </div>
      <div className={styles.cars__chevrons}>
        <img className={styles.chevron} src='../../../docs/chevron-circled.svg' alt="small chevron logo"/>
        <img className='chevron' src='../../../docs/chevron-circled.svg' alt="small chevron logo"/>
      </div>
    </section>
  )
}

export default HomeScreen
