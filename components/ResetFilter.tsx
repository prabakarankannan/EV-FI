import { FC } from 'react';

interface ResetFilterProps {
  setFilters: React.Dispatch<React.SetStateAction<{ manufacturer: string; limit: number; model: string; }>>;
}

const ResetFilter: FC<ResetFilterProps> = ({ setFilters }) => {
  const handleReset = () => {
    setFilters({
      manufacturer: '',
      limit: 8,
      model: ''
    });
  };

  return (
    <button onClick={handleReset}>
      Reset Filters
    </button>
  );
};

export default ResetFilter;
