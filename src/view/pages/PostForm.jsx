import React, { useState, useRef } from "react";
import { submitPostForm } from "../../controllers/PostFormController";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import { Toast } from "primereact/toast";
import { Ripple } from "primereact/ripple";

const PostForm = () => {
  const [post, setPost] = useState({
    title: "",
    body: "",
    redacteur: "",
  });

  const toast = useRef(null);

  const processForm = (e) => {
    e.preventDefault();
    submitPostForm(post)
.then((data) => {
console.log(data); // Newly created post data
})
.catch((error) => {
console.error(error);
});
    console.log("form submited");
  };

  const onUpload = () => {
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
  };

  return (
    <div className="flex justify-content-center sm:w-screen">
      <form
        className="card flex flex-column justify-content-center surface-card p-4 shadow-2 border-round w-9 gap-2"
        onSubmit={processForm}
      >
        <InputText
          className="p-inputtext-sm"
          value={post.title}
          onChange={(e) =>
            setPost((prevState) => {
              const updatedPost = { ...prevState };

              updatedPost.title = e.target.value;

              return updatedPost;
            })
          }
          placeholder="Insérer un titre"
        />
        <InputText
          className="p-inputtext-sm"
          value={post.redacteur}
          onChange={(e) =>
            setPost((prevState) => {
              const updatedPost = { ...prevState };

              updatedPost.redacteur = e.target.value;

              return updatedPost;
            })
          }
          placeholder="Insérer votre identifiant"
        />
        <InputTextarea
          value={post.body}
          onChange={(e) =>
            setPost((prevState) => {
              const updatedPost = { ...prevState };

              updatedPost.body = e.target.value;

              return updatedPost;
            })
          }
          autoResize
          rows={5}
          cols={30}
        />
        <div className="card">
          <FileUpload
            name="demo[]"
            url={"/api/upload"}
            multiple
            size="small"
            accept="image/*"
            onUpload={onUpload}
            maxFileSize={1000000}
            emptyTemplate={<p className="m-0">Importer des images ici.</p>}
          />
        </div>
        <Button type="submit" label="Poster" size="small" />
      </form>
    </div>
  );
};

export default PostForm;
