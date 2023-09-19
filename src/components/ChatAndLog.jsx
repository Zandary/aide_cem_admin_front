import React, { useState } from "react";
import Chat from "../components/Chat";
import Logs from "../components/Logs";
import { DataProvider } from "../controllers/DataContext";
import { TabMenu } from "primereact/tabmenu";

const ChatAndLog = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const items = [
    { label: "Chat", icon: "pi pi-fw pi-comment" },
    { label: "Log", icon: "pi pi-fw pi-book" },
  ];

  return (
    <div className="card">
      <TabMenu
        model={items}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
      />
      {activeIndex === 1 ? <Logs /> : <Chat />}
    </div>
  );
};

export default ChatAndLog;
