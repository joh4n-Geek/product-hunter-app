import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2J_ou_RrOVuIeZ00TOhLVmy-iAnSJnpY",
  authDomain: "product-hunter-app.firebaseapp.com",
  projectId: "product-hunter-app",
  storageBucket: "product-hunter-app.appspot.com",
  messagingSenderId: "775011113261",
  appId: "1:775011113261:web:fbbc2e51455e92aa4f5ba4"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);