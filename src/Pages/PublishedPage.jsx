import React, { useEffect, useState } from "react";
import Label from "../Components/Label";
import InputBox from "../Components/InputBox";
import Button from "../Components/Button";
import CheckBox from "../Components/CheckBox";
import Table from "../Components/Table";
import { loadLayoutFromFirebase } from "../Firebase/firebaseService";
// Import Firebase function

const componentMap = {
  Label,
  InputBox,
  Button,
  CheckBox,
  Table,
};

const PublishedPage = () => {
  const [layout, setLayout] = useState([]);

  useEffect(() => {
    const fetchLayout = async () => {
      const loadedLayout = await loadLayoutFromFirebase("layout1"); // Load the layout with id "layout1"
      setLayout(loadedLayout);
    };
    fetchLayout();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">Published Page</h1>
      <div className="mt-4 border-2 flex flex-col w-[300px] m-auto p-4">
        {layout.map((item) => {
          const Component = componentMap[item.componentType];
          return (
            <div key={item.id} className="mb-4">
              <Component {...item.props} isPublished />
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PublishedPage;




// changes 4 oct code 
// import React, { useEffect, useState } from "react";
// import Label from "../Components/Label";
// import InputBox from "../Components/InputBox";
// import Button from "../Components/Button";
// import CheckBox from "../Components/CheckBox";
// import Table from "../Components/Table";
// import { loadLatestLayoutFromFirebase } from "../Firebase/firebaseService"; // Import Firebase function

// const componentMap = {
//   Label,
//   InputBox,
//   Button,
//   CheckBox,
//   Table,
// };

// const PublishedPage = () => {
//   const [layout, setLayout] = useState([]);

//   useEffect(() => {
//     const fetchLatestLayout = async () => {
//       const loadedLayout = await loadLatestLayoutFromFirebase(); // Load the latest layout
//       setLayout(loadedLayout);
//     };
//     fetchLatestLayout();
//   }, []);

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-semibold">Published Page</h1>
//       <div className="mt-4 border-2 flex flex-col w-[300px] m-auto p-4">
//         {layout.map((item) => {
//           const Component = componentMap[item.componentType];
//           return (
//             <div key={item.id} className="mb-4">
//               <Component {...item.props} isPublished />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default PublishedPage;
