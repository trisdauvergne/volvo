import React from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import data from '../../public/api/cars.json';
import styles from '../../styles/Learn.module.scss';

const Details: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const carData = data.filter(car => car.id === id)[0];

  if (carData) {
    return (
      <main className={styles.learn}>
        <Link href={`/`}>
          <a className={styles.learn__back}>{'<'} Back</a>
        </Link>
        <div className={styles.learn__img}>
          <img src={`${carData.imageUrl}`} alt={`Image of Volvo ${carData.modelName}`}/>
        </div>
        <div className={styles.learn__txt}>
          <p>{carData.bodyType}</p>
          <p><span className={styles.learn__modelname}>{carData.modelName}</span> {carData.modelType}</p>
          <Link href={`/shop/${carData.id}`}>
            <a>Shop {'>'}</a>
          </Link>
        </div>
      </main>
    )
  } else {
    return <h1>Loading...</h1>;
  }
};

export default Details;