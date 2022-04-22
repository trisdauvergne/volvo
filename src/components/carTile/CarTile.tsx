import React from "react";
import { ICarItem } from "../../interfaces/Car";

const CarTile: React.FC<ICarItem> = (car: ICarItem) => {
  console.log(car);

  if (car) {
    return (
      <div>
        <h1>{car.modelName}</h1>
        <p>Body Type: {car.bodyType}</p>
        <p>Model Type: {car.modelType}</p>
        <img src={`${car.imageUrl}`}/>
      </div>
    )
  } else {
    return (
      <h1>Hmmm no car?</h1>
    )
  }
};

export default CarTile;