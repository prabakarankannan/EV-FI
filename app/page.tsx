"use client"; // Ensure this is at the top

import { useState, useEffect, FC } from 'react';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import CarCard from '../components/CarCard';
import ShowMore from '../components/ShowMore';
import ResetFilter from '../components/ResetFilter';
import { CarProps, PageProps } from '../types';
import styles from './page.module.css';

const Page: FC<PageProps> = ({ searchParams }) => {
  const [filters, setFilters] = useState({
    manufacturer: searchParams.manufacturer || '',
    limit: searchParams.limit ? Number(searchParams.limit) : 16,
    model: searchParams.model || '',
  });

  const [allCars, setAllCars] = useState<CarProps[]>([]);
  const [isDataEmpty, setIsDataEmpty] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = new URLSearchParams(filters as any).toString();
        const res = await fetch(`/api/fetchVehiclesFromCSV?${query}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log('API response:', data);  // Print the entire response

        const { cars } = data || {};
        console.log('Cars:', cars);

        if (cars) {
          setAllCars(cars);
          setIsDataEmpty(!Array.isArray(cars) || cars.length < 1);
        } else {
          setIsDataEmpty(true);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [filters]);

  return (
    <main className="overflow-hidden">
      <Hero />

      <div id="discover" className={`mt-12 ${styles.paddingX} ${styles.paddingY} ${styles.maxWidth}`}>
        <div className={styles.textContainer}>
          <h1 className="text-4xl font-extrabold">Electric Scooter Catalogue</h1>
          <p>Explore the electric scooters you might like</p>
        </div>

        <div className={styles.filters}>
          <SearchBar setFilters={setFilters} />
        </div>

        {!isDataEmpty ? (
          <section>
            <div className={styles.carsWrapper}>
              {allCars.map((car: CarProps) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={Math.floor(filters.limit / 16)}
              isNext={filters.limit <= allCars.length}
              setFilters={setFilters}
              filters={filters}
            />
          </section>
        ) : (
          <div className={styles.errorContainer}>
            <h2 className="text-black text-xl font-bold">Oops!, no results</h2>
            <p>No cars found</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Page;
