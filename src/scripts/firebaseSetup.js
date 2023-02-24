// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const setup = {
  apiKey: "AIzaSyDaTECxxQ2JoXu73YVc7ulUIuviM2oe7ac",
  authDomain: "teacher-practice-image-upload.firebaseapp.com",
  projectId: "teacher-practice-image-upload",
  storageBucket: "teacher-practice-image-upload.appspot.com",
  messagingSenderId: "754053139782",
  appId: "1:754053139782:web:1461428c5f32bf6e94a947",
};

const firebase = initializeApp(setup);

// Initialize Cloud Storage and get a reference to the service
export const cloudStorage = getStorage(firebase);
