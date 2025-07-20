import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// ✅ Updated Firebase Config
export const firebaseConfig = {
  apiKey: "AIzaSyAzNdwxbEEflc7SdmXugUvgzlZmnN49gnM",
  authDomain: "omniplex-5153c.firebaseapp.com",
  projectId: "omniplex-5153c",
  storageBucket: "omniplex-5153c.appspot.com",  // ⬅️ Fixed ".app" to ".appspot.com"
  messagingSenderId: "167549553627",
  appId: "1:167549553627:web:0ae7fbc369a871361435fe",
  measurementId: "G-VLHGLES8LH"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

export const initializeFirebase = () => {
  return app;
};
