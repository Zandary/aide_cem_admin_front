import React from "react";
import { useData } from "../controllers/DataContext";

const Contenu = () => {
  const data = useData();

  console.log([data.sunupay]);
  return (
    <div className="card col m-2 border rounded">
      <div className="card-header  text-center fw-bold">Contenu</div>
      {/* Render the fetched data */}
      <ul className="list-group list-group-flush">
        {data.sunupay
          ? Object.keys(data.sunupay).map((key) => (
              <div className="list-group-item" key={data.sunupay._id}>
                {data.sunupay[key].numero} - {data.sunupay[key].titre}
              </div>
            ))
          : "Loading data..."}
      </ul>
    </div>
  );
};

export default Contenu;
