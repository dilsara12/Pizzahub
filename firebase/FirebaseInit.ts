import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA1IVSb5WRImREeJaSvmvKh4AZLFCDPv3w",
  authDomain: "pizzashop-3274e.firebaseapp.com",
  projectId: "pizzashop-3274e",
  storageBucket: "pizzashop-3274e.firebasestorage.app",
  messagingSenderId: "704084874713",
  appId: "1:704084874713:web:9d23a9d22a4c27868db5c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 👇 Force React Native compatibility
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  //useFetchStreams: false,
}
);

