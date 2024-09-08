

import React, { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import Label from './Label';
import InputBox from './InputBox';
import Button from './Button';
import CheckBox from './CheckBox';
import Table from './Table';


const componentMap = {
  Label,
  InputBox,
  Button,
  CheckBox,
  Table,
};

const Canvas = ({ layout, setLayout }) => {
  const { setNodeRef } = useDroppable({ id: 'canvas' });

  const addToLayout = (componentType) => {
    setLayout([...layout, { id: Date.now(), componentType, props: {} }]);
  };

  const updateComponentProps = (id, newProps) => {
    const updatedLayout = layout.map((item) =>
      item.id === id ? { ...item, props: newProps } : item
    );
    setLayout(updatedLayout);
  };

  return (
    <div
      ref={setNodeRef}
      className="w-3/4 p-4 pt-20 bg-white border h-screen "
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        const componentType = e.dataTransfer.getData('componentType');
        addToLayout(componentType);
      }}
    >
      {layout.map((item) => {
        const Component = componentMap[item.componentType];
        return (
          <div key={item.id} className="mb-4">
            <Component
              {...item.props}
              updateProps={(newProps) => updateComponentProps(item.id, newProps)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Canvas;



