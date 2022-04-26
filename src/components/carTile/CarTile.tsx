import React from "react";
import Link from 'next/link';
import { ICarItem } from "../../interfaces/Car";
import styles from '../../../styles/CarTile.module.scss';

const CarTile: React.FC<ICarItem> = (car) => {
  if (car) {
    return (
      <div className={styles.car_tile}>
        <p className={styles.car_tile__bodytype}>{car.bodyType}</p>
        <p className={styles.car_tile__model}><span className={styles.car_tile__modelname}>{car.modelName}</span> {car.modelType}</p>
        <Link href={`/learn/${car.id}`} >
          <img src={`${car.imageUrl}`} alt={`Image of Volvo ${car.modelName}`}/>
        </Link>
        <div className={styles.car_tile__links}>
          <Link href={`/learn/${car.id}`} >
            <a>Learn {'>'}</a>
          </Link>
          <Link href={`/shop/${car.id}`}>
            <a>Shop {'>'}</a>
          </Link>
        </div>
      </div>
    )
  } else {
    return (
      <h1>No car loaded</h1>
    )
  }
};

export default CarTile;