// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBwqA1JySX04iH-V0-0bHieP6i_BHM9OPA',
  authDomain: 'bloggin-website-5e66a.firebaseapp.com',
  projectId: 'bloggin-website-5e66a',
  storageBucket: 'bloggin-website-5e66a.appspot.com',
  messagingSenderId: '13848539712',
  appId: '1:13848539712:web:d616dceb97dd753379a5a5'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
