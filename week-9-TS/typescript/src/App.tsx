import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

// basic debouncing 
    // approach: create a json which will get called on every request 
    // create a debouncing logic which will wait for a certain time before making the request



// custom hook to fetch the data from the api

function useFetchData(query: string): Record<string, any> {
  const [data, setData] = useState<Record<string, any>>({});
  
  useEffect(() => {
    axios.get(`http://localhost:3000/debouncing?data=${query}`)
    .then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  },[query]);
  
  return data;  
}

function useDebounce(value: string, delay: number): string {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerid = setTimeout(() => {
      setDebouncedValue(value);
    }
    , delay);
    return () => {
      clearTimeout(timerid);
    }
  }, [value, delay]);
  return debouncedValue;
}


function renderKeyValue({ key, value }: { key: string; value: any }) {
  return (
    <div key={key}>
      <strong>{key}: </strong>
      <span>{String(value)}</span>
    </div>
  );
}



function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500);
  const data = useFetchData(debouncedValue);

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
        style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
      />
      <div>
        {Object.keys(data).length > 0 && (
          Object.entries(data).map(([key, value]) =>
            renderKeyValue({ key, value })
          )
        )}
      </div>
    </div>
  );
}


function App() {

  return (
    <div className="App">
      <SearchBar />
 
    </div>
  )
}

export default App
