import { FC, ChangeEvent } from 'react';

interface CustomFilterProps {
  title: string;
  options: string[];
  filters: { manufacturer: string; limit: number; model: string; };
  setFilters: React.Dispatch<React.SetStateAction<{ manufacturer: string; limit: number; model: string; }>>;
}

const CustomFilter: FC<CustomFilterProps> = ({ title, options = [], filters, setFilters }) => {
  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilters(prevFilters => ({ ...prevFilters, [title]: e.target.value }));
  };

  return (
    <select onChange={handleFilterChange} className="custom-filter">
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default CustomFilter;
