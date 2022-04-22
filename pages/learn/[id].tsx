import React from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import data from '../../public/api/cars.json';

const Details: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const carData = data.filter(car => car.id === id)[0];

  if (carData) {
    return (
      <div>
        <Link href={`/`}>
          <a>Home</a>
        </Link>
        <p>{carData.bodyType}</p>
        <p>{carData.modelName} {carData.modelType}</p>
        <img src={`${carData.imageUrl}`} alt={`Image of Volvo ${carData.modelName}`}/>
        <Link href={`/`}>
          <a>Shop</a>
        </Link>
      </div>
    )
  } else {
    return <h1>ID {id}</h1>;
  }
};

export default Details;