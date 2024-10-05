
// import React, { useState } from "react";
// import Sidebar from "../Components/Sidebar";
// import Canvas from "../Components/Canvas";
// import { useNavigate } from "react-router-dom";
// import { loadLayoutFromFirebase, saveLayoutToFirebase } from "../Firebase/firebaseService";

// const BuilderPage = () => {
//   const [layout, setLayout] = useState([]);
//   const navigate = useNavigate();

//   // Handle saving layout by removing "isNew" flag
//   const handleSaveLayout = async () => {
//     const layoutWithoutNewFlag = layout.map(item => ({ ...item, isNew: false }));
//     await saveLayoutToFirebase(layoutWithoutNewFlag, "layout1");
//   };

//   const handleLoadLayout = async () => {
//     const loadedLayout = await loadLayoutFromFirebase("layout1");
//     setLayout(loadedLayout);
//   };

//   const handlePublish = async () => {
//     const layoutWithoutNewFlag = layout.map(item => ({ ...item, isNew: false }));
//     await saveLayoutToFirebase(layoutWithoutNewFlag, "layout1");
//     navigate(`/published`);
//   };

//   return (
//     <div className="flex">
//       <Sidebar />
//       <Canvas layout={layout} setLayout={setLayout} />
//       <div className="fixed top-4 right-4 space-x-2">
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           onClick={handleSaveLayout}
//         >
//           Save Layout
//         </button>
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           onClick={handleLoadLayout}
//         >
//           Load Layout
//         </button>
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           onClick={handlePublish}
//         >
//           Publish
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BuilderPage;










import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Canvas from "../Components/Canvas";
import { useNavigate } from "react-router-dom";
import { loadLayoutFromFirebase, saveLayoutToFirebase } from "../Firebase/firebaseService";

const BuilderPage = () => {
  const [layout, setLayout] = useState([]);
  const navigate = useNavigate();

  // Load layout when the page is loaded or refreshed
  useEffect(() => {
    const fetchLayout = async () => {
      const savedLayout = await loadLayoutFromFirebase("layout1");
      if (savedLayout) {
        setLayout(savedLayout);
      }
    };
    fetchLayout();
  }, []); // Run on initial render

  // Save layout to Firebase
  const handleSaveLayout = async () => {
    const layoutWithoutNewFlag = layout.map(item => ({ ...item, isNew: false }));
    await saveLayoutToFirebase(layoutWithoutNewFlag, "layout1");
  };

  // Load layout from Firebase
  const handleLoadLayout = async () => {
    const loadedLayout = await loadLayoutFromFirebase("layout1");
    setLayout(loadedLayout);
  };

  // Save and publish
  const handlePublish = async () => {
    const layoutWithoutNewFlag = layout.map(item => ({ ...item, isNew: false }));
    await saveLayoutToFirebase(layoutWithoutNewFlag, "layout1");
    navigate(`/published`);
  };

  return (
    <div className="flex">
      <Sidebar />
      <Canvas layout={layout} setLayout={setLayout} />
      <div className="fixed top-4 right-4 space-x-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSaveLayout}
        >
          Save Layout
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLoadLayout}
        >
          Load Layout
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePublish}
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default BuilderPage;
