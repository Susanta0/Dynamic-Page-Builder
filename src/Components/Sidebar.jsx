import React from "react";
import DraggableItem from "./DraggableItem";

const Sidebar = () => {
  const items = ["Label", "InputBox", "CheckBox", "Button", "Table"];

  return (
    <div className="w-1/4 p-4 bg-gray-100 border text-center">
      <h2 className="text-xl font-semibold mb-4">Controls to Drag n Drop</h2>
      {items.map((item, index) => (
        <DraggableItem key={index} id={item} label={item} />
      ))}
    </div>
  );
};

export default Sidebar;
