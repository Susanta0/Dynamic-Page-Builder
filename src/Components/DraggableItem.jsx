
import React from 'react';

const DraggableItem = ({ id, label }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('componentType', id);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="p-2 bg-teal-500 font-bold text-white border rounded-md my-2 cursor-pointer"
    >
      {label}
    </div>
  );
};

export default DraggableItem;
