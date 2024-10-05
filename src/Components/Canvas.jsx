

// import React from "react";
// import { useDroppable } from "@dnd-kit/core";
// import { XCircleIcon } from "lucide-react";
// import Label from "./Label";
// import InputBox from "./InputBox";
// import Button from "./Button";
// import CheckBox from "./CheckBox";
// import Table from "./Table";
// import { saveLayoutToFirebase } from "../Firebase/firebaseService"; // Import save function

// const componentMap = {
//   Label,
//   InputBox,
//   Button,
//   CheckBox,
//   Table,
// };

// const Canvas = ({ layout, setLayout }) => {
//   const { setNodeRef: setCol1Ref } = useDroppable({ id: "column1" });
//   const { setNodeRef: setCol2Ref } = useDroppable({ id: "column2" });
//   const { setNodeRef: setCol3Ref } = useDroppable({ id: "column3" });

//   // Add component to layout and save it
//   const addToLayout = async (componentType, columnId) => {
//     const newLayout = [
//       ...layout,
//       { id: Date.now(), componentType, props: {}, isNew: true, columnId },
//     ];
//     setLayout(newLayout);

//     // Save the layout to Firebase or Local Storage
//     await saveLayoutToFirebase(newLayout, "layout1");
//   };

//   // Update component props
//   const updateComponentProps = (id, newProps) => {
//     const updatedLayout = layout.map((item) =>
//       item.id === id ? { ...item, props: newProps } : item
//     );
//     setLayout(updatedLayout);
//   };

//   // Remove component from layout
//   const removeComponent = async (id) => {
//     const updatedLayout = layout.filter((item) => item.id !== id);
//     setLayout(updatedLayout);

//     // Save the layout after removing the component
//     await saveLayoutToFirebase(updatedLayout, "layout1");
//   };

//   // Handle drop event and save the layout
//   const dropItem = async (e, columnId) => {
//     const componentType = e.dataTransfer.getData("componentType");
//     await addToLayout(componentType, columnId); // Save after adding
//   };

//   return (
//     <div className="w-3/4 p-4 pt-20 bg-white h-screen relative flex gap-4">
//       {/* Column 1 */}
//       <div
//         ref={setCol1Ref}
//         className="w-1/3 border-2 p-4"
//         onDragOver={(e) => e.preventDefault()}
//         onDrop={(e) => dropItem(e, "column1")}
//       >
//         {layout
//           .filter((item) => item.columnId === "column1")
//           .map((item) => {
//             const Component = componentMap[item.componentType];
//             return (
//               <div
//                 key={item.id}
//                 className={`mb-4 relative w-[300px] m-auto ${item.isNew ? "bg-yellow-300" : "bg-white"}`}
//               >
//                 <Component
//                   {...item.props}
//                   updateProps={(newProps) => updateComponentProps(item.id, newProps)}
//                 />
//                 <button
//                   onClick={() => removeComponent(item.id)}
//                   className="absolute top-2 right-2 text-red-500 hover:text-red-700"
//                 >
//                   <XCircleIcon size={24} />
//                 </button>
//               </div>
//             );
//           })}
//       </div>

//       {/* Column 2 */}
//       <div
//         ref={setCol2Ref}
//         className="w-1/3 border-2 p-4"
//         onDragOver={(e) => e.preventDefault()}
//         onDrop={(e) => dropItem(e, "column2")}
//       >
//         {layout
//           .filter((item) => item.columnId === "column2")
//           .map((item) => {
//             const Component = componentMap[item.componentType];
//             return (
//               <div
//                 key={item.id}
//                 className={`mb-4 relative w-[300px] m-auto ${item.isNew ? "bg-yellow-300" : "bg-white"}`}
//               >
//                 <Component
//                   {...item.props}
//                   updateProps={(newProps) => updateComponentProps(item.id, newProps)}
//                 />
//                 <button
//                   onClick={() => removeComponent(item.id)}
//                   className="absolute top-2 right-2 text-red-500 hover:text-red-700"
//                 >
//                   <XCircleIcon size={24} />
//                 </button>
//               </div>
//             );
//           })}
//       </div>

//       {/* Column 3 */}
//       <div
//         ref={setCol3Ref}
//         className="w-1/3 bg-white border-2 p-4"
//         onDragOver={(e) => e.preventDefault()}
//         onDrop={(e) => dropItem(e, "column3")}
//       >
//         {layout
//           .filter((item) => item.columnId === "column3")
//           .map((item) => {
//             const Component = componentMap[item.componentType];
//             return (
//               <div
//                 key={item.id}
//                 className={`mb-4 relative w-[300px] m-auto ${item.isNew ? "bg-yellow-300" : "bg-white"}`}
//               >
//                 <Component
//                   {...item.props}
//                   updateProps={(newProps) => updateComponentProps(item.id, newProps)}
//                 />
//                 <button
//                   onClick={() => removeComponent(item.id)}
//                   className="absolute top-2 right-2 text-red-500 hover:text-red-700"
//                 >
//                   <XCircleIcon size={24} />
//                 </button>
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// };

