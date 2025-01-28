import React from 'react';
import { useState } from 'react';

const Filters = () => {
    const [filters, setFilters] = useState([
        { id: 1, name: 'Filter 1', checked: false },
        { id: 2, name: 'Filter 2', checked: false },
        { id: 3, name: 'Filter 3', checked: false },
      ]);
    
      const handleCheckboxChange = (id) => {
        setFilters((prevFilters) =>
          prevFilters.map((filter) =>
            filter.id === id
              ? { ...filter, checked: !filter.checked }
              : filter
          )
        );
      };

    return (
    <div className="flex flex-col items-start m-2 rounded-2xl h-full shadow-blue-200 hover:shadow-pink-200 shadow-lg gap-6 max-w-96 min-w-64 bg-gray-100 p-6">
        <ul className="space-y-3">
          {filters.map((filter) => (
            <li key={filter.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={filter.id}
                checked={filter.checked}
                onChange={() => handleCheckboxChange(filter.id)}
                className="w-4 h-4 accent-light-blue"
              />
              <label htmlFor={filter.id} className="text-gray-800">
                {filter.name}
              </label>
            </li>
          ))}
        </ul>
    </div>
    );
};

export default Filters;