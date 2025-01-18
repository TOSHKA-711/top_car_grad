import React, { createContext, useState, useEffect } from 'react';

// Create a single Context
const MyContext = createContext();

const MyProvider = ({ children }) => {
  // Initialize fetchedData state with localStorage
  const getInitialFetchedData = () => {
    const storedData = localStorage.getItem('fetchedData');
    return storedData ? JSON.parse(storedData) : null; // Default is null
  };

  const [fetchedData, setFetchedData] = useState(getInitialFetchedData);

  // Initialize detailsData state with localStorage
  const getInitialDetailsData = () => {
    const storedData = localStorage.getItem('detailsData');
    return storedData ? JSON.parse(storedData) : null; // Default is null
  };

  const [detailsData, setDetailsData] = useState(getInitialDetailsData);

  // Persist fetchedData to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('fetchedData', JSON.stringify(fetchedData));
  }, [fetchedData]);

  // Persist detailsData to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('detailsData', JSON.stringify(detailsData));
  }, [detailsData]);

  return (
    <MyContext.Provider
      value={{
        fetchedData,
        setFetchedData,
        detailsData,
        setDetailsData,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext };
export default MyProvider;
