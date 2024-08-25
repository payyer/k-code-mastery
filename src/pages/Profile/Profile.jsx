import React, { useState } from "react";
import PanelActiveEdit from "./panelActive/PanelActiveEdit";
import Card from "./profileCard/Card";
import PanelActiveCourse from "./panelActive/PanelActiveCourse";

export default function Profile() {
  const [activeTab, setActiveTab] = useState(true);
  return (
    <div className="grid w-full grid-cols-[1fr_2.5fr]">
      <Card setActiveTab={setActiveTab} />
      {!activeTab && <PanelActiveEdit setActiveTab={setActiveTab} />}
      {activeTab && <PanelActiveCourse />}
    </div>
  );
}
