import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMs7M5xSsep3fo-hwdq-F-aw-T_4PwuzM",
  authDomain: "twitter-clone-ae82d.firebaseapp.com",
  projectId: "twitter-clone-ae82d",
  storageBucket: "twitter-clone-ae82d.appspot.com",
  messagingSenderId: "754061777264",
  appId: "1:754061777264:web:5fa7d8ce4d6f37454297b5",
  measurementId: "G-RNCS5YYTSC",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
