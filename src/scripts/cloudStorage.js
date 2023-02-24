// Node modules
import { ref, uploadBytes } from "firebase/storage";

// Project files
import { cloudStorage } from "./firebaseSetup";

export function uploadImage(file, path, name) {
  const fullPath = path + name;
  const storageRef = ref(cloudStorage, fullPath);

  // 'file' comes from the Blob or File API
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log("Uploaded a blob or file!", snapshot);
  });
}
