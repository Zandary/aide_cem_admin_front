import React, { useContext } from "react";
import { useData } from "../controllers/DataContext";
import { DataContext } from "../controllers/DataContext";

const Contenu = () => {
  const { data, setSelectedId } = useContext(DataContext); // Use the context

  console.log([data.sunupay]);
  
  const handleClick = (id) => {
    setSelectedId(id); // Set the selectedId when clicking on a button
  };

  return (
    <div className="card col m-2 border rounded">
      <div className="card-header  text-center fw-bold">Contenu</div>
      {/* Render the fetched data */}
      <ul className="list-group list-group-flush">
        {data.sunupay
          ? Object.keys(data.sunupay).map((key) => (
              <div className="list-group-item" key={data.sunupay._id} onClick={() => handleClick(data.sunupay[key]._id)}>
                {data.sunupay[key].numero} - {data.sunupay[key].titre}              </div>
            ))
          : "Loading data..."}
      </ul>
    </div>
  );
};

export default Contenu;