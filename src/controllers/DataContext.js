import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [nyvolako, setNyvolako] = useState([]);
  const [sunupay, setSunupay] = useState([]);
  const [data, setData] = useState({});
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    // Fetch data for NyVolako
    try {
      axios.get("https://aide-cem-server.onrender.com/nyvolako").then((response) => {
      setNyvolako(response.data);
    });
    } catch (error) {
      // Handle errors here
    if (error.response) {
      // The request was made and the server responded with a status code
      // Handle different status codes here
      console.error('Status Code:', error.response.status);
      console.error('Response Data:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something else happened while setting up the request
      console.error('Error:', error.message);
    }
    }
    
    // Fetch data for Sunupay
    try {
      axios.get("https://aide-cem-server.onrender.com/sunupay").then((response) => {
      setSunupay(response.data);
    });
    } catch (error) {
      // Handle errors here
    if (error.response) {
      // The request was made and the server responded with a status code
      // Handle different status codes here
      console.error('Status Code:', error.response.status);
      console.error('Response Data:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something else happened while setting up the request
      console.error('Error:', error.message);
    }
    }
    
    setData({nyvolako: nyvolako, sunupay: sunupay});
  }, []);

  useEffect(() => {
    // Combine NyVolako and Sunupay whever one of them change
    setData({nyvolako: nyvolako, sunupay: sunupay});
  }, [nyvolako, sunupay]);

  return (
    <DataContext.Provider value={{ data, selectedId, setSelectedId }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}


