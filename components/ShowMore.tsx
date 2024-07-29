"use client"; // Ensure this is at the top

import React from 'react';
import styles from './ShowMore.module.css';

interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setFilters: React.Dispatch<React.SetStateAction<{
    manufacturer: string;
    limit: number;
    model: string;
  }>>;
  filters: {
    manufacturer: string;
    limit: number;
    model: string;
  };
}

const ShowMore: React.FC<ShowMoreProps> = ({ pageNumber, isNext, setFilters, filters }) => {
  const handleShowMore = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      limit: (pageNumber + 1) * 16,
    }));
  };

  return (
    <div className={styles.showMoreContainer}>
      {isNext && (
        <button className={styles.showMoreButton} onClick={handleShowMore}>
          Show More
        </button>
      )}
    </div>
  );
};

export default ShowMore;
