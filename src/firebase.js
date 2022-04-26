// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCdZXHlg2gQ9AHCYoT3WHF1ogSeLpVJBLE",
	authDomain: "libros-perdidos.firebaseapp.com",
	projectId: "libros-perdidos",
	storageBucket: "libros-perdidos.appspot.com",
	messagingSenderId: "125743828526",
	appId: "1:125743828526:web:9f7e48ce147b23ff2859bf",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
