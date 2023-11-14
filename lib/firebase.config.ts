import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDf6mhrjK6vHvN-6Km-hhmTHTyO0_Q1vz4',
  authDomain: 'energy-app-z.firebaseapp.com',
  projectId: 'energy-app-z',
  storageBucket: 'energy-app-z.appspot.com',
  messagingSenderId: '335560682698',
  appId: '1:335560682698:web:e9c4178c744b24f9c85833',
  measurementId: 'G-17SW3VF9N6',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
