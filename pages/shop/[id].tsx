import React from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import data from '../../public/api/cars.json';
import styles from '../../styles/Shop.module.scss'

const ShopDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const carData = data.filter(car => car.id === id)[0];

  const toBeImplemented = () => {
    alert('You clicked on the buy button');
  }

  if (carData) {
    return (
      <main className={styles.shop}>
        <Link href={`/`}>
          <a className={styles.shop__back}>{'<'} Back to cars</a>
        </Link>
        <div className={styles.shop__info}>
            <h1>Buy this car</h1>
            <Link href={`/learn/${carData.id}`}>
              <img src={`${carData.imageUrl}`} alt={`Image of Volvo ${carData.modelName}`}/>
            </Link>
            <div className={styles.shop__txt}>
                <p>{carData.bodyType}</p>
                <p><span className={styles.shop__modelname}>{carData.modelName}</span> {carData.modelType}</p>
            </div>
            <div className={styles.shop__btn}>
              <button onClick={toBeImplemented}>Buy</button>
            </div>
        </div>
      </main>
    )
  } else {
    return <h1>Loading...</h1>;
  }
};

export default ShopDetails;