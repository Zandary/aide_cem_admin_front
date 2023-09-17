import React from "react";
import Chat from "../components/Chat";
import Contenu from "../components/Contenu";

const Dashboard = () => {
  return (
    <div className="container-fluid dashboard">
      <div className="row fillparent">
        {/* Section contenu  */}
        <Contenu />

        {/* Section Edition de contenu  */}
        <div className="col m-2 border rounded">Edit</div>

        {/* Section chat  */}
        <Chat />
      </div>
    </div>
  );
};

export default Dashboard;
