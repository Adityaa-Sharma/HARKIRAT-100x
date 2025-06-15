import React, { useEffect, useState } from 'react';
import useDebounce from './App';
import fetchdata from './App';

const SearchBar = () => {
  // State to manage the user input
  const [inputValue, setInputValue] = useState('');
  

  // Use the useDebounce hook to get the debounced value
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay
  useEffect(() => {

  // Integrate the debouncedValue in your component logic (e.g., trigger a search API call via a useEffect)

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
  );
};

export default SearchBar;