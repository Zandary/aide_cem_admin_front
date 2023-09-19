import React, { useContext, useState, useEffect, useRef } from "react";
import { DataContext } from "../controllers/DataContext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Image } from "primereact/image";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { ContextMenu } from "primereact/contextmenu"; //To fix fa tsy mandeha
import { Dialog } from "primereact/dialog";
import { Editor } from "primereact/editor";

const DataTableView = () => {
  const { data } = useContext(DataContext);
  console.log(data.nyvolako);
  const [donnee, setDonnee] = useState([]);
  const [expandedRows, setExpandedRows] = useState(null);
  const [visibleDialog, setVisibleDialog] = useState(false);
  const [text, setText] = useState(""); //state for RTE
  const contextMenu = useRef(null);
  const contextMenuItems = [
    { label: "Ajouter", icon: "pi pi-fw pi-search" },
    { label: "Delete", icon: "pi pi-fw pi-trash" },
  ];

  useEffect(() => {
    setDonnee(data.nyvolako);
    console.log("Donnée :", donnee);
  }, [data, donnee]);

  const allowExpansion = (rowData) => {
    return rowData.contenu.length > 0;
  };

  const imageBodyTemplate = (rowData) => {
    console.log("ROW DATA:: ", rowData.image ? rowData.image.nom : "NO IMAGE");

    if (rowData.image && rowData.image.nom) {
      console.log("IMG:: ", `${rowData.image.nom}.png`);
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
      setVisibleDialog(true);
      return (
        <Dialog
          value={options.value}
          header="Header"
          visible={visibleDialog}
          style={{ width: "50vw" }}
          onHide={() => setVisibleDialog(false)}
          // onChange={(e) => options.editorCallback(e.target.value)} //
        >
          <div className="card">
            <Editor
              value={text}
              onTextChange={(e) => setText(e.htmlValue)}
              style={{ height: "320px" }}
            />
          </div>
        </Dialog>
      );
    } else {
      return (
        <InputText
          type="text"
          value={options.value}
          onChange={(e) => options.editorCallback(e.target.value)}
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
    <div className="card">
      <DataTable
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
          editor={(options) => cellEditor(options)}
          onCellEditComplete={onCellEditComplete}
          expander={allowExpansion}
          style={{ width: "5rem" }}
        />
        <Column
          editor={(options) => cellEditor(options)}
          onCellEditComplete={onCellEditComplete}
          field="numero"
          header="Num"
          sortable
        ></Column>
        <Column
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
