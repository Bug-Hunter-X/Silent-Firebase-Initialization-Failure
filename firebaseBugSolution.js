import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Example Firebase service

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  // ... other config values
};

let app;

try {
  // Attempt to get an existing app
app = getApp();
  console.log('App already initialized:', app);
} catch (error) {
  // If no app exists, initialize a new one
  if (error.code === 'app/no-app') {
    app = initializeApp(firebaseConfig);
    console.log('App initialized:', app);
  } else {
    // Handle other initialization errors
    console.error('Firebase initialization error:', error);
  }
}

// Access Firebase services safely
const db = getFirestore(app);  // Assuming Firestore is used
// ... rest of your code

// Example Firestore operation with error handling
db.collection("yourCollection").get().then((querySnapshot)=>{...
}).catch((error) => {
  console.error("Error accessing Firestore:", error);
})