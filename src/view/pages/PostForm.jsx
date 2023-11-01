import React, { useState, useRef } from "react";
import { submitPostForm } from "../../controllers/PostFormController";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Toast } from 'primereact/toast';
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import { storage } from "../../firebase";
import { ref, uploadBytesResumable } from "firebase/storage";

const PostForm = () => {
  const [post, setPost] = useState({
    title: "",
    body: "",
    redacteur: "",
  });
  const [selectedFiles, setSelectedFiles] = useState([]);

  const toast = useRef(null);

  const processForm = (e) => {
    e.preventDefault();

    // Start the upload process
    if (Array.isArray(selectedFiles)) {
      selectedFiles.forEach(file => {
        uploadFile(file);
      });
    }

    submitPostForm(post)
      .then((data) => {
        console.log(data); // Newly created post data
      })
      .catch((error) => {
        console.error(error);
      });

    console.log("form submited");


  };

  const onFileSelect = (e) => {
    setSelectedFiles(e.files);
  };

  const uploadFile = (file) => {
    const storageRef = ref(storage, 'some-child-path/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        // Handle the upload progress
        console.log("uploading.....");
      },
      (error) => {
        // Handle unsuccessful uploads
        toast.current.show({ severity: 'error', summary: 'Error', detail: error });
        console.log('error on upload image')
      },
      () => {
        // Handle successful uploads on complete
        console.log('success')
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'Image sent' });
      }
    );
  };

  return (
    <div className="flex justify-content-center sm:w-screen">
      <Toast ref={toast} />
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
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={onFileSelect}
          />
        </div>
        <Button type="submit" label="Poster" size="small" />
      </form>
    </div>
  );
};

export default PostForm;
