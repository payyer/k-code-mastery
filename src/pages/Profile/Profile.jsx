import React from "react";
import PanelActive from "./panelActive/PanelActive";
import Card from "./profileCard/Card";
export default function Profile() {
  return (
    <div className="grid w-full grid-cols-[1fr_2.5fr]">
      <Card />
      <PanelActive />
    </div>
  );
}
