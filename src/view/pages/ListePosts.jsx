import React, { useState, useEffect } from "react";
import PostView from "../components/PostView";
import { getPosts } from "../../controllers/ListePostsController";
import { ScrollPanel } from "primereact/scrollpanel";
import { InputText } from "primereact/inputtext";

const ListePosts = () => {
  const [dataSource, setDataSource] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    getPosts()
      .then((data) => {
        setDataSource(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex flex-column gap-2">
      <InputText
        size="small"
        placeholder="Rechercher un post"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="flex flex-column-reverse gap-2">
        <ScrollPanel style={{ width: "100%", height: "85vh" }}>
          {Object.keys(dataSource).map((key) => (
            <div className="flex flex-column align-items-center">
              <PostView post={dataSource[key]} />
            </div>
          ))}
        </ScrollPanel>
      </div>
    </div>
  );
};

export default ListePosts;
