import { storeData } from "./firebase";

import { collection, doc, setDoc, getDoc } from "firebase/firestore";

const layoutsCollection = collection(storeData, "layouts");

// Save layout to Firebase
export const saveLayoutToFirebase = async (layout, layoutId) => {
  try {
    await setDoc(doc(layoutsCollection, layoutId), { layout });
    // alert("Layout saved to Firebase successfully!");
  } catch (error) {
    console.error("Error saving layout to Firebase:", error);
  }
};


// Load layout from Firebase
export const loadLayoutFromFirebase = async (layoutId) => {
  try {
    const docRef = doc(layoutsCollection, layoutId);
    const finalDoc = await getDoc(docRef);

    if (finalDoc.exists()) {
      return finalDoc.data().layout;
    } else {
      alert("No such layout found!");
      return [];
    }
  } catch (error) {
    console.error("Error loading layout from Firebase:", error);
  }
};


