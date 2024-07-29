"use client"; // Ensure this is at the top

import React, { useState } from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  setFilters: React.Dispatch<React.SetStateAction<{
    manufacturer: string;
    limit: number;
    model: string;
  }>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setFilters }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      model: searchTerm,
    }));
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search by model"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
