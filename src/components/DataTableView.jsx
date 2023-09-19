import React, { useContext, useState, useEffect, useRef } from "react";
import { DataContext } from "../controllers/DataContext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Image } from "primereact/image";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { ContextMenu } from "primereact/contextmenu"; //To fix fa tsy mandeha

const DataTableView = () => {
  const { data } = useContext(DataContext);
  const [donnee, setDonnee] = useState([]);
  const [expandedRows, setExpandedRows] = useState(null);
  const contextMenu = useRef(null);
  const contextMenuItems = [
    { label: "Ajouter", icon: "pi pi-fw pi-search" },
    { label: "Delete", icon: "pi pi-fw pi-trash" },
  ];

  useEffect(() => {
    setDonnee(data.nyvolako);
  }, [data, donnee]);

  const allowExpansion = (rowData) => {
    return rowData.contenu.length > 0;
  };

  const imageBodyTemplate = (rowData) => {
    if (rowData.image && rowData.image.nom) {
      return (
        <Image
          src={`images/${rowData.image.nom}.png`}
          alt={rowData.image.nom}
          width="64px"
          className="shadow-4"
          preview
        />
      );
    } else {
      return <div>Pas d'image</div>;
    }
  };

  const onCellEditComplete = (e) => {
    let { rowData, newValue, field, originalEvent: event } = e;

    switch (field) {
      case "titre":
        if (newValue) rowData[field] = newValue.toUpperCase();
        else event.preventDefault();
        break;

      default:
        if (newValue) rowData[field] = newValue;
        else event.preventDefault();
        break;
    }
  };

  const textEditor = (options) => {
    if (options.field === "texte") {
      return (
        <div id="dialogAnchor">
          <InputTextarea
            value={options.value}
            onChange={(e) => options.editorCallback(e.target.value)}
            rows={5}
            cols={100}
          />
        </div>
      );
    } else {
      return (
        <InputText
          type="text"
          value={options.value}
          onChange={(e) => options.editorCallback(e.target.value)}
          cols={100}
          className="p-inputtext-sm flex align-items-center justify-content-center"
        />
      );
    }
  };

  const cellEditor = (options) => {
    return textEditor(options);
  };

  const rowExpansionTemplate = (data) => {
    return (
      <DataTable editMode="cell" value={data.contenu}>
        <Column
          editor={(options) => cellEditor(options)}
          onCellEditComplete={onCellEditComplete}
          field="sousTitre"
          header="Sous-titre"
        ></Column>
        <Column
          editor={(options) => cellEditor(options)}
          onCellEditComplete={onCellEditComplete}
          field="texte"
          header="Texte"
        ></Column>
        <ContextMenu
          model={contextMenuItems}
          ref={contextMenu}
          breakpoint="767px"
        />
        <Column
          header="Image"
          body={imageBodyTemplate}
          onContextMenu={(e) => contextMenu.current.show(e)}
        />
      </DataTable>
    );
  };

  return (
    <div className="card p-2 border-1 border-round shadow-4 surface-border">
      <DataTable
        size="small"
        editMode="cell"
        maximizable
        scrollable
        scrollHeight="80vh"
        value={donnee}
        tableStyle={{ minWidth: "50rem" }}
        onRowToggle={(e) => setExpandedRows(e.data)}
        rowExpansionTemplate={rowExpansionTemplate}
        expandedRows={expandedRows}
      >
        <Column
          className="text-justify"
          editor={(options) => cellEditor(options)}
          onCellEditComplete={onCellEditComplete}
          expander={allowExpansion}
          style={{ width: "5rem" }}
        />
        <Column
          className="text-justify"
          editor={(options) => cellEditor(options)}
          onCellEditComplete={onCellEditComplete}
          field="numero"
          header="Num"
          sortable
        ></Column>
        <Column
          className="text-justify"
          editor={(options) => cellEditor(options)}
          onCellEditComplete={onCellEditComplete}
          field="titre"
          header="Titre"
        ></Column>
      </DataTable>
    </div>
  );
};

export default DataTableView;
