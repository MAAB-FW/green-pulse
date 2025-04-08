// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  NEXTAUTH_APIKEY,
  NEXTAUTH_APPID,
  NEXTAUTH_AUTHDOMAIN,
  NEXTAUTH_MESSAGINGSENDERID,
  NEXTAUTH_PROJECTID,
  NEXTAUTH_STORAGEBUCKET,
} from "../../env";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: NEXTAUTH_APIKEY,
  authDomain: NEXTAUTH_AUTHDOMAIN,
  projectId: NEXTAUTH_PROJECTID,
  storageBucket: NEXTAUTH_STORAGEBUCKET,
  messagingSenderId: NEXTAUTH_MESSAGINGSENDERID,
  appId: NEXTAUTH_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
