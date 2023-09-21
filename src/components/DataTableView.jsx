import React, { useContext, useState, useEffect, useRef } from "react";
import { DataContext } from "../controllers/DataContext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Image } from "primereact/image";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { ContextMenu } from "primereact/contextmenu"; //To fix fa tsy mandeha
import { useForm } from "react-hook-form";

const DataTableView = () => {
  const { data } = useContext(DataContext);
  const [donnee, setDonnee] = useState([]);
  const [expandedRows, setExpandedRows] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const contextMenu = useRef(null);
  const contextMenuItems = [
    { label: "Ajouter", icon: "pi pi-fw pi-search" },
    { label: "Delete", icon: "pi pi-fw pi-trash" },
  ];

  const onSubmit = (data) => console.log(data);
  console.log(watch("example")); // watch input value by passing the name of it

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
            onChange={(e) => {
              options.editorCallback(e.target.value);
              console.log("OPTIONS  :  ", options);
            }}
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
          className="p-inputtext-sm w-10 flex align-items-center"
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
          className="text-justify"
          // body={texteBodyTemplate}
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
    <div className="card p-2 border-1 border-round shadow-4 surface-border surface-0">
      <form onSubmit={handleSubmit(onSubmit)}>
        <DataTable
          className="surface-0"
          size="small"
          editMode="cell"
          scrollable
          scrollHeight="75vh"
          value={donnee}
          tableStyle={{ minWidth: "50rem" }}
          onRowToggle={(e) => setExpandedRows(e.data)}
          rowExpansionTemplate={rowExpansionTemplate}
          expandedRows={expandedRows}
        >
          <Column
            className="text-justify surface-0"
            editor={(options) => cellEditor(options)}
            onCellEditComplete={onCellEditComplete}
            expander={allowExpansion}
            style={{ width: "5rem" }}
          />
          <Column
            className="text-justify surface-0"
            editor={(options) => cellEditor(options)}
            onCellEditComplete={onCellEditComplete}
            field="numero"
            header="Num"
            sortable
          ></Column>
          <Column
            className="text-justify surface-0"
            editor={(options) => cellEditor(options)}
            onCellEditComplete={onCellEditComplete}
            field="titre"
            header="Titre"
          ></Column>
        </DataTable>
      </form>
    </div>
  );
};

export default DataTableView;
