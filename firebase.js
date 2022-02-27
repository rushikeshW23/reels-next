// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyCTQCSfS1O-W9bQ0w1FTyAXoUnqf2CMXpE",
      authDomain: "reels-nextjs-8446e.firebaseapp.com",
      projectId: "reels-nextjs-8446e",
      storageBucket: "reels-nextjs-8446e.appspot.com",
      messagingSenderId: "430440402729",
      appId: "1:430440402729:web:880aeaed52a1c8edb07138"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const auth = getAuth();
    const storage = getStorage();
    const db = getFirestore();

    export { auth, storage , db };

    export default app;