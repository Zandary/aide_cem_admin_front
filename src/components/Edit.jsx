import React, { useContext } from "react";
import { useData } from "../controllers/DataContext";
import { DataContext } from "../controllers/DataContext";

const Edit = () => {
  const { selectedId } = useContext(DataContext); // Use the context

  return (
    <div className="col m-2 border rounded">
      Edit tab
      <div>Selected ID: {selectedId}</div> 
    </div>
  );
};

export default Edit;