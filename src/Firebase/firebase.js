import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOPKqf5XVxr6boY1SRzNJ4t3vKQN3_zZY",
  authDomain: "dynamicpagebuilder.firebaseapp.com",
  projectId: "dynamicpagebuilder",
  storageBucket: "dynamicpagebuilder.appspot.com",
  messagingSenderId: "802569863292",
  appId: "1:802569863292:web:ddb248ae3a3f4023d709f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storeData = getFirestore(app);
