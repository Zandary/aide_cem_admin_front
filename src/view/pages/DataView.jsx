import React, {useContext, useEffect} from "react";
import DataTableView from "../components/DataTableView";
import Chat from "../components/Chat";
import { DataProvider } from "../controllers/DataContext";
import ChatAndLog from "../components/ChatAndLog";
import { AuthContext } from "../controllers/AuthContext";
import { useNavigate } from "react-router";

const DataView = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate("");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="grid card">
      <DataProvider>
        <div className="col-9">
          <DataTableView />
        </div>
        <div className="col-3">
          <ChatAndLog />
        </div>
      </DataProvider>
    </div>
  );
};

export default DataView;
