import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage' 

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBg9tfyq3JPl8vn5oNgBvtTRrUnVOyIujk",
    authDomain: "gamexperience-lindomas.firebaseapp.com",
    projectId: "gamexperience-lindomas",
    storageBucket: "gamexperience-lindomas.appspot.com",
    messagingSenderId: "1027391812450",
    appId: "1:1027391812450:web:1c1bd9cc6b5a901f5ff23b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



async function getDB() {
    return getFirestore(app);
}
// async function getStorage(){
//     return getStorage(app)
// }
var files = [];
var reader = new FileReader();

export default getDB;
export const storage = getStorage(app)
// Initialize Cloud Firestore and get a reference to the service
// const db = 