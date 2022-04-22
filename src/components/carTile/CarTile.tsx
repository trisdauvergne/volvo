import React from "react";
import Link from 'next/link';
import { ICarItem } from "../../interfaces/Car";

const CarTile: React.FC<ICarItem> = (car) => {
  console.log(car);

  if (car) {
    return (
      <div>
        <h1>{car.modelName}</h1>
        <p>Body Type: {car.bodyType}</p>
        <p>Model Type: {car.modelType}</p>
        <img src={`${car.imageUrl}`}/>
        <Link href={`/learn/${car.id}`} key={car.id}>
          <a>Learn</a>
        </Link>
        <a>Shop</a>
      </div>
    )
  } else {
    return (
      <h1>Hmmm no car?</h1>
    )
  }
};

export default CarTile;