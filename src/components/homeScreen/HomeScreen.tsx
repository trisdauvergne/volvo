import React, { useState, useEffect, useRef } from 'react';
import data from '../../../public/api/cars.json';
import { ICarItem } from '../../interfaces/Car';
import CarTile from '../carTile/CarTile';
import styles from '../../../styles/HomeScreen.module.scss';

const HomeScreen: React.FC = () => {
  const [ carData, setCarData ] = useState<ICarItem[]>([]);
  const [ showAllButton, setShowAllButton ] = useState<boolean>(false);
  const [ showFilters, setShowFilters ] = useState<boolean>(false);
  const [ carBodyTypes, setCarBodyTypes ] = useState<string[]>([]);

  useEffect(() => {
    setCarData(data);
  }, []);

  const filterBodyTypes = () => {
    if (showFilters) {
      setShowFilters(false);
    } else {
      const bodyTypes = carData.map(car => car.bodyType).filter((car, index, self) => self.indexOf(car) === index);
      setCarBodyTypes(bodyTypes);
      setShowFilters(true);
    }
  };
  
  const filterCarsByType = (e: any) => {
    const type = e.target.innerHTML;
    const filteredData = data.filter(car => car.bodyType === type);
    setCarData(filteredData);
    setShowAllButton(true);
  }
  
  const resetCars = () => {
    setCarData(data);
    setShowAllButton(false);
  }
  
  const sideScroll = (
    element: any,
    speed: number,
    distance: number,
    step: number,
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };

  const contentWrapper = useRef(null);

  return (
    <section className={styles.cars}>
      <div className={styles.cars__filters}>
        <button onClick={filterBodyTypes}>Filter by body type</button>
        <div>
          {showFilters && carBodyTypes && carBodyTypes.map((type: string, i: number) => <button key={i} onClick={e => filterCarsByType(e)}>{type}</button>)}
          {showAllButton && <button onClick={resetCars}>All</button>}
        </div>
      </div>
      <div ref={contentWrapper} className={styles.cars__container}>
        {carData ? carData.map((car: ICarItem) => (<CarTile key={car.id} {...car}/>)) : <h1>Loading</h1>}
      </div>
      <div className={styles.cars__chevrons}>
        <img onClick={() => {
            sideScroll(contentWrapper.current, 25, 100, -10);
        }} className={styles.chevron} src='../../../docs/chevron-circled.svg' alt="small chevron logo"/>
        <img onClick={() => {
            sideScroll(contentWrapper.current, 25, 100, 10);
        }}className='chevron' src='../../../docs/chevron-circled.svg' alt="small chevron logo"/>
      </div>
    </section>
  )
}

export default HomeScreen
