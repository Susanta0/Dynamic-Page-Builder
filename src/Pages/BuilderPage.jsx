

import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Canvas from '../Components/Canvas';
import { useLocalStorage } from '../Hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';


const BuilderPage = () => {
  const [layout, setLayout] = useLocalStorage('layout', []);
  const navigate= useNavigate()

  const handleSaveLayout = () => {  
    setLayout(layout);
    alert('Layout saved successfully!');
  };

  const handlePublish = () => {
    setLayout(layout);  // Save to local storage before opening
    // window.open('/published', '_blank');
    navigate(`/published`)
  };
  const handleLoadLayout = () => {
         alert('Layout loaded!');
  };

  return (
    <div className="flex">
      <Sidebar />
      <Canvas layout={layout} setLayout={setLayout} />
      <div className="fixed top-4 right-4 space-x-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSaveLayout}>
          Save Layout
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLoadLayout}>
          Load Layout
                   </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handlePublish}>
          Publish
        </button>
      </div>
    </div>
  );
};

export default BuilderPage;
