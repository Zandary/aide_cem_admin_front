import React, {useContext, useEffect, useState} from "react";
import DataTableView from "../components/DataTableView";
import { DataProvider } from "../controllers/DataContext";
import Logs from "../components/Logs"
import { SpeedDial } from 'primereact/speeddial';
import { Sidebar } from 'primereact/sidebar';
import { AuthContext } from "../controllers/AuthContext";
import { useNavigate } from "react-router";

const DataView = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate("");
  const [visible, setVisible] = useState(false);

  const items = [
    {
        label: 'Registre',
        icon: 'pi pi-list',
        command: () => {
            // toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            setVisible(true);
        }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            // toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
    }
];


  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="grid card">
      <DataProvider>
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <Logs/>
            </Sidebar>
        <div className="col">
          <DataTableView />
        </div>
        <SpeedDial  model={items} direction="up" style={{ right: 20, bottom: 20 }} buttonClassName="p-button-help" />
      </DataProvider>
    </div>
  );
};

export default DataView;
