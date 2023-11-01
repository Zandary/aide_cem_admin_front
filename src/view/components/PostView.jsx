import React, { useState } from "react";
import { Card } from "primereact/card";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { ListBox } from "primereact/listbox";
import { sendCommentary } from "../../controllers/CommentaryController";

const PostView = (props) => {
  const [commentaryValue, setCommentaryValue] = useState("");

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "2-digit" };
    return new Date(date).toLocaleDateString("fr-FR", options);
  };

  const handleSendCommentary = () => {
    sendCommentary(props.post._id, commentaryValue)
      .then((data) => {
        console.log("From Front: ", data);
      })
      .catch((error) => {
        console.error("From Front: ", error);
      });
  };

  console.log("COMS  :  ", props.post.commentary);

  return (
    <Card
      title={props.post.title}
      subTitle={formatDate(props.post.createdAt)}
      className="lg:w-8 sm:w-max p-0 my-1"
    >
      <p className="h-auto p-4 my-1 border-1 surface-border border-round">
        {props.post.corps}
      </p>
      <div className="flex flex-row align-items-center gap-1">
        <InputTextarea
          value={commentaryValue}
          onChange={(e) => setCommentaryValue(e.target.value)}
          placeholder="Votre commentaire"
          autoResize
          className="w-full"
          rows={1}
          cols={30}
        />

        <Button icon="pi pi-send" size="small" onClick={handleSendCommentary} />
      </div>

      <div className="flex flex-column gap-1 p-3">
        <ListBox
          emptyMessage="Pas de commentaire pour le moment."
          options={props.post.commentary}
          className="w-full"
        />
      </div>
    </Card>
  );
};

export default PostView;
