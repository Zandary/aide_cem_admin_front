import React, { useState, useEffect } from "react";

const ContentEditForm = (props) => {
  const [formTitre, setFormTitre] = useState("");
  const [article, setArticle] = useState({});

  useEffect(() => {
    try {
      if (props.data.length > 0) {
        setFormTitre(
          props.data.find((article) => article._id === props.selectedId).titre
        );
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
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

      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Texte
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>

      <div className="mb-3">
        <label for="formFileMultiple" className="form-label">
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
  );
};

export default ContentEditForm;
