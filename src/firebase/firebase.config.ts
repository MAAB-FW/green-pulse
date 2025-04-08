// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  NEXT_PUBLIC_APIKEY,
  NEXT_PUBLIC_APPID,
  NEXT_PUBLIC_AUTHDOMAIN,
  NEXT_PUBLIC_MESSAGINGSENDERID,
  NEXT_PUBLIC_PROJECTID,
  NEXT_PUBLIC_STORAGEBUCKET,
} from "../../env";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: NEXT_PUBLIC_APIKEY,
  authDomain: NEXT_PUBLIC_AUTHDOMAIN,
  projectId: NEXT_PUBLIC_PROJECTID,
  storageBucket: NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: NEXT_PUBLIC_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
