import React from "react";
import { useRouter } from "next/router";
// import Link from 'next/link';
// import { ICarItem } from "../../src/interfaces/Car";
// import data from '../../public/api/cars.json';

const Details: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  // const carData = data.filter(car => car.id === id);

  // if (carData) {
  //   return (
  //     <h1>Car: {carData[0].modelName}</h1>
  //   )
  // }

  return <h1>ID {id}</h1>;
};

export default Details;