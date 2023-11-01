import React, { useState } from "react";
import Chat from "../components/Chat";
import Logs from "../components/Logs";
import { TabMenu } from "primereact/tabmenu";

const ChatAndLog = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const items = [
    { label: "Log", icon: "pi pi-fw pi-book" },
  ];

  return (
    <div className="card">
      <TabMenu
        model={items}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
        className="h-3rem"
      />
      {activeIndex === 1 ? <Logs /> : <Chat />}
    </div>
  );
};

export default ChatAndLog;
