import { useEffect, useState } from 'react';
import axios from 'axios';
import Contenu from '../components/Contenu';

const ContentLoader = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://aide-cem-server.onrender.com/nyvolako")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // Render your view component and pass the fetched data as a prop
  return <Contenu data={data} />;
};

export default ContentLoader;