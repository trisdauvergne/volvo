import React from "react";
import Link from 'next/link';
import { ICarItem } from "../../interfaces/Car";

const CarTile: React.FC<ICarItem> = (car) => {
  console.log(car);

  if (car) {
    return (
      <div>
        <p>{car.bodyType}</p>
        <p>{car.modelName} {car.modelType}</p>
        <Link href={`/learn/${car.id}`} key={car.id}>
          <img src={`${car.imageUrl}`} alt={`Image of Volvo ${car.modelName}`}/>
          </Link>
        <Link href={`/learn/${car.id}`} key={car.id}>
          <a>Learn</a>
        </Link>
        <Link href={'/'}>
          <a>Shop</a>
        </Link>
      </div>
    )
  } else {
    return (
      <h1>Hmmm no car?</h1>
    )
  }
};

export default CarTile;