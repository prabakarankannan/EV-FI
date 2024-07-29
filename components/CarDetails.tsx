import { FC } from 'react';
import { CarProps } from '../types';

interface CarDetailsProps {
  car: CarProps;
}

const CarDetails: FC<CarDetailsProps> = ({ car }) => {
  return (
    <div className="car-details">
      <img src={car.image_url} alt={`${car.Brand} ${car.title}`} />
      <h2>{car.Brand} {car.title}</h2>
      <p>Total Price: {car.total_price}</p>
      <p>Waiting Period: {car.waiting_period} days</p>
      <p>Top Speed: {car.top_speed} km/h</p>
      <p>True Range: {car.true_range} km</p>
    </div>
  );
};

export default CarDetails;