// export default Canvas;




import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { XCircleIcon } from "lucide-react";
import Label from "./Label";
import InputBox from "./InputBox";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Table from "./Table";
import { saveLayoutToFirebase } from "../Firebase/firebaseService"; // Import save function

const componentMap = {
  Label,
  InputBox,
  Button,
  CheckBox,
  Table,
};

const Canvas = ({ layout, setLayout }) => {
  const { setNodeRef: setCol1Ref } = useDroppable({ id: "column1" });
  const { setNodeRef: setCol2Ref } = useDroppable({ id: "column2" });
  const { setNodeRef: setCol3Ref } = useDroppable({ id: "column3" });

  // Add new component to layout and save it
  const addToLayout = async (componentType, columnId) => {
    const newLayout = [
      ...layout,
      { id: Date.now(), componentType, props: {}, isNew: true, columnId },
    ];
    setLayout(newLayout);

    // Save the layout to Firebase or Local Storage
    await saveLayoutToFirebase(newLayout, "layout1");
  };

  // Update component props
  const updateComponentProps = (id, newProps) => {
    const updatedLayout = layout.map((item) =>
      item.id === id ? { ...item, props: newProps } : item
    );
    setLayout(updatedLayout);
  };

  // Remove component from layout
  const removeComponent = async (id) => {
    const updatedLayout = layout.filter((item) => item.id !== id);
    setLayout(updatedLayout);

    // Save the layout after removing the component
    await saveLayoutToFirebase(updatedLayout, "layout1");
  };

  // Handle drop event for moving elements or adding new ones
  const dropItem = async (e, columnId) => {
    const draggedItemId = e.dataTransfer.getData("existingItemId");
    const componentType = e.dataTransfer.getData("componentType");

    if (draggedItemId) {
      // Move existing item to the new column
      const updatedLayout = layout.map((item) =>
        item.id.toString() === draggedItemId
          ? { ...item, columnId }
          : item
      );
      setLayout(updatedLayout);

      // Save the updated layout
      await saveLayoutToFirebase(updatedLayout, "layout1");
    } else {
      // Add new component to the column
      await addToLayout(componentType, columnId);
    }
  };

  // Start drag for existing items
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("existingItemId", id);
  };

  return (
    <div className="w-3/4 p-4 pt-20 bg-white h-screen relative flex gap-4">
      {/* Column 1 */}
      <div
        ref={setCol1Ref}
        className="w-1/3 border-2 p-4"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => dropItem(e, "column1")}
      >
        {layout
          .filter((item) => item.columnId === "column1")
          .map((item) => {
            const Component = componentMap[item.componentType];
            return (
              <div
                key={item.id}
                className={`mb-4 relative w-[300px] m-auto ${item.isNew ? "bg-yellow-300" : "bg-white"}`}
                draggable
                onDragStart={(e) => handleDragStart(e, item.id)}
              >
                <Component
                  {...item.props}
                  updateProps={(newProps) => updateComponentProps(item.id, newProps)}
                />
                <button
                  onClick={() => removeComponent(item.id)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                >
                  <XCircleIcon size={24} />
                </button>
              </div>
            );
          })}
      </div>

      {/* Column 2 */}
      <div
        ref={setCol2Ref}
        className="w-1/3 border-2 p-4"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => dropItem(e, "column2")}
      >
        {layout
          .filter((item) => item.columnId === "column2")
          .map((item) => {
            const Component = componentMap[item.componentType];
            return (
              <div
                key={item.id}
                className={`mb-4 relative w-[300px] m-auto ${item.isNew ? "bg-yellow-300" : "bg-white"}`}
                draggable
                onDragStart={(e) => handleDragStart(e, item.id)}
              >
                <Component
                  {...item.props}
                  updateProps={(newProps) => updateComponentProps(item.id, newProps)}
                />
                <button
                  onClick={() => removeComponent(item.id)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                >
                  <XCircleIcon size={24} />
                </button>
              </div>
            );
          })}
      </div>

      {/* Column 3 */}
      <div
        ref={setCol3Ref}
        className="w-1/3 bg-white border-2 p-4"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => dropItem(e, "column3")}
      >
        {layout
          .filter((item) => item.columnId === "column3")
          .map((item) => {
            const Component = componentMap[item.componentType];
            return (
              <div
                key={item.id}
                className={`mb-4 relative w-[300px] m-auto ${item.isNew ? "bg-yellow-300" : "bg-white"}`}
                draggable
                onDragStart={(e) => handleDragStart(e, item.id)}
              >
                <Component
                  {...item.props}
                  updateProps={(newProps) => updateComponentProps(item.id, newProps)}
                />
                <button
                  onClick={() => removeComponent(item.id)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                >
                  <XCircleIcon size={24} />
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Canvas;
