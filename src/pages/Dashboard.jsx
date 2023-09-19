import React from "react";
import Chat from "../components/Chat";
import Contenu from "../components/Contenu";
import Edit from "../components/Edit";
import { DataProvider } from "../controllers/DataContext";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="grid">
        <DataProvider>
          {/* Section contenu  */}
          <Contenu className="col-4" />

          {/* Section Edition de contenu  */}
          <Edit className="col-4" />
        </DataProvider>

        {/* Section chat  */}
        <Chat className="col-4" />
      </div>

      <div className="grid">
        <div className="col"> Footer Content</div>
      </div>
    </div>
  );
};

export default Dashboard;
