import React, { useContext, useState, useEffect } from "react";
import { useData } from "../controllers/DataContext";
import { DataContext } from "../controllers/DataContext";

const Edit = () => {
  const { data, selectedId } = useContext(DataContext); // Use the context
  const [formTitre, setFormTitre] = useState("");

  useEffect(() => {
    console.log("TYPE ", typeof data.sunupay);
    if (data.sunupay === undefined) {
      console.log("data.sunupay not found");
      setFormTitre("Selectionnez un titre");
    } else {
      try {
        if (data.sunupay.length > 0) {
          setFormTitre(
            data.sunupay.find((article) => article._id === selectedId).titre
          );
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, [data.sunupay, selectedId, setFormTitre]);

  console.log(data.nyvolako);
  return (
    <div className="card col m-2 border rounded">
      <div className="card-header text-center fw-bold">Edition</div>
      <div>Selected ID: {selectedId}</div>
      {/* {data.sunupay[0].titre } */}
      <div>
        <form action="#">
          <div className="mb-3">
            <label htmlFor="titre" className="form-label">
              Titre
            </label>
            <input
              id="titre"
              type="text"
              className="form-control"
              value={formTitre}
              onChange={(e) => setFormTitre(e.target.value)}
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Sous Titre 1
            </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
