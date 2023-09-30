import React, { useContext, useState, useEffect } from "react";
import { useData } from "../controllers/DataContext";
import { DataContext } from "../controllers/DataContext";
import { Fieldset } from "primereact/fieldset";
import { InputText } from "primereact/inputtext";

const Edit = () => {
  const { data, selectedId } = useContext(DataContext); // Use the context
  const [formTitre, setFormTitre] = useState("");
  const [selectedArticle, setSelectedArticle] = useState({});

  useEffect(() => {
    console.log("TYPE ", typeof data.sunupay);
    if (data.sunupay === "undefined") {
      console.log("data.sunupay not found");
      setFormTitre("Selectionnez un titre");
    } else {
      try {
        if (data.sunupay.length > 0) {
          setFormTitre(
            data.sunupay.find((article) => article._id === selectedId).titre
          );
          setSelectedArticle(
            data.sunupay.find((article) => article._id === selectedId)
          );
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, [data.sunupay, selectedId, setFormTitre, selectedArticle]);

  console.log("SELECTED ARTICLE: ", selectedArticle.contenu);
  console.log(data.nyvolako);

  return (
    <Fieldset legend="Edition">
      <div>Selected ID: {selectedId}</div>
      <div>
        <form action="#">
          <div className="mb-3">
            <label htmlFor="titre" className="form-label">
              Titre
            </label>
            <InputText
              onChange={(e) => setFormTitre(e.target.value)}
              value={formTitre}
              placeholder="Username"
              className="p-inputtext-sm"
            />
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

          {selectedArticle &&
            selectedArticle.contenu &&
            selectedArticle.contenu.map((elements) =>
              elements.texte.map((paragraph) => (
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={paragraph}
                  ></textarea>
                </div>
              ))
            )}

          <div className="mb-3">
            <label htmlFor="formFileMultiple" className="form-label">
              Insérer des images
            </label>
            <input
              className="form-control"
              type="file"
              id="formFileMultiple"
              multiple
            ></input>
          </div>
        </form>
      </div>
    </Fieldset>
  );
};

export default Edit;
