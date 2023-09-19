import React from "react";
import DataTableView from "../components/DataTableView";
import Chat from "../components/Chat";
import { DataProvider } from "../controllers/DataContext";
import ChatAndLog from "../components/ChatAndLog";

const DataView = () => {
  return (
    <div className="grid card">
      <DataProvider>
        <div className="col-8">
          <DataTableView />
        </div>
        <div className="col-4">
          <ChatAndLog />
        </div>
      </DataProvider>
    </div>
  );
};

export default DataView;
