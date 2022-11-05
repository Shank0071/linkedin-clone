import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGHTOIL9LopPN2Y4rG7BuNggA2rgNpQCo",
    authDomain: "linkedin-clone-749eb.firebaseapp.com",
    projectId: "linkedin-clone-749eb",
    storageBucket: "linkedin-clone-749eb.appspot.com",
    messagingSenderId: "1019559887877",
    appId: "1:1019559887877:web:efa5c718f679ffe8f0c86c",
    measurementId: "G-E2DXYJXW1H"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app);
  

  export { db };