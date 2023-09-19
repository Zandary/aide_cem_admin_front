import React, { useContext, useState } from "react";
import { useData } from "../controllers/DataContext";
import { DataContext } from "../controllers/DataContext";
import { Fieldset } from "primereact/fieldset";

import { ListBox } from "primereact/listbox";

const Contenu = () => {
  const { data, setSelectedId } = useContext(DataContext);
  const [selectedMenu, setselectedMenu] = useState(null);

  const handleClick = (id) => {
    setSelectedId(id); // Set the selectedId when clicking on a button
  };

  return (
    <Fieldset legend="Edition" className="col">
      <div className="card flex justify-content-center">
        <ListBox
          value={Array(selectedMenu)}
          onChange={(e) => setselectedMenu(e.value)}
          options={data.sunupay}
          optionLabel="name"
          className="w-full md:w-14rem"
        />
      </div>

      {/* Render the fetched data */}
      {/* <ul className="list-group">
        {data.sunupay ? (
          Object.keys(data.sunupay).map((key) => (
            <div
              className="list-group-item"
              key={data.sunupay[key]._id}
              onClick={() => handleClick(data.sunupay[key]._id)}
              data-bs-toggle="list"
            >
              {data.sunupay[key].numero} - {data.sunupay[key].titre}{" "}
            </div>
          ))
        ) : (
          <span className="loader"></span>
        )}
      </ul> */}
    </Fieldset>
  );
};

export default Contenu;
