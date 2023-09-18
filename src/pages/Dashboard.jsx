import React from "react";
import Chat from "../components/Chat";
import Contenu from "../components/Contenu";
import Edit from "../components/Edit";
import { DataProvider } from "../controllers/DataContext";

const Dashboard = () => {
  return (
    <div className="container-fluid dashboard">
      <div className="row">
        <DataProvider>
          {/* Section contenu  */}
          <Contenu />

          {/* Section Edition de contenu  */}
          <Edit />
        </DataProvider>

        {/* Section chat  */}
        <Chat />
      </div>
      <div className="row h-25 border rounded">Footer Content</div>
    </div>
  );
};

export default Dashboard;
