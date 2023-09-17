import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [nyvolako, setNyvolako] = useState([]);
  const [sunupay, setSunupay] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch data for NyVolako
    axios.get("https://aide-cem-server.onrender.com/nyvolako").then((response) => {
      setNyvolako(response.data);
    });
    // Fetch data for Sunupay
    axios.get("https://aide-cem-server.onrender.com/sunupay").then((response) => {
      setSunupay(response.data);
    });
    setData({nyvolako: nyvolako, sunupay: sunupay});
  }, []);

  useEffect(() => {
    // Combine NyVolako and Sunupay whever one of them change
    setData({nyvolako: nyvolako, sunupay: sunupay});
  }, [nyvolako, sunupay]);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
