import { FC } from 'react';
import { CarProps } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faClock, faRoad } from '@fortawesome/free-solid-svg-icons';
import styles from './CarCard.module.css';

const CarCard: FC<{ car: CarProps }> = ({ car }) => {
  return (
    <div className={styles.carCard}>
      <img src={car.image_url} alt={`${car.Brand} ${car.title}`} className={styles.carImage} />
      <div className={styles.carDetails}>
        <h2 className={styles.carTitle}>{car.Brand} {car.title}</h2>
        <p className={styles.carPrice}>₹ {car.total_price.toLocaleString()} Onwards</p>
        <div className={styles.carSpecs}>
          <p><FontAwesomeIcon icon={faTachometerAlt} /> {car.top_speed} km/h</p>
          <p><FontAwesomeIcon icon={faRoad} /> {car.true_range} km</p>
          <p><FontAwesomeIcon icon={faClock} /> {car.waiting_period} Days</p>
        </div>
        <div className={styles.carActions}>
          
        </div>
      </div>
    </div>
  );
};

export default CarCard;
